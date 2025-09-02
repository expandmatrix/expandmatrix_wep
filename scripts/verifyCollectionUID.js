require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

// Konfigurace Strapi API
const STRAPI_URL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN je vyžadován');
  process.exit(1);
}

async function verifyCollectionUID() {
  console.log('🔍 Ověřuji UID kolekcí...');
  
  try {
    // Získání informací o content-types
    const response = await fetch(`${STRAPI_URL}/api/content-type-builder/content-types`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      console.log('⚠️  Content-type-builder endpoint není dostupný, zkouším alternativní metodu...');
      
      // Alternativní metoda - testování endpointů
      await testEndpoints();
      return;
    }
    
    const data = await response.json();
    console.log('📋 Nalezené content-types:');
    
    // Filtrování relevantních kolekcí
    const relevantTypes = data.data?.filter(type => 
      type.uid?.includes('categor') || type.uid?.includes('kategor')
    ) || [];
    
    if (relevantTypes.length > 0) {
      relevantTypes.forEach(type => {
        console.log(`  📦 ${type.uid}`);
        console.log(`     Název: ${type.schema?.displayName || 'N/A'}`);
        console.log(`     Kolekce: ${type.schema?.kind || 'N/A'}`);
        console.log(`     Atributy: ${Object.keys(type.schema?.attributes || {}).join(', ')}`);
        console.log('');
      });
    } else {
      console.log('⚠️  Žádné relevantní content-types nenalezeny');
    }
    
  } catch (error) {
    console.error('❌ Chyba při získávání content-types:', error.message);
    console.log('🔄 Zkouším alternativní metodu...');
    await testEndpoints();
  }
}

async function testEndpoints() {
  console.log('\n🧪 Testování API endpointů...');
  
  const endpoints = [
    '/api/categories',
    '/api/kategories',
    '/api/category',
    '/api/kategorie'
  ];
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${STRAPI_URL}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`  ${endpoint}: ${response.status} ${response.statusText}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`    📊 Počet záznamů: ${data.data?.length || 0}`);
        
        if (data.data && data.data.length > 0) {
          const firstItem = data.data[0];
          console.log(`    🔑 Struktura: ${Object.keys(firstItem).join(', ')}`);
        }
      }
      
    } catch (error) {
      console.log(`  ${endpoint}: ❌ Chyba - ${error.message}`);
    }
  }
}

async function main() {
  console.log('🚀 Spouštím ověření UID kolekcí...');
  console.log(`🌐 Strapi URL: ${STRAPI_URL}`);
  console.log('');
  
  await verifyCollectionUID();
  
  console.log('\n✅ Ověření dokončeno');
  console.log('');
  console.log('📋 SHRNUTÍ:');
  console.log('  🇬🇧 Anglické kategorie: /api/categories');
  console.log('  🇨🇿 České kategorie: /api/kategories');
  console.log('  🎯 Předpokládané UID: api::kategorie.kategorie');
  console.log('');
  console.log('⚠️  DOPORUČENÍ:');
  console.log('  1. Ověřte v Strapi admin panelu Content-Type Builder');
  console.log('  2. Zkontrolujte UID v Settings > Content-Types');
  console.log('  3. Připravte se na smazání duplicitní kolekce');
}

main().catch(console.error);