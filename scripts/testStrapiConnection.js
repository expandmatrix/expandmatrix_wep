const fetch = require('node-fetch');

// Test připojení k Strapi bez tokenu
async function testStrapiConnection() {
  const STRAPI_URL = 'https://cms.expandmatrix.com';
  
  console.log('🔄 Testování připojení k Strapi CMS...');
  console.log(`🔗 URL: ${STRAPI_URL}`);
  
  try {
    // Test základního připojení
    console.log('\n1. Test základního připojení...');
    const healthResponse = await fetch(`${STRAPI_URL}/_health`);
    console.log(`📊 Health check status: ${healthResponse.status}`);
    
    // Test veřejných endpointů
    console.log('\n2. Test veřejných API endpointů...');
    
    const endpoints = [
      '/api/categories',
      '/api/kategories',
      '/api/articles',
      '/api/authors'
    ];
    
    for (const endpoint of endpoints) {
      try {
        console.log(`\n📡 Testování: ${endpoint}`);
        const response = await fetch(`${STRAPI_URL}${endpoint}`);
        console.log(`   Status: ${response.status}`);
        console.log(`   Content-Type: ${response.headers.get('content-type')}`);
        
        if (response.status === 200) {
          const data = await response.json();
          console.log(`   ✅ Úspěch - nalezeno ${data.data?.length || 0} záznamů`);
          
          // Ukázka prvního záznamu
          if (data.data && data.data.length > 0) {
            const first = data.data[0];
            console.log(`   📋 První záznam: ID=${first.id}, Atributy=${Object.keys(first.attributes || first).join(', ')}`);
          }
        } else if (response.status === 401) {
          console.log(`   🔒 Vyžaduje autentizaci`);
        } else if (response.status === 403) {
          console.log(`   🚫 Zakázáno`);
        } else if (response.status === 404) {
          console.log(`   ❌ Endpoint neexistuje`);
        } else {
          const errorText = await response.text();
          console.log(`   ⚠️  Neočekávaný status: ${errorText.substring(0, 100)}`);
        }
      } catch (error) {
        console.log(`   💥 Chyba: ${error.message}`);
      }
    }
    
    console.log('\n3. Test admin panelu...');
    const adminResponse = await fetch(`${STRAPI_URL}/admin`);
    console.log(`📊 Admin panel status: ${adminResponse.status}`);
    
  } catch (error) {
    console.error('❌ Celková chyba:', error.message);
  }
}

// Spuštění
testStrapiConnection()
  .then(() => {
    console.log('\n✅ Test dokončen');
  })
  .catch(error => {
    console.error('❌ Test selhal:', error);
  });