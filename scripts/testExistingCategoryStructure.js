require('dotenv').config();
const fetch = require('node-fetch');

// Test existující struktury kategorií
class CategoryStructureTest {
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

  async testCategoryStructure() {
    console.log('🔍 Testování existující struktury kategorií...');
    console.log('=' .repeat(50));

    // Test 1: Načtení kategorií
    console.log('\n📋 Test 1: Načítání kategorií z categories');
    const categoriesResponse = await this.request('/api/categories');
    
    if (categoriesResponse && categoriesResponse.data) {
      console.log('✅ Kategorie úspěšně načteny');
      console.log(`   Počet kategorií: ${categoriesResponse.data.length}`);
      
      categoriesResponse.data.forEach((category, index) => {
        console.log(`   Kategorie ${index + 1}:`);
        console.log(`   - ID: ${category.id}`);
        console.log(`   - name_cat: ${category.name_cat}`);
        console.log(`   - is_active: ${category.is_active}`);
        console.log(`   - sort_order: ${category.sort_order}`);
      });
    }

    // Test 2: Načtení lokalizací
    console.log('\n📋 Test 2: Načítání lokalizací z category-i18ns');
    const i18nResponse = await this.request('/api/category-i18ns');
    
    if (i18nResponse && i18nResponse.data) {
      console.log('✅ Lokalizace úspěšně načteny');
      console.log(`   Počet lokalizací: ${i18nResponse.data.length}`);
      
      i18nResponse.data.forEach((i18n, index) => {
        console.log(`   Lokalizace ${index + 1}:`);
        console.log(`   - ID: ${i18n.id}`);
        console.log(`   - lang: ${i18n.lang}`);
        console.log(`   - name: ${i18n.name}`);
        console.log(`   - slug: ${i18n.slug}`);
        console.log(`   - description: ${typeof i18n.description}`);
      });
    }

    // Test 3: Filtrování podle jazyka
    console.log('\n📋 Test 3: Filtrování lokalizací podle jazyka');
    
    const csResponse = await this.request('/api/category-i18ns?filters[lang][$eq]=cs');
    if (csResponse && csResponse.data) {
      console.log(`✅ České lokalizace: ${csResponse.data.length}`);
      csResponse.data.forEach(item => {
        console.log(`   - ${item.name} (${item.lang})`);
      });
    }

    const enResponse = await this.request('/api/category-i18ns?filters[lang][$eq]=en');
    if (enResponse && enResponse.data) {
      console.log(`✅ Anglické lokalizace: ${enResponse.data.length}`);
      enResponse.data.forEach(item => {
        console.log(`   - ${item.name} (${item.lang})`);
      });
    }

    // Test 4: Simulace nového getBlogCategories
    console.log('\n📋 Test 4: Simulace nového getBlogCategories');
    await this.simulateGetBlogCategories('cs');
    await this.simulateGetBlogCategories('en');
  }

  async simulateGetBlogCategories(locale) {
    console.log(`\n   🔄 Simulace pro jazyk: ${locale}`);
    
    try {
      // Načtení aktivních kategorií
      const categoriesResponse = await this.request('/api/categories?filters[is_active][$eq]=true&sort=sort_order:asc');
      
      if (!categoriesResponse || !categoriesResponse.data) {
        console.log(`   ❌ Nepodařilo se načíst kategorie`);
        return;
      }

      // Načtení všech lokalizací
      const i18nResponse = await this.request('/api/category-i18ns');
      
      if (!i18nResponse || !i18nResponse.data) {
        console.log(`   ❌ Nepodařilo se načíst lokalizace`);
        return;
      }

      // Mapování kategorií s lokalizacemi
      const mappedCategories = categoriesResponse.data.map(category => {
        // Najít lokalizaci pro daný jazyk
        const localization = i18nResponse.data.find(i18n => 
          i18n.lang === locale && 
          // Zde by měla být relace, ale zatím hledáme podle názvu
          i18n.name.toLowerCase().includes(category.name_cat.toLowerCase())
        );

        // Fallback lokalizace (např. angličtina)
        const fallbackLocalization = i18nResponse.data.find(i18n => 
          i18n.lang === 'en' && 
          i18n.name.toLowerCase().includes(category.name_cat.toLowerCase())
        );

        const finalLocalization = localization || fallbackLocalization;

        return {
          id: category.id,
          name_cat: category.name_cat,
          is_active: category.is_active,
          sort_order: category.sort_order,
          name: finalLocalization ? finalLocalization.name : category.name_cat,
          slug: finalLocalization ? finalLocalization.slug : category.name_cat.toLowerCase(),
          description: finalLocalization ? finalLocalization.description : null,
          locale: locale
        };
      });

      console.log(`   ✅ Úspěšně namapováno ${mappedCategories.length} kategorií pro ${locale}:`);
      mappedCategories.forEach(cat => {
        console.log(`   - ${cat.name} (${cat.slug}) - aktivní: ${cat.is_active}`);
      });

    } catch (error) {
      console.log(`   ❌ Chyba při simulaci pro ${locale}:`, error.message);
    }
  }
}

// Spuštění testu
const tester = new CategoryStructureTest();
tester.testCategoryStructure()
  .then(() => {
    console.log('\n🎯 Testování dokončeno!');
  })
  .catch(error => {
    console.error('❌ Chyba při testování:', error);
  });