require('dotenv').config({ path: '.env.local' });

// Konfigurace
const STRAPI_URL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';

function printDetailedInstructions() {
  console.log('🚀 DETAILNÍ INSTRUKCE PRO VYTVOŘENÍ KOLEKCE CATEGORY_I18N');
  console.log(`🌐 Strapi URL: ${STRAPI_URL}`);
  console.log('');
  
  console.log('📋 PŘEDPOKLADY:');
  console.log('  ✅ Kolekce "Kategorie" byla smazána z Content-Type Builder');
  console.log('  ✅ Strapi server byl restartován');
  console.log('  ✅ Endpoint /api/kategories již neexistuje');
  console.log('');
  
  console.log('🎯 CÍL:');
  console.log('  📦 Vytvořit novou kolekci "Category i18n"');
  console.log('  🔗 Nastavit relaci s existující kolekcí "Category"');
  console.log('  🌐 Podpora pro lokalizaci (en, cs)');
  console.log('  🔍 SEO optimalizace');
  console.log('');
  
  console.log('📋 KROK ZA KROKEM:');
  console.log('');
  
  console.log('1️⃣  PŘIHLÁŠENÍ:');
  console.log(`   🌐 Otevřete: ${STRAPI_URL}/admin`);
  console.log('   🔑 Přihlaste se pomocí admin účtu');
  console.log('');
  
  console.log('2️⃣  NAVIGACE:');
  console.log('   📂 V levém menu klikněte na "Content-Type Builder"');
  console.log('   ✅ Ověřte, že kolekce "Kategorie" již neexistuje');
  console.log('   ✅ Ověřte, že kolekce "Category" stále existuje');
  console.log('');
  
  console.log('3️⃣  VYTVOŘENÍ KOLEKCE:');
  console.log('   ➕ Klikněte na "Create new collection type"');
  console.log('   📝 Display name: "Category i18n"');
  console.log('   🆔 API ID (singular): "category-i18n"');
  console.log('   📚 API ID (plural): "category-i18ns"');
  console.log('   ✅ Klikněte "Continue"');
  console.log('');
  
  console.log('4️⃣  PŘIDÁNÍ ATRIBUTŮ:');
  console.log('');
  
  console.log('   📝 ATRIBUT 1 - NAME:');
  console.log('      ➕ Add another field → Text');
  console.log('      📝 Name: "name"');
  console.log('      ✅ Required: true');
  console.log('      📏 Max length: 255');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   🔗 ATRIBUT 2 - SLUG:');
  console.log('      ➕ Add another field → UID');
  console.log('      📝 Name: "slug"');
  console.log('      🎯 Attached field: "name"');
  console.log('      ✅ Required: true');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   📄 ATRIBUT 3 - DESCRIPTION:');
  console.log('      ➕ Add another field → Rich Text (Long text)');
  console.log('      📝 Name: "description"');
  console.log('      ❌ Required: false');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   🌐 ATRIBUT 4 - LOCALE:');
  console.log('      ➕ Add another field → Enumeration');
  console.log('      📝 Name: "locale"');
  console.log('      ✅ Required: true');
  console.log('      📋 Values: "en", "cs"');
  console.log('      🎯 Default value: "en"');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   🔗 ATRIBUT 5 - CATEGORY (RELACE):');
  console.log('      ➕ Add another field → Relation');
  console.log('      📝 Name: "category"');
  console.log('      🔗 Relation type: "Many to One"');
  console.log('      🎯 Target: "Category" (api::category.category)');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   🔍 ATRIBUT 6 - SEO_TITLE:');
  console.log('      ➕ Add another field → Text');
  console.log('      📝 Name: "seo_title"');
  console.log('      ❌ Required: false');
  console.log('      📏 Max length: 60');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   🔍 ATRIBUT 7 - SEO_DESCRIPTION:');
  console.log('      ➕ Add another field → Long text');
  console.log('      📝 Name: "seo_description"');
  console.log('      ❌ Required: false');
  console.log('      📏 Max length: 160');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('   🏷️  ATRIBUT 8 - META_KEYWORDS:');
  console.log('      ➕ Add another field → Text');
  console.log('      📝 Name: "meta_keywords"');
  console.log('      ❌ Required: false');
  console.log('      ✅ Finish adding field');
  console.log('');
  
  console.log('5️⃣  ULOŽENÍ KOLEKCE:');
  console.log('   💾 Klikněte na "Save" (pravý horní roh)');
  console.log('   ⏳ Počkejte na restart Strapi serveru (může trvat 1-2 minuty)');
  console.log('   ✅ Ověřte, že kolekce "Category i18n" se objevila v seznamu');
  console.log('');
  
  console.log('6️⃣  AKTUALIZACE KOLEKCE CATEGORY:');
  console.log('   🎯 Klikněte na existující kolekci "Category"');
  console.log('   ➕ Add another field → Relation');
  console.log('   📝 Name: "localizations"');
  console.log('   🔗 Relation type: "One to Many"');
  console.log('   🎯 Target: "Category i18n" (api::category-i18n.category-i18n)');
  console.log('   💾 Save a počkejte na restart');
  console.log('');
  
  console.log('7️⃣  OVĚŘENÍ:');
  console.log('   🌐 Zkontrolujte, že endpoint /api/category-i18ns je dostupný');
  console.log('   🔗 Ověřte relace mezi Category a Category i18n');
  console.log('   📊 Zkuste vytvořit testovací záznam');
  console.log('');
  
  console.log('⚠️  DŮLEŽITÉ POZNÁMKY:');
  console.log('   🔄 Po každém Save je potřeba restart serveru');
  console.log('   🔗 Relace musí být nastaveny na obou stranách');
  console.log('   🌐 Locale enumeration musí obsahovat přesně "en" a "cs"');
  console.log('   📏 Dodržujte max délky pro SEO fieldy');
  console.log('');
  
  console.log('🎯 PO DOKONČENÍ:');
  console.log('   ✅ Nastavte oprávnění pro nové API endpointy');
  console.log('   📊 Migrujte existující data');
  console.log('   🔧 Aktualizujte frontend kód');
  console.log('   🧪 Otestujte funkčnost');
}

function main() {
  printDetailedInstructions();
}

main();