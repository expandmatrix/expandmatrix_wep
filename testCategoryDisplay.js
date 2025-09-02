require('dotenv').config();
const fetch = require('node-fetch');

// Test zobrazování kategorií s is_active kontrolou
class CategoryDisplayTest {
  constructor() {
    this.apiUrl = process.env.STRAPI_API_URL;
    this.token = process.env.STRAPI_API_TOKEN;
  }

  async request(endpoint, options = {}) {
    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    const data = await response.text();
    
    if (!response.ok) {
      console.log(`❌ API Error ${response.status}: ${data}`);
      return null;
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      console.log('❌ JSON Parse Error:', e.message);
      return null;
    }
  }

  // Simulace transformCategory funkce
  transformCategory(strapiCategory, locale) {
    const { id, attributes } = strapiCategory;
    
    // Find localization for the current locale from the populated data
    const localization = attributes.category_i_18_ns?.find((i18n) => i18n.locale === locale);
    
    // Fallback to English if current locale not found
    const fallbackLocalization = attributes.category_i_18_ns?.find((i18n) => i18n.locale === 'en');
    
    const finalLocalization = localization || fallbackLocalization;
    
    return {
      id,
      name: finalLocalization?.name || attributes.name_cat,
      slug: finalLocalization?.slug || attributes.name_cat.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      description: finalLocalization?.description || '',
      color: attributes.color || '#000000',
      isActive: finalLocalization?.is_active || false,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
    };
  }

  // Simulace getCategoryI18n funkce - používá category-i18ns endpoint
  async getCategoryI18n(locale = 'cs') {
    try {
      const params = new URLSearchParams({});
      
      const response = await this.request(`/api/category-i18ns?${params.toString()}`);
      
      if (!response || !response.data) {
        console.log('❌ Žádná data z API');
        return [];
      }

      console.log(`📋 Načteno ${response.data.length} lokalizací kategorií ze Strapi pro ${locale}`);
      
      // Log raw data for debugging
      response.data.forEach((categoryI18n, index) => {
        console.log(`\n🔍 Lokalizace ${index + 1} (ID: ${categoryI18n.id}):`);
        console.log(`   - name: ${categoryI18n.name}`);
        console.log(`   - slug: ${categoryI18n.slug}`);
        console.log(`   - locale: ${categoryI18n.locale || categoryI18n.lang}`);
        console.log(`   - is_active: ${categoryI18n.is_active}`);
        console.log(`   - description: ${categoryI18n.description}`);
      });

      return response.data.map(item => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        description: item.description || '',
        locale: item.locale || item.lang,
        isActive: item.is_active !== false, // Default to true if not specified
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));
    } catch (error) {
      console.error('Error loading category i18n:', error);
      return [];
    }
  }

  // Simulace getBlogCategories funkce
  async getBlogCategories(locale = 'en') {
    const fallbackCategories = [];

    try {
      console.log(`\n🔄 Načítám kategorie ze Strapi CMS pro jazyk: ${locale}...`);
      
      // Načteme kategorie pro oba jazyky
      const [csCategories, enCategories] = await Promise.all([
        this.getCategoryI18n('cs'),
        this.getCategoryI18n('en')
      ]);
      
      console.log(`\n📊 Výsledky načítání:`);
      console.log(`   - České kategorie: ${csCategories.length}`);
      console.log(`   - Anglické kategorie: ${enCategories.length}`);
      
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
          console.log(`\n🔄 Zpracovávám kategorii: ${csCategory.slug}`);
          
          // Najdeme odpovídající anglickou kategorii podle ID
          const enCategory = enCategories?.find(en => en.id === csCategory.id);
          
          const result = {
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
            isActive: csCategory.isActive && (enCategory?.isActive !== false),
            icon: undefined
          };
          
          console.log(`   - Výsledek: isActive=${result.isActive} (cs: ${csCategory.isActive}, en: ${enCategory?.isActive})`);
          
          return result;
        });

      console.log(`\n✅ Úspěšně načteno ${mappedCategories.length} kategorií`);
      return mappedCategories;
      
    } catch (error) {
      console.error('Chyba při načítání kategorií ze Strapi:', error);
      return fallbackCategories;
    }
  }

  async testCategoryDisplay() {
    console.log('🎯 Test zobrazování kategorií s is_active kontrolou');
    console.log('=' .repeat(60));

    // Test 1: Načtení kategorií pro češtinu
    console.log('\n📋 Test 1: Načítání kategorií pro češtinu');
    const csCategories = await this.getBlogCategories('cs');
    
    console.log('\n🎯 České kategorie pro zobrazení:');
    csCategories.forEach((category, index) => {
      console.log(`   ${index + 1}. ${category.name.cs} (${category.slug})`);
      console.log(`      - Aktivní: ${category.isActive}`);
      console.log(`      - Popis: ${category.description.cs}`);
    });

    // Test 2: Načtení kategorií pro angličtinu
    console.log('\n📋 Test 2: Načítání kategorií pro angličtinu');
    const enCategories = await this.getBlogCategories('en');
    
    console.log('\n🎯 Anglické kategorie pro zobrazení:');
    enCategories.forEach((category, index) => {
      console.log(`   ${index + 1}. ${category.name.en} (${category.slug})`);
      console.log(`      - Aktivní: ${category.isActive}`);
      console.log(`      - Popis: ${category.description.en}`);
    });

    // Test 3: Simulace BlogFilters komponenty
    console.log('\n🎨 Test 3: Simulace BlogFilters komponenty');
    const activeCategories = csCategories.filter(cat => cat.isActive);
    
    console.log(`\n📊 Kategorie které by se zobrazily v BlogFilters:`);
    console.log(`   Celkem aktivních kategorií: ${activeCategories.length}`);
    
    activeCategories.forEach((category, index) => {
      console.log(`   ${index + 1}. ${category.name.cs} - slug: ${category.slug}`);
    });
    
    if (activeCategories.length === 0) {
      console.log('   ❌ PROBLÉM: Žádné aktivní kategorie pro zobrazení!');
    } else {
      console.log('   ✅ Kategorie jsou připraveny pro zobrazení');
    }
  }
}

// Spuštění testu
if (!process.env.STRAPI_API_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN není nastaven v .env souboru');
  process.exit(1);
}

const test = new CategoryDisplayTest();
test.testCategoryDisplay()
  .then(() => {
    console.log('\n🎉 Test dokončen');
  })
  .catch(error => {
    console.error('❌ Chyba při testování:', error);
  });