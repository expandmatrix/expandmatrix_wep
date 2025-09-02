require('dotenv').config();
const fetch = require('node-fetch');

// Test nové struktury kategorií s Category a Category_i18n
class CategoryTester {
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
    console.log('🧪 Testování nové struktury kategorií...');
    console.log('=' .repeat(50));

    // Test 1: Načtení kategorií (Category tabulka)
    console.log('\n📋 Test 1: Načítání kategorií z Category tabulky');
    const categoriesResponse = await this.request('/api/categories?populate=localizations&sort=sort_order:asc&filters[is_active][$eq]=true');
    
    if (categoriesResponse) {
      console.log('✅ Úspěšně načteno kategorií:', categoriesResponse.data?.length || 0);
      
      if (categoriesResponse.data && categoriesResponse.data.length > 0) {
        console.log('\n📊 Struktura první kategorie:');
        const firstCategory = categoriesResponse.data[0];
        console.log('- ID:', firstCategory.id);
        console.log('- name_cat:', firstCategory.name_cat);
        console.log('- slug:', firstCategory.slug);
        console.log('- is_active:', firstCategory.is_active);
        console.log('- sort_order:', firstCategory.sort_order);
        console.log('- color:', firstCategory.color);
        console.log('- localizations:', firstCategory.localizations?.data?.length || 0, 'položek');
      }
    } else {
      console.log('❌ Nepodařilo se načíst kategorie');
    }

    // Test 2: Načtení lokalizací pro češtinu
    console.log('\n📋 Test 2: Načítání lokalizací pro češtinu');
    const csI18nResponse = await this.request('/api/category-i18ns?populate=category&filters[locale][$eq]=cs&filters[category][is_active][$eq]=true&sort=category.sort_order:asc');
    
    if (csI18nResponse) {
      console.log('✅ Úspěšně načteno CS lokalizací:', csI18nResponse.data?.length || 0);
      
      if (csI18nResponse.data && csI18nResponse.data.length > 0) {
        console.log('\n📊 Struktura první CS lokalizace:');
        const firstI18n = csI18nResponse.data[0];
        console.log('- ID:', firstI18n.id);
        console.log('- name:', firstI18n.name);
        console.log('- slug:', firstI18n.slug);
        console.log('- description:', firstI18n.description);
        console.log('- locale:', firstI18n.locale);
        console.log('- seo_title:', firstI18n.seo_title);
        console.log('- seo_description:', firstI18n.seo_description);
        console.log('- meta_keywords:', firstI18n.meta_keywords);
      }
    } else {
      console.log('❌ Nepodařilo se načíst CS lokalizace');
    }

    // Test 3: Načtení lokalizací pro angličtinu
    console.log('\n📋 Test 3: Načítání lokalizací pro angličtinu');
    const enI18nResponse = await this.request('/api/category-i18ns?populate=category&filters[locale][$eq]=en&filters[category][is_active][$eq]=true&sort=category.sort_order:asc');
    
    if (enI18nResponse) {
      console.log('✅ Úspěšně načteno EN lokalizací:', enI18nResponse.data?.length || 0);
      
      if (enI18nResponse.data && enI18nResponse.data.length > 0) {
        console.log('\n📊 Struktura první EN lokalizace:');
        const firstI18n = enI18nResponse.data[0];
        console.log('- ID:', firstI18n.id);
        console.log('- name:', firstI18n.name);
        console.log('- slug:', firstI18n.slug);
        console.log('- description:', firstI18n.description);
        console.log('- locale:', firstI18n.locale);
        console.log('- seo_title:', firstI18n.seo_title);
        console.log('- seo_description:', firstI18n.seo_description);
        console.log('- meta_keywords:', firstI18n.meta_keywords);
      }
    } else {
      console.log('❌ Nepodařilo se načíst EN lokalizace');
    }

    // Test 4: Simulace getBlogCategories funkce
    console.log('\n📋 Test 4: Simulace getBlogCategories pro češtinu');
    await this.simulateGetBlogCategories('cs');

    console.log('\n📋 Test 5: Simulace getBlogCategories pro angličtinu');
    await this.simulateGetBlogCategories('en');
  }

  async simulateGetBlogCategories(locale) {
    try {
      // Načteme kategorie a jejich lokalizace
      const [categoriesResponse, i18nResponse] = await Promise.all([
        this.request('/api/categories?populate=localizations&sort=sort_order:asc&filters[is_active][$eq]=true'),
        this.request(`/api/category-i18ns?populate=category&filters[locale][$eq]=${locale}&filters[category][is_active][$eq]=true&sort=category.sort_order:asc`)
      ]);

      if (!categoriesResponse?.data || !i18nResponse?.data) {
        console.log('❌ Nepodařilo se načíst data pro', locale);
        return;
      }

      const categories = categoriesResponse.data;
      const categoryI18n = i18nResponse.data;

      console.log(`✅ Načteno ${categories.length} kategorií a ${categoryI18n.length} lokalizací pro ${locale}`);

      // Mapování kategorií
      const mappedCategories = categories
        .filter(category => category.is_active)
        .map(category => {
          // Najdeme lokalizaci pro aktuální jazyk
          const localization = categoryI18n.find(i18n => 
            i18n.slug === category.slug && i18n.locale === locale
          );
          
          // Fallback lokalizace pro druhý jazyk
          const fallbackLocale = locale === 'cs' ? 'en' : 'cs';
          const fallbackI18nResponse = categoryI18n; // Pro jednoduchost použijeme stejná data
          const fallbackLocalization = fallbackI18nResponse.find(i18n => 
            i18n.slug === category.slug && i18n.locale === fallbackLocale
          );
          
          return {
            id: category.id.toString(),
            slug: category.slug,
            name: {
              [locale]: localization?.name || category.name_cat,
              [fallbackLocale]: fallbackLocalization?.name || category.name_cat
            },
            description: {
              [locale]: localization?.description || 'Popis kategorie',
              [fallbackLocale]: fallbackLocalization?.description || 'Category description'
            },
            icon: 'file-text',
            order: category.sort_order,
            isActive: category.is_active
          };
        })
        .sort((a, b) => a.order - b.order);

      console.log(`\n📊 Výsledné kategorie pro ${locale}:`);
      mappedCategories.forEach(cat => {
        console.log(`- ${cat.name[locale]} (${cat.slug}) - order: ${cat.order}, active: ${cat.isActive}`);
        console.log(`  Popis: ${cat.description[locale]}`);
      });

    } catch (error) {
      console.error(`❌ Chyba při simulaci getBlogCategories pro ${locale}:`, error.message);
    }
  }
}

// Spuštění testů
const tester = new CategoryTester();
tester.testCategoryStructure()
  .then(() => {
    console.log('\n🎯 Testování dokončeno!');
  })
  .catch(error => {
    console.error('❌ Chyba při testování:', error);
  });