require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

class CategoryAssigner {
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
      console.log(`API Error ${response.status}: ${data}`);
      return null;
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }

  async getArticles() {
    console.log('📋 Načítání článků...');
    const response = await this.request('/api/articles?populate=category');
    return response?.data || [];
  }

  async getCategories() {
    console.log('📋 Načítání kategorií...');
    const response = await this.request('/api/categories');
    return response?.data || [];
  }

  async assignCategoriesManually() {
    try {
      console.log('🚀 Manuální přiřazování kategorií článkům...');
      
      const articles = await this.getArticles();
      const categories = await this.getCategories();
      
      console.log(`📊 Nalezeno ${articles.length} článků a ${categories.length} kategorií`);
      
      // Najdi správné kategorie
      const newsCategory = categories.find(cat => cat.slug === 'news');
      const caseStudiesCategory = categories.find(cat => cat.slug === 'case-studies');
      const guideCategory = categories.find(cat => cat.slug === 'guide');
      
      console.log('📋 Dostupné kategorie:');
      console.log(`  - News: ${newsCategory ? newsCategory.id : 'Nenalezeno'}`);
      console.log(`  - Case Studies: ${caseStudiesCategory ? caseStudiesCategory.id : 'Nenalezeno'}`);
      console.log(`  - Guide: ${guideCategory ? guideCategory.id : 'Nenalezeno'}`);
      
      // Manuální mapování článků na kategorie
      const articleCategoryMapping = {
        'Test': guideCategory?.id,
        'AI v healthcare: Budoucnost medicíny 1': newsCategory?.id,
        'AI v healthcare: Budoucnost medicíny 2': newsCategory?.id,
        'AI v healthcare: Budoucnost medicíny 3': newsCategory?.id,
        'Bezpečnost AI systémů: Výzvy a řešení 4': caseStudiesCategory?.id,
        'Jak AI mění způsob práce v moderních firmách 5': guideCategory?.id,
        'AI v healthcare: Budoucnost medicíny 6': newsCategory?.id,
        'Jak AI mění způsob práce v moderních firmách 7': guideCategory?.id,
        'Automatizace zákaznického servisu pomocí chatbotů 8': caseStudiesCategory?.id,
        'AI v marketingu: Personalizace na nové úrovni 9': newsCategory?.id,
        'Computer Vision: Revoluce v analýze obrazu 10': caseStudiesCategory?.id,
        'Deep Learning pro zpracování přirozeného jazyka 11': newsCategory?.id,
        'Etické aspekty umělé inteligence v roce 2024 12': guideCategory?.id,
        'Generativní AI: Kreativita v rukou strojů 13': guideCategory?.id,
        'AI v healthcare: Budoucnost medicíny 14': newsCategory?.id,
        'Computer Vision: Revoluce v analýze obrazu 15': caseStudiesCategory?.id
      };
      
      console.log('\n🔄 Přiřazování kategorií...');
      
      for (const article of articles) {
        const targetCategoryId = articleCategoryMapping[article.title];
        const currentCategory = article.category;
        
        console.log(`\n📄 Článek: "${article.title}" (ID: ${article.id})`);
        console.log(`  Aktuální kategorie: ${currentCategory ? currentCategory.name : 'Žádná'}`);
        
        if (targetCategoryId) {
          const targetCategory = categories.find(cat => cat.id === targetCategoryId);
          console.log(`  Cílová kategorie: ${targetCategory ? targetCategory.name : 'Neznámá'}`);
          
          // Zkus aktualizovat pomocí curl příkazu
          const curlCommand = `curl -s -X PUT "${this.apiUrl}/api/articles/${article.id}" -H "Authorization: Bearer ${this.token}" -H "Content-Type: application/json" -d '{"data": {"category": ${targetCategoryId}}}'`;
          
          console.log(`  🔧 Spouštím: curl pro článek ${article.id}`);
          
          try {
            const { exec } = require('child_process');
            const result = await new Promise((resolve, reject) => {
              exec(curlCommand, (error, stdout, stderr) => {
                if (error) {
                  reject(error);
                } else {
                  resolve({ stdout, stderr });
                }
              });
            });
            
            console.log(`  ✅ Curl výsledek: ${result.stdout || 'Úspěch'}`);
            if (result.stderr) {
              console.log(`  ⚠️ Stderr: ${result.stderr}`);
            }
          } catch (error) {
            console.log(`  ❌ Chyba při curl: ${error.message}`);
          }
        } else {
          console.log(`  ⚠️ Nenalezeno mapování pro tento článek`);
        }
      }
      
      console.log('\n🎉 Přiřazování kategorií dokončeno!');
      
      // Zobrazit finální statistiky
      const updatedArticles = await this.getArticles();
      const stats = {};
      
      updatedArticles.forEach(article => {
        const categorySlug = article.category ? article.category.slug : 'bez-kategorie';
        stats[categorySlug] = (stats[categorySlug] || 0) + 1;
      });
      
      console.log('📊 Finální statistiky článků podle kategorií:');
      Object.keys(stats).forEach(slug => {
        console.log(`  - ${slug}: ${stats[slug]} článků`);
      });

    } catch (error) {
      console.error('❌ Chyba při přiřazování kategorií:', error.message);
    }
  }
}

const assigner = new CategoryAssigner();
assigner.assignCategoriesManually();
