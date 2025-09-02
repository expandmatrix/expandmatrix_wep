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

async function createCategoryI18nCollection() {
  console.log('🚀 Vytvářím novou kolekci category_i18n...');
  
  try {
    // Načtení schématu z JSON souboru
    const schemaPath = path.join(__dirname, 'categoryI18nSchema.json');
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    
    console.log('📋 Načteno schéma kolekce:');
    console.log(`   Název: ${schema.info.displayName}`);
    console.log(`   Typ: ${schema.kind}`);
    console.log(`   Atributy: ${Object.keys(schema.attributes).join(', ')}`);
    console.log('');
    
    // Vytvoření kolekce
    console.log('🔨 Vytvářím kolekci...');
    const createResponse = await fetch(`${STRAPI_URL}/api/content-type-builder/content-types`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contentType: schema
      })
    });
    
    if (!createResponse.ok) {
      const errorData = await createResponse.text();
      throw new Error(`Chyba při vytváření kolekce: ${createResponse.status} ${createResponse.statusText}\n${errorData}`);
    }
    
    const result = await createResponse.json();
    console.log('✅ Kolekce úspěšně vytvořena');
    console.log(`   UID: ${result.uid || 'api::category-i18n.category-i18n'}`);
    console.log('');
    
    // Ověření vytvoření
    console.log('🔍 Ověřuji vytvoření kolekce...');
    const verifyResponse = await fetch(`${STRAPI_URL}/api/category-i18ns`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (verifyResponse.ok) {
      console.log('✅ Endpoint /api/category-i18ns je dostupný');
      const data = await verifyResponse.json();
      console.log(`📊 Počet záznamů: ${data.data?.length || 0}`);
    } else {
      console.log('⚠️  Endpoint zatím není dostupný - možná je potřeba restart serveru');
    }
    
  } catch (error) {
    console.error('❌ Chyba při vytváření kolekce:', error.message);
    
    // Pokud API endpoint nefunguje, zobrazíme manuální instrukce
    console.log('');
    console.log('📋 MANUÁLNÍ VYTVOŘENÍ KOLEKCE:');
    console.log('');
    console.log('1️⃣  PŘIHLÁŠENÍ DO ADMIN PANELU:');
    console.log(`   🌐 Otevřete: ${STRAPI_URL}/admin`);
    console.log('');
    console.log('2️⃣  VYTVOŘENÍ KOLEKCE:');
    console.log('   📂 Jděte do Content-Type Builder');
    console.log('   ➕ Klikněte na "Create new collection type"');
    console.log('   📝 Název: "Category i18n"');
    console.log('   🆔 API ID: "category-i18n"');
    console.log('');
    console.log('3️⃣  PŘIDÁNÍ ATRIBUTŮ:');
    console.log('   📝 name (Text, Required, Max 255)');
    console.log('   🔗 slug (UID, Target: name, Required)');
    console.log('   📄 description (Long text)');
    console.log('   🌐 locale (Enumeration: en, cs, Required, Default: en)');
    console.log('   🔗 category (Relation: Many to One with Category)');
    console.log('   🔍 seo_title (Text, Max 60)');
    console.log('   🔍 seo_description (Long text, Max 160)');
    console.log('   🏷️  meta_keywords (Text)');
    console.log('');
    console.log('4️⃣  ULOŽENÍ:');
    console.log('   💾 Klikněte na "Save" a počkejte na restart');
    
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Script pro vytvoření kolekce category_i18n');
  console.log(`🌐 Strapi URL: ${STRAPI_URL}`);
  console.log('');
  
  await createCategoryI18nCollection();
  
  console.log('');
  console.log('✅ Vytvoření dokončeno');
  console.log('');
  console.log('📋 DALŠÍ KROKY:');
  console.log('  1. Aktualizujte kolekci Category pro relaci s category_i18n');
  console.log('  2. Nastavte oprávnění pro nové API endpointy');
  console.log('  3. Migrujte existující data');
  console.log('  4. Implementujte lifecycles pro slug normalizaci');
}

main().catch(console.error);