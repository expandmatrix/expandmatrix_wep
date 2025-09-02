const fetch = require('node-fetch');
require('dotenv').config({ path: '.env.local' });

async function testCategories() {
  try {
    const url = `${process.env.STRAPI_API_URL}/api/categories`;
    const headers = {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json'
    };
    
    console.log('🔗 URL:', url);
    console.log('🔑 Token exists:', !!process.env.STRAPI_API_TOKEN);
    
    const response = await fetch(url, { headers });
    
    console.log('📊 Status:', response.status);
    console.log('📋 Headers:', Object.fromEntries(response.headers));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error response:', errorText);
      return;
    }
    
    const data = await response.json();
    console.log('✅ Categories data:', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error('💥 Error:', error.message);
  }
}

testCategories();