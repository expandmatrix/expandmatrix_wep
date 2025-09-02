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
    
    console.log('České kategorie:', csCategories);
    console.log('Anglické kategorie:', enCategories);
    
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
        console.log(`Zpracovávám kategorii: ${csCategory.slug}`);
        
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

// Hlavní testovací funkce
async function testBilingualCategories() {
  console.log('🚀 Testování bilingválního načítání kategorií\n');
  
  try {
    // Test 1: České kategorie
    console.log('📋 Test 1: České kategorie');
    const csCategories = await getBlogCategories('cs');
    console.log('České kategorie:', JSON.stringify(csCategories, null, 2));
    
    // Test 2: Anglické kategorie
    console.log('\n📋 Test 2: Anglické kategorie');
    const enCategories = await getBlogCategories('en');
    console.log('Anglické kategorie:', JSON.stringify(enCategories, null, 2));
    
    // Test 3: Porovnání
    console.log('\n📋 Test 3: Porovnání kategorií');
    console.log(`České kategorie: ${csCategories.length}`);
    console.log(`Anglické kategorie: ${enCategories.length}`);
    
    if (csCategories.length > 0 && enCategories.length > 0) {
      console.log('\n🔍 Detail první kategorie:');
      console.log('CS kategorie:', {
        id: csCategories[0].id,
        slug: csCategories[0].slug,
        name_cs: csCategories[0].name.cs,
        name_en: csCategories[0].name.en
      });
      console.log('EN kategorie:', {
        id: enCategories[0].id,
        slug: enCategories[0].slug,
        name_cs: enCategories[0].name.cs,
        name_en: enCategories[0].name.en
      });
    }
    
    console.log('\n🎯 Testování dokončeno!');
    
  } catch (error) {
    console.error('❌ Chyba při testování:', error);
  }
}

// Spuštění testů
testBilingualCategories();