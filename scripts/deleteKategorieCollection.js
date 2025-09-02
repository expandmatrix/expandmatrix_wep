require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

// Konfigurace Strapi API
const STRAPI_URL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN je vyžadován');
  process.exit(1);
}

const KATEGORIE_UID = 'api::kategorie.kategorie';

async function deleteKategorieCollection() {
  console.log('🗑️  Spouštím smazání duplicitní kolekce Kategorie...');
  console.log(`🎯 UID kolekce: ${KATEGORIE_UID}`);
  console.log('');
  
  try {
    // Nejprve ověříme, že kolekce existuje
    console.log('🔍 Ověřuji existenci kolekce...');
    const checkResponse = await fetch(`${STRAPI_URL}/api/content-type-builder/content-types/${KATEGORIE_UID}`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!checkResponse.ok) {
      if (checkResponse.status === 404) {
        console.log('✅ Kolekce již neexistuje nebo nebyla nalezena');
        return;
      }
      throw new Error(`Chyba při ověřování kolekce: ${checkResponse.status} ${checkResponse.statusText}`);
    }
    
    const collectionData = await checkResponse.json();
    console.log('📦 Kolekce nalezena:');
    console.log(`   Název: ${collectionData.data?.schema?.displayName || 'N/A'}`);
    console.log(`   UID: ${collectionData.data?.uid || 'N/A'}`);
    console.log(`   Typ: ${collectionData.data?.schema?.kind || 'N/A'}`);
    console.log('');
    
    // Smazání všech záznamů z kolekce
    console.log('🧹 Mažu všechny záznamy z kolekce...');
    const recordsResponse = await fetch(`${STRAPI_URL}/api/kategories`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (recordsResponse.ok) {
      const recordsData = await recordsResponse.json();
      const records = recordsData.data || [];
      
      console.log(`📊 Nalezeno ${records.length} záznamů k smazání`);
      
      for (const record of records) {
        try {
          const deleteRecordResponse = await fetch(`${STRAPI_URL}/api/kategories/${record.documentId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${STRAPI_TOKEN}`,
              'Content-Type': 'application/json'
            }
          });
          
          if (deleteRecordResponse.ok) {
            console.log(`  ✅ Smazán záznam: ${record.name} (ID: ${record.id})`);
          } else {
            console.log(`  ❌ Chyba při mazání záznamu ${record.id}: ${deleteRecordResponse.status}`);
          }
        } catch (error) {
          console.log(`  ❌ Chyba při mazání záznamu ${record.id}: ${error.message}`);
        }
      }
    } else {
      console.log('⚠️  Nelze načíst záznamy kolekce (možná již neexistují)');
    }
    
    console.log('');
    
    // Smazání samotné kolekce
    console.log('🗑️  Mažu definici kolekce...');
    const deleteResponse = await fetch(`${STRAPI_URL}/api/content-type-builder/content-types/${KATEGORIE_UID}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (deleteResponse.ok) {
      console.log('✅ Kolekce úspěšně smazána');
      
      // Ověření smazání
      console.log('🔍 Ověřuji smazání...');
      const verifyResponse = await fetch(`${STRAPI_URL}/api/kategories`, {
        headers: {
          'Authorization': `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (verifyResponse.status === 404) {
        console.log('✅ Endpoint /api/kategories již neexistuje - smazání potvrzeno');
      } else {
        console.log('⚠️  Endpoint /api/kategories stále existuje - možná je potřeba restart Strapi');
      }
      
    } else {
      const errorData = await deleteResponse.text();
      throw new Error(`Chyba při mazání kolekce: ${deleteResponse.status} ${deleteResponse.statusText}\n${errorData}`);
    }
    
  } catch (error) {
    console.error('❌ Chyba při mazání kolekce:', error.message);
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Script pro smazání duplicitní kolekce Kategorie');
  console.log(`🌐 Strapi URL: ${STRAPI_URL}`);
  console.log('');
  
  console.log('⚠️  VAROVÁNÍ: Tento script smaže kolekci "Kategorie" a všechna její data!');
  console.log('📋 Ujistěte se, že máte zálohu dat (backup byl vytvořen dříve)');
  console.log('');
  
  await deleteKategorieCollection();
  
  console.log('');
  console.log('✅ Smazání dokončeno');
  console.log('');
  console.log('📋 DALŠÍ KROKY:');
  console.log('  1. Restartujte Strapi server (pokud je potřeba)');
  console.log('  2. Ověřte v admin panelu, že kolekce neexistuje');
  console.log('  3. Pokračujte vytvořením nové kolekce category_i18n');
}

main().catch(console.error);