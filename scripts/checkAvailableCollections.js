require('dotenv').config();
const fetch = require('node-fetch');

// Kontrola dostupných kolekcí v Strapi
class CollectionChecker {
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

  async checkCollections() {
    console.log('🔍 Kontrola dostupných kolekcí v Strapi...');
    console.log('=' .repeat(50));

    const collectionsToCheck = [
      'categories',
      'kategories', 
      'category-i18ns',
      'articles',
      'authors'
    ];

    for (const collection of collectionsToCheck) {
      console.log(`\n📋 Testování kolekce: ${collection}`);
      
      const response = await this.request(`/api/${collection}`);
      
      if (response) {
        console.log(`✅ Kolekce '${collection}' existuje`);
        console.log(`   Počet záznamů: ${response.data?.length || 0}`);
        
        if (response.data && response.data.length > 0) {
          console.log('   Struktura prvního záznamu:');
          const firstItem = response.data[0];
          Object.keys(firstItem).forEach(key => {
            console.log(`   - ${key}: ${typeof firstItem[key]} ${Array.isArray(firstItem[key]) ? '(array)' : ''}`);
          });
        }
      } else {
        console.log(`❌ Kolekce '${collection}' neexistuje nebo není dostupná`);
      }
    }

    // Test content-types endpoint
    console.log('\n📋 Testování content-types endpointu');
    const contentTypesResponse = await this.request('/api/content-type-builder/content-types');
    
    if (contentTypesResponse) {
      console.log('✅ Content-types endpoint je dostupný');
      console.log('   Dostupné content types:');
      
      if (contentTypesResponse.data) {
        Object.keys(contentTypesResponse.data).forEach(key => {
          console.log(`   - ${key}`);
        });
      }
    } else {
      console.log('❌ Content-types endpoint není dostupný');
    }
  }
}

// Spuštění kontroly
const checker = new CollectionChecker();
checker.checkCollections()
  .then(() => {
    console.log('\n🎯 Kontrola dokončena!');
  })
  .catch(error => {
    console.error('❌ Chyba při kontrole:', error);
  });