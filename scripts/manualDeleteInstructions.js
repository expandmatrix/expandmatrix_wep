require('dotenv').config({ path: '.env.local' });

// Konfigurace Strapi API
const STRAPI_URL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';
const KATEGORIE_UID = 'api::kategorie.kategorie';

function printManualInstructions() {
  console.log('🚀 Manuální instrukce pro smazání kolekce Kategorie');
  console.log(`🌐 Strapi URL: ${STRAPI_URL}`);
  console.log('');
  
  console.log('✅ ÚSPĚŠNĚ DOKONČENO:');
  console.log('  📦 Všechny záznamy z kolekce "Kategorie" byly smazány');
  console.log('  🗂️  Kolekce je nyní prázdná');
  console.log('');
  
  console.log('⚠️  NELZE AUTOMATICKY DOKONČIT:');
  console.log('  🚫 Strapi API nepovoluje mazání content-types přes REST API');
  console.log('  🔧 Je potřeba manuální zásah v admin panelu');
  console.log('');
  
  console.log('📋 MANUÁLNÍ KROKY PRO DOKONČENÍ:');
  console.log('');
  
  console.log('1️⃣  PŘIHLÁŠENÍ DO ADMIN PANELU:');
  console.log(`   🌐 Otevřete: ${STRAPI_URL}/admin`);
  console.log('   🔑 Přihlaste se pomocí admin účtu');
  console.log('');
  
  console.log('2️⃣  NAVIGACE DO CONTENT-TYPE BUILDER:');
  console.log('   📂 V levém menu klikněte na "Content-Type Builder"');
  console.log('   🔍 Najděte kolekci "Kategorie" v seznamu Collection Types');
  console.log('');
  
  console.log('3️⃣  SMAZÁNÍ KOLEKCE:');
  console.log('   🎯 Klikněte na kolekci "Kategorie"');
  console.log('   ⚙️  Klikněte na ikonu nastavení (gear icon) vedle názvu');
  console.log('   🗑️  Vyberte "Delete" z dropdown menu');
  console.log('   ✅ Potvrďte smazání');
  console.log('');
  
  console.log('4️⃣  ULOŽENÍ ZMĚN:');
  console.log('   💾 Klikněte na "Save" tlačítko v pravém horním rohu');
  console.log('   🔄 Počkejte na restart Strapi serveru');
  console.log('');
  
  console.log('5️⃣  OVĚŘENÍ:');
  console.log('   🔍 Zkontrolujte, že kolekce "Kategorie" již není v seznamu');
  console.log('   🌐 Ověřte, že endpoint /api/kategories vrací 404');
  console.log('');
  
  console.log('📊 TECHNICKÉ DETAILY:');
  console.log(`   🆔 UID kolekce: ${KATEGORIE_UID}`);
  console.log('   📁 Typ: Collection Type');
  console.log('   🗂️  Atributy: name, slug');
  console.log('   📊 Smazané záznamy: 2 (Test, automatizace)');
  console.log('');
  
  console.log('⚠️  DŮLEŽITÉ POZNÁMKY:');
  console.log('   💾 Záloha dat je uložena v: backups/categories-backup-*');
  console.log('   🔄 Po smazání bude potřeba restart Strapi serveru');
  console.log('   🚫 Endpoint /api/kategories přestane existovat');
  console.log('   ✅ Zachová se pouze /api/categories (anglické kategorie)');
  console.log('');
  
  console.log('🎯 PO DOKONČENÍ POKRAČUJTE:');
  console.log('   📝 Vytvořením nové kolekce category_i18n');
  console.log('   🔗 Nastavením relací mezi category a category_i18n');
  console.log('   🌐 Migrací dat do nové struktury');
}

function main() {
  printManualInstructions();
}

main();