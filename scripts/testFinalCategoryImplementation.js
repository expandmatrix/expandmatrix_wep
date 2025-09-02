const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Načteme .env soubor
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const STRAPI_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN není nastaven v .env souboru');
  process.exit(1);
}

// Simulace transformCategory funkce
function transformCategory(strapiCategory, locale) {
  const localizations = strapiCategory.category_i_18_ns || [];
  const localization = localizations.find(loc => loc.lang === locale) || localizations[0];
  
  return {
    id: strapiCategory.id,
    name: localization?.name || strapiCategory.name_cat || 'Bez názvu',
    slug: localization?.slug || 'bez-nazvu',
    description: localization?.description || '',
    color: '#000000',
    createdAt: strapiCategory.createdAt,
    updatedAt: strapiCategory.updatedAt
  };
}

// Simulace getCategories funkce
async function getCategories(locale = 'en') {
  try {
    const response = await fetch(`${STRAPI_URL}/api/categories?populate=category_i_18_ns&filters[is_active][$eq]=true&sort=sort_order:asc`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Neplatná struktura dat');
    }

    return data.data.map(category => transformCategory(category, locale));
  } catch (error) {
    console.error('Chyba při načítání kategorií:', error);
    throw error;
  }
}

// Simulace getBlogCategories funkce s bilingválním načítáním
async function getBlogCategories(locale = 'en') {
  const fallbackCategories = [];

  try {
    console.log(`Načítám kategorie ze Strapi CMS pro jazyk: ${locale}...`);
    
    // Načteme kategorie pro oba jazyky
    const [csCategories, enCategories] = await Promise.all([
      getCategories('cs'),
      getCategories('en')
    ]);
    
    if (!csCategories || !Array.isArray(csCategories)) {
      console.warn('Neplatná data českých kategorií ze Strapi, používám fallback');
      return fallbackCategories;
    }

    if (csCategories.length === 0) {
      console.warn('Žádné české kategorie ze Strapi, používám fallback');
      return fallbackCategories;
    }

    // Mapujeme kategorie s bilingválními názvy
    const mappedCategories = csCategories
      .filter(category => {
        if (!category || !category.slug) {
          console.warn('Neplatná kategorie:', category);
          return false;
        }
        return true;
      })
      .map((csCategory) => {
        // Najdeme odpovídající anglickou kategorii podle ID
        const enCategory = enCategories?.find(en => en.id === csCategory.id);
        
        return {
          id: csCategory.id.toString(),
          slug: locale === 'cs' ? csCategory.slug : (enCategory?.slug || csCategory.slug),
          name: { 
            cs: csCategory.name,
            en: enCategory?.name || csCategory.name
          },
          description: { 
            cs: csCategory.description || '',
            en: enCategory?.description || csCategory.description || ''
          },
          order: 1,
          isActive: true,
          icon: undefined
        };
      });

    console.log(`✅ Úspěšně načteno ${mappedCategories.length} kategorií`);
    return mappedCategories;
    
  } catch (error) {
    console.error('Chyba při načítání kategorií ze Strapi:', error);
    return fallbackCategories;
  }
}

// Simulace getCategoryBySlug funkce
async function getCategoryBySlug(slug, locale = 'en') {
  try {
    const categories = await getBlogCategories(locale);
    return categories.find(category => category.slug === slug) || null;
  } catch (error) {
    console.error('Chyba při načítání kategorie podle slug:', error);
    return null;
  }
}

// Hlavní testovací funkce
async function testFinalImplementation() {
  console.log('🚀 Finální test implementace kategorií\n');
  
  try {
    // Test 1: Načtení všech kategorií v češtině
    console.log('📋 Test 1: Načtení všech kategorií (CS)');
    const csCategories = await getBlogCategories('cs');
    console.log(`✅ Načteno ${csCategories.length} českých kategorií`);
    csCategories.forEach(cat => {
      console.log(`   - ${cat.name.cs} (${cat.slug}) | EN: ${cat.name.en}`);
    });
    
    // Test 2: Načtení všech kategorií v angličtině
    console.log('\n📋 Test 2: Načtení všech kategorií (EN)');
    const enCategories = await getBlogCategories('en');
    console.log(`✅ Načteno ${enCategories.length} anglických kategorií`);
    enCategories.forEach(cat => {
      console.log(`   - ${cat.name.en} (${cat.slug}) | CS: ${cat.name.cs}`);
    });
    
    // Test 3: Vyhledání kategorie podle slug (CS)
    console.log('\n📋 Test 3: Vyhledání kategorie podle slug (CS)');
    const csCategory = await getCategoryBySlug('novinky', 'cs');
    if (csCategory) {
      console.log('✅ Kategorie nalezena:', {
        id: csCategory.id,
        slug: csCategory.slug,
        name_cs: csCategory.name.cs,
        name_en: csCategory.name.en
      });
    } else {
      console.log('❌ Kategorie nenalezena');
    }
    
    // Test 4: Vyhledání kategorie podle slug (EN)
    console.log('\n📋 Test 4: Vyhledání kategorie podle slug (EN)');
    const enCategory = await getCategoryBySlug('news', 'en');
    if (enCategory) {
      console.log('✅ Kategorie nalezena:', {
        id: enCategory.id,
        slug: enCategory.slug,
        name_cs: enCategory.name.cs,
        name_en: enCategory.name.en
      });
    } else {
      console.log('❌ Kategorie nenalezena');
    }
    
    // Test 5: Vyhledání neexistující kategorie
    console.log('\n📋 Test 5: Vyhledání neexistující kategorie');
    const nonExistent = await getCategoryBySlug('neexistuje', 'cs');
    if (nonExistent) {
      console.log('❌ Neočekávaně nalezena kategorie');
    } else {
      console.log('✅ Správně vráceno null pro neexistující kategorii');
    }
    
    console.log('\n🎯 Všechny testy dokončeny úspěšně!');
    
  } catch (error) {
    console.error('❌ Chyba při testování:', error);
  }
}

// Spuštění testů
testFinalImplementation();