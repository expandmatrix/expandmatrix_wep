require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function testUpdate() {
  const apiUrl = process.env.STRAPI_API_URL;
  const token = process.env.STRAPI_API_TOKEN;
  
  console.log('🔍 Testování aktualizace článku...');
  
  // Nejdříve získej seznam článků
  const articlesResponse = await fetch(`${apiUrl}/api/articles`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  
  const articlesData = await articlesResponse.json();
  console.log('📋 Články:', articlesData.data.map(a => ({ id: a.id, title: a.title })));
  
  if (articlesData.data.length > 0) {
    const firstArticle = articlesData.data[0];
    console.log(`\n🎯 Testování aktualizace článku ID: ${firstArticle.id}`);
    
    // Zkus aktualizovat první článek
    const updateResponse = await fetch(`${apiUrl}/api/articles/${firstArticle.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          category: 1 // ID kategorie News
        }
      })
    });
    
    console.log('📊 Response status:', updateResponse.status);
    const updateData = await updateResponse.text();
    console.log('📄 Response data:', updateData);
    
    if (updateResponse.ok) {
      console.log('✅ Aktualizace úspěšná!');
    } else {
      console.log('❌ Aktualizace selhala');
    }
  }
}

testUpdate().catch(console.error);
