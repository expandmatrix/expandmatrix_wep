require('dotenv').config();
const fetch = require('node-fetch');

// Test nové implementace načítání kategorií
class BlogCategoryTest {
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

  // Simulace transformCategory funkce ze strapiApi
  transformCategory(category, locale) {
    // Najdeme lokalizaci pro aktuální jazyk
    const localization = category.category_i_18_ns?.find(i18n => i18n.lang === locale);
    
    // Fallback na angličtinu
    const fallbackLocalization = category.category_i_18_ns?.find(i18n => i18n.lang === 'en');
    
    const finalLocalization = localization || fallbackLocalization;

    return {
      id: category.id,
      name: finalLocalization?.name || category.name_cat,
      slug: finalLocalization?.slug || category.name_cat.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      description: finalLocalization?.description || '',
      color: category.color || '#000000',
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }

  // Simulace getCategories funkce ze strapiApi
  async getCategories(locale = 'cs') {
    try {
      const response = await this.request(
        `/api/categories?filters[is_active][$eq]=true&sort=sort_order:asc&populate=category_i_18_ns`
      );

      if (!response?.data) {
        return [];
      }

      return response.data.map(category => this.transformCategory(category, locale));
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Simulace getBlogCategories funkce z blogApi
  async getBlogCategories(locale = 'en') {
    try {
      console.log(`Načítám kategorie ze Strapi CMS pro jazyk: ${locale}...`);
      
      const categories = await this.getCategories(locale);
      
      console.log('Strapi kategorie:', categories);
      
      if (!categories || !Array.isArray(categories)) {
        console.warn('Neplatná data kategorií ze Strapi');
        return [];
      }

      if (categories.length === 0) {
        console.warn('Žádné kategorie ze Strapi');
        return [];
      }

      const mappedCategories = categories
        .filter(category => {
          if (!category || !category.slug) {
            console.warn('Neplatná kategorie:', category);
            return false;
          }
          return true;
        })
        .map((category) => {
          console.log(`Zpracovávám kategorii: ${category.slug}`);
          
          return {
            id: category.id.toString(),
            slug: category.slug,
            name: { 
              cs: category.name,
              en: category.name
            },
            description: { 
              cs: category.description || '',
              en: category.description || ''
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
      return [];
    }
  }

  async testBlogCategories() {
    console.log('🔍 Testování nové implementace getBlogCategories...');
    console.log('=' .repeat(60));

    // Test 1: Načtení kategorií pro češtinu
    console.log('\n📋 Test 1: Načítání kategorií pro češtinu');
    try {
      const csCategories = await this.getBlogCategories('cs');
      console.log('✅ České kategorie úspěšně načteny');
      console.log(`   Počet kategorií: ${csCategories.length}`);
      
      csCategories.forEach((category, index) => {
        console.log(`   Kategorie ${index + 1}:`);
        console.log(`   - ID: ${category.id}`);
        console.log(`   - Slug: ${category.slug}`);
        console.log(`   - Název (CS): ${category.name.cs}`);
        console.log(`   - Název (EN): ${category.name.en}`);
        console.log(`   - Popis (CS): ${category.description.cs}`);
        console.log(`   - Popis (EN): ${category.description.en}`);
        console.log(`   - Aktivní: ${category.isActive}`);
        console.log(`   - Pořadí: ${category.order}`);
        console.log('');
      });
    } catch (error) {
      console.log('❌ Chyba při načítání českých kategorií:', error.message);
    }

    // Test 2: Načtení kategorií pro angličtinu
    console.log('\n📋 Test 2: Načítání kategorií pro angličtinu');
    try {
      const enCategories = await this.getBlogCategories('en');
      console.log('✅ Anglické kategorie úspěšně načteny');
      console.log(`   Počet kategorií: ${enCategories.length}`);
      
      enCategories.forEach((category, index) => {
        console.log(`   Kategorie ${index + 1}:`);
        console.log(`   - ID: ${category.id}`);
        console.log(`   - Slug: ${category.slug}`);
        console.log(`   - Název (CS): ${category.name.cs}`);
        console.log(`   - Název (EN): ${category.name.en}`);
        console.log(`   - Popis (CS): ${category.description.cs}`);
        console.log(`   - Popis (EN): ${category.description.en}`);
        console.log(`   - Aktivní: ${category.isActive}`);
        console.log(`   - Pořadí: ${category.order}`);
        console.log('');
      });
    } catch (error) {
      console.log('❌ Chyba při načítání anglických kategorií:', error.message);
    }

    // Test 3: Přímé testování getCategories
    console.log('\n📋 Test 3: Přímé testování getCategories');
    try {
      const strapiCategories = await this.getCategories('cs');
      console.log('✅ Strapi kategorie úspěšně načteny');
      console.log(`   Počet kategorií: ${strapiCategories.length}`);
      
      strapiCategories.forEach((category, index) => {
        console.log(`   Kategorie ${index + 1}:`);
        console.log(`   - ID: ${category.id}`);
        console.log(`   - Název: ${category.name}`);
        console.log(`   - Slug: ${category.slug}`);
        console.log(`   - Popis: ${category.description}`);
        console.log(`   - Barva: ${category.color}`);
        console.log('');
      });
    } catch (error) {
      console.log('❌ Chyba při přímém testování getCategories:', error.message);
    }

    // Test 4: Porovnání výsledků
    console.log('\n📋 Test 4: Porovnání výsledků mezi locale');
    try {
      const [csResults, enResults] = await Promise.all([
        this.getBlogCategories('cs'),
        this.getBlogCategories('en')
      ]);
      
      console.log(`✅ Porovnání dokončeno`);
      console.log(`   České kategorie: ${csResults.length}`);
      console.log(`   Anglické kategorie: ${enResults.length}`);
      
      if (csResults.length === enResults.length) {
        console.log('✅ Počet kategorií se shoduje pro oba jazyky');
        
        const csSlugs = csResults.map(c => c.slug).sort();
        const enSlugs = enResults.map(c => c.slug).sort();
        
        const slugsMatch = JSON.stringify(csSlugs) === JSON.stringify(enSlugs);
        console.log(`   Shoda slugů: ${slugsMatch ? '✅' : '❌'}`);
        
        if (slugsMatch) {
          console.log('   Kategorie jsou konzistentní napříč jazyky');
        } else {
          console.log('   ⚠️  Kategorie nejsou konzistentní:');
          console.log(`   CS slugs: ${csSlugs.join(', ')}`);
          console.log(`   EN slugs: ${enSlugs.join(', ')}`);
        }
      } else {
        console.log('❌ Počet kategorií se neshoduje mezi jazyky');
      }
    } catch (error) {
      console.log('❌ Chyba při porovnání:', error.message);
    }
  }
}

// Spuštění testu
const tester = new BlogCategoryTest();
tester.testBlogCategories()
  .then(() => {
    console.log('\n🎯 Testování dokončeno!');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Kritická chyba při testování:', error);
    process.exit(1);
  });