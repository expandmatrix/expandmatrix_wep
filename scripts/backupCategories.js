require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Konfigurace Strapi API
const STRAPI_URL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('❌ STRAPI_API_TOKEN je vyžadován');
  process.exit(1);
}

// Funkce pro API volání
async function fetchFromStrapi(endpoint) {
  try {
    const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`❌ Chyba při volání ${endpoint}:`, error.message);
    return null;
  }
}

// Backup kategorií
async function backupCategories() {
  console.log('🔄 Spouštím backup kategorií...');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = path.join(__dirname, '..', 'backups', `categories-backup-${timestamp}`);
  
  // Vytvoření backup složky
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Backup anglických kategorií (categories)
  console.log('📦 Zálohování anglických kategorií...');
  const englishCategories = await fetchFromStrapi('/categories?pagination[limit]=100');
  if (englishCategories) {
    fs.writeFileSync(
      path.join(backupDir, 'categories-en.json'),
      JSON.stringify(englishCategories, null, 2)
    );
    console.log(`✅ Anglické kategorie uloženy: ${englishCategories.data?.length || 0} záznamů`);
  }
  
  // Backup českých kategorií (kategories)
  console.log('📦 Zálohování českých kategorií...');
  const czechCategories = await fetchFromStrapi('/kategories?pagination[limit]=100');
  if (czechCategories) {
    fs.writeFileSync(
      path.join(backupDir, 'kategories-cs.json'),
      JSON.stringify(czechCategories, null, 2)
    );
    console.log(`✅ České kategorie uloženy: ${czechCategories.data?.length || 0} záznamů`);
  }
  
  // Audit - zjištění UID
  console.log('\n🔍 AUDIT INFORMACE:');
  console.log('📋 Anglické kategorie endpoint: /api/categories');
  console.log('📋 České kategorie endpoint: /api/kategories');
  
  if (czechCategories && czechCategories.data && czechCategories.data.length > 0) {
    console.log('⚠️  POZOR: Nalezena duplicitní česká kolekce "kategories"');
    console.log('🗂️  Předpokládané UID: api::kategorie.kategorie');
    console.log(`📊 Počet českých záznamů: ${czechCategories.data.length}`);
  } else {
    console.log('ℹ️  Česká kolekce "kategories" nebyla nalezena nebo je prázdná');
  }
  
  if (englishCategories && englishCategories.data && englishCategories.data.length > 0) {
    console.log(`📊 Počet anglických záznamů: ${englishCategories.data.length}`);
  }
  
  console.log(`\n✅ Backup dokončen v: ${backupDir}`);
  
  // Vytvoření summary souboru
  const summary = {
    timestamp: new Date().toISOString(),
    englishCategories: englishCategories?.data?.length || 0,
    czechCategories: czechCategories?.data?.length || 0,
    backupLocation: backupDir,
    endpoints: {
      english: '/api/categories',
      czech: '/api/kategories'
    },
    suspectedUID: 'api::kategorie.kategorie'
  };
  
  fs.writeFileSync(
    path.join(backupDir, 'backup-summary.json'),
    JSON.stringify(summary, null, 2)
  );
  
  return summary;
}

// Spuštění
backupCategories()
  .then(summary => {
    console.log('\n📋 SHRNUTÍ BACKUP:');
    console.log(`📅 Čas: ${summary.timestamp}`);
    console.log(`🇬🇧 Anglické kategorie: ${summary.englishCategories}`);
    console.log(`🇨🇿 České kategorie: ${summary.czechCategories}`);
    console.log(`📁 Umístění: ${summary.backupLocation}`);
  })
  .catch(error => {
    console.error('❌ Chyba při backup:', error);
    process.exit(1);
  });