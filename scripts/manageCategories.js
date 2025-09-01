require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

class CategoryManager {
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

  async getCategories() {
    console.log('📋 Načítání kategorií...');
    const response = await this.request('/api/categories');
    return response?.data || [];
  }

  async updateCategory(categoryId, name, slug) {
    console.log(`✏️ Aktualizace kategorie ID ${categoryId}: ${name}`);
    const result = await this.request(`/api/categories/${categoryId}`, {
      method: 'PUT',
      body: JSON.stringify({
        data: {
          name: name,
          slug: slug
        }
      })
    });
    
    if (result?.data) {
      console.log(`  ✅ Aktualizováno: ${name}`);
      return result.data;
    } else {
      console.log(`  ⚠️ Problém při aktualizaci: ${name}`);
      return null;
    }
  }

  async setupRequiredCategories() {
    try {
      console.log('🚀 Nastavování požadovaných kategorií...');
      
      const categories = await this.getCategories();
      console.log('📊 Aktuální kategorie:');
      categories.forEach(cat => {
        console.log(`  - ${cat.name} (${cat.slug}) [ID: ${cat.id}]`);
      });

      // Mapování požadovaných kategorií na existující
      const requiredCategories = [
        { name: 'News', slug: 'news' },
        { name: 'Case Studies', slug: 'case-studies' },
        { name: 'Guide', slug: 'guide' }
      ];

      // Najít existující kategorie, které můžeme použít
      const newsCategory = categories.find(cat => cat.slug === 'news');
      const caseStudiesCategory = categories.find(cat => cat.slug.includes('case') || cat.slug.includes('Case'));
      const guideCategory = categories.find(cat => cat.slug === 'guide' || cat.name.toLowerCase().includes('guide'));

      console.log('\n🔄 Aktualizace kategorií...');

      // Aktualizovat News (pokud existuje)
      if (newsCategory && newsCategory.name !== 'News') {
        await this.updateCategory(newsCategory.id, 'News', 'news');
      }

      // Aktualizovat Case Studies
      if (caseStudiesCategory && caseStudiesCategory.slug !== 'case-studies') {
        await this.updateCategory(caseStudiesCategory.id, 'Case Studies', 'case-studies');
      }

      // Aktualizovat Guide
      if (guideCategory && guideCategory.name !== 'Guide') {
        await this.updateCategory(guideCategory.id, 'Guide', 'guide');
      }

      // Pokud některé kategorie chybí, použijeme první dostupné
      const allCategories = await this.getCategories();
      const usedIds = [];
      
      if (!allCategories.find(cat => cat.slug === 'news')) {
        const availableCategory = allCategories.find(cat => !usedIds.includes(cat.id));
        if (availableCategory) {
          await this.updateCategory(availableCategory.id, 'News', 'news');
          usedIds.push(availableCategory.id);
        }
      }
      
      if (!allCategories.find(cat => cat.slug === 'case-studies')) {
        const availableCategory = allCategories.find(cat => !usedIds.includes(cat.id) && cat.slug !== 'news');
        if (availableCategory) {
          await this.updateCategory(availableCategory.id, 'Case Studies', 'case-studies');
          usedIds.push(availableCategory.id);
        }
      }
      
      if (!allCategories.find(cat => cat.slug === 'guide')) {
        const availableCategory = allCategories.find(cat => !usedIds.includes(cat.id) && cat.slug !== 'news' && cat.slug !== 'case-studies');
        if (availableCategory) {
          await this.updateCategory(availableCategory.id, 'Guide', 'guide');
          usedIds.push(availableCategory.id);
        }
      }
      
      console.log('\n🎉 Nastavení kategorií dokončeno!');
      
      // Zobrazit finální stav
      const finalCategories = await this.getCategories();
      const requiredSlugs = ['news', 'case-studies', 'guide'];
      const finalRequiredCategories = finalCategories.filter(cat => requiredSlugs.includes(cat.slug));
      
      console.log('📊 Požadované kategorie:');
      finalRequiredCategories.forEach(cat => {
        console.log(`  - ${cat.name} (${cat.slug}) [ID: ${cat.id}]`);
      });

    } catch (error) {
      console.error('❌ Chyba při nastavování kategorií:', error.message);
    }
  }
}

const manager = new CategoryManager();
manager.setupRequiredCategories();
