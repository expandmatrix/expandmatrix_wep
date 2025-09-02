require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function testAPI() {
  const apiUrl = process.env.STRAPI_API_URL;
  const token = process.env.STRAPI_API_TOKEN;
  
  console.log('🔗 API URL:', apiUrl);
  console.log('🔑 Token exists:', !!token);
  console.log('🔑 Token length:', token ? token.length : 0);
  
  try {
    console.log('\n📡 Testing API connection...');
    
    const response = await fetch(`${apiUrl}/api/articles`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers));
    
    const data = await response.text();
    console.log('📊 Response body:', data);
    
    if (response.ok) {
      try {
        const jsonData = JSON.parse(data);
        console.log('✅ JSON parsed successfully');
        console.log('📋 Articles count:', jsonData.data ? jsonData.data.length : 'N/A');
      } catch (e) {
        console.log('❌ Failed to parse JSON:', e.message);
      }
    } else {
      console.log('❌ API request failed');
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

testAPI();