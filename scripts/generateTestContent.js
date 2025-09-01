const fetch = require('node-fetch');
require('dotenv').config({ path: '.env.local' });

// Náhodná data pro generování obsahu
const categories = [
  { name: 'Umělá inteligence', slug: 'umela-inteligence', description: 'Články o AI technologiích a jejich aplikacích' },
  { name: 'Machine Learning', slug: 'machine-learning', description: 'Pokročilé techniky strojového učení' },
  { name: 'Automatizace', slug: 'automatizace', description: 'Automatizace procesů pomocí AI' },
  { name: 'Data Science', slug: 'data-science', description: 'Analýza dat a prediktivní modelování' },
  { name: 'Technologie', slug: 'technologie', description: 'Nejnovější technologické trendy' },
  { name: 'Business AI', slug: 'business-ai', description: 'AI řešení pro podnikání' }
];

const authors = [
  { name: 'Jan Novák', email: 'jan.novak@expandmatrix.com' },
  { name: 'Marie Svobodová', email: 'marie.svobodova@expandmatrix.com' },
  { name: 'Petr Dvořák', email: 'petr.dvorak@expandmatrix.com' },
  { name: 'Anna Krásná', email: 'anna.krasna@expandmatrix.com' }
];

const articleTitles = [
  'Jak AI mění způsob práce v moderních firmách',
  'Machine Learning: Od základů k pokročilým technikám',
  'Automatizace zákaznického servisu pomocí chatbotů',
  'Prediktivní analýza v e-commerce: Praktický průvodce',
  'Etické aspekty umělé inteligence v roce 2024',
  'Implementace AI v malých a středních podnicích',
  'Deep Learning pro zpracování přirozeného jazyka',
  'Computer Vision: Revoluce v analýze obrazu',
  'AI v healthcare: Budoucnost medicíny',
  'Optimalizace procesů pomocí reinforcement learning',
  'Generativní AI: Kreativita v rukou strojů',
  'Bezpečnost AI systémů: Výzvy a řešení',
  'Edge AI: Umělá inteligence na okraji sítě',
  'Transformace HR procesů pomocí AI',
  'AI v marketingu: Personalizace na nové úrovni'
];

const contentTemplates = [
  `Umělá inteligence se stává neodmyslitelnou součástí moderního podnikání. V tomto článku se podíváme na konkrétní způsoby, jak AI transformuje různé oblasti.

## Hlavní oblasti aplikace

AI nachází uplatnění v mnoha oblastech:
- Automatizace rutinních úkolů
- Analýza velkých dat
- Prediktivní modelování
- Personalizace zákaznické zkušenosti

## Praktické příklady

Mnoho společností již úspěšně implementovalo AI řešení. Například:

### Zákaznický servis
Chatboti a virtuální asistenti dokáží vyřešit až 80% základních dotazů zákazníků.

### Marketing
AI algoritmy optimalizují reklamní kampaně v reálném čase.

## Budoucí trendy

Očekáváme další rozvoj v oblastech:
1. Explainable AI
2. Federated Learning
3. AI Ethics

## Závěr

Implementace AI není jen technologická výzva, ale strategické rozhodnutí, které může zásadně ovlivnit konkurenceschopnost firmy.`,
  
  `Machine learning představuje jednu z nejdynamičtěji se rozvíjejících oblastí informatiky. Tento článek poskytuje komplexní přehled základních i pokročilých technik.

## Základní koncepty

### Supervised Learning
Učení s učitelem využívá označená data pro trénování modelů.

### Unsupervised Learning
Učení bez učitele hledá skryté vzory v neoznačených datech.

### Reinforcement Learning
Posilované učení se zaměřuje na optimalizaci rozhodování.

## Populární algoritmy

- **Random Forest**: Ensemble metoda pro klasifikaci i regresi
- **Neural Networks**: Inspirované biologickými neurony
- **SVM**: Support Vector Machines pro klasifikaci
- **K-means**: Clustering algoritmus

## Praktické aplikace

Machine learning se používá v:
- Rozpoznávání obrazu
- Zpracování přirozeného jazyka
- Doporučovacích systémech
- Finančním modelování

## Výzvy a omezení

Při implementaci ML je třeba zvážit:
- Kvalitu a množství dat
- Výpočetní náročnost
- Interpretabilitu modelů
- Etické aspekty

## Budoucnost ML

Očekáváme pokroky v:
- AutoML platformách
- Kvantovém machine learningu
- Neuromorphic computing`,
  
  `Automatizace pomocí umělé inteligence revolucionizuje způsob, jakým firmy přistupují k rutinním procesům. Tento článek zkoumá možnosti a výhody AI automatizace.

## Co je AI automatizace?

AI automatizace kombinuje tradiční automatizaci s inteligentními algoritmy, které dokáží:
- Rozhodovat na základě kontextu
- Učit se z dat
- Adaptovat se na změny

## Klíčové oblasti aplikace

### Finanční procesy
- Automatické zpracování faktur
- Detekce podvodů
- Compliance monitoring

### HR procesy
- Screening životopisů
- Plánování směn
- Performance analytics

### Výroba
- Prediktivní údržba
- Kontrola kvality
- Optimalizace výroby

## Implementační strategie

1. **Identifikace procesů**: Najděte repetitivní úkoly
2. **Analýza dat**: Ověřte dostupnost kvalitních dat
3. **Pilotní projekt**: Začněte s malým rozsahem
4. **Škálování**: Postupně rozšiřujte na další oblasti

## ROI a metriky

Úspěch AI automatizace měřte pomocí:
- Úspory času
- Snížení chybovosti
- Zvýšení produktivity
- Spokojenost zaměstnanců

## Výzvy implementace

- Change management
- Školení zaměstnanců
- Integrace se stávajícími systémy
- Bezpečnost dat`
];

class ContentGenerator {
  constructor() {
    this.createdCategories = [];
    this.createdAuthors = [];
    this.baseURL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';
    this.token = process.env.STRAPI_API_TOKEN;
    
    if (!this.token) {
      throw new Error('STRAPI_API_TOKEN is required in .env.local file');
    }
  }

  getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  generateContent() {
    return this.getRandomElement(contentTemplates);
  }

  async createCategories() {
    console.log('🏷️  Vytváření kategorií...');
    
    for (const category of categories) {
      try {
        const response = await fetch(`${this.baseURL}/api/categories`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: JSON.stringify({
            data: {
              name: category.name,
              slug: category.slug,
              description: category.description
            }
          })
        });

        if (response.ok) {
          const result = await response.json();
          this.createdCategories.push(result.data);
          console.log(`✅ Kategorie "${category.name}" vytvořena`);
        } else {
          const errorText = await response.text();
          console.log(`⚠️  Kategorie "${category.name}" - ${response.status}: ${errorText}`);
        }
      } catch (error) {
        console.error(`❌ Chyba při vytváření kategorie "${category.name}":`, error.message);
      }
    }
  }

  async createAuthors() {
    console.log('👥 Vytváření autorů...');
    
    for (const author of authors) {
      try {
        const response = await fetch(`${this.baseURL}/api/authors`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: JSON.stringify({
            data: {
              name: author.name,
              email: author.email
            }
          })
        });

        if (response.ok) {
          const result = await response.json();
          this.createdAuthors.push(result.data);
          console.log(`✅ Autor "${author.name}" vytvořen`);
        } else {
          const errorText = await response.text();
          console.log(`⚠️  Autor "${author.name}" - ${response.status}: ${errorText}`);
        }
      } catch (error) {
        console.error(`❌ Chyba při vytváření autora "${author.name}":`, error.message);
      }
    }
  }

  async fetchExistingData() {
    try {
      console.log('📋 Načítání existujících dat...');
      
      // Načtení existujících kategorií
      const categoriesResponse = await fetch(`${this.baseURL}/api/categories`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        this.createdCategories = categoriesData.data || [];
        console.log(`ℹ️  Nalezeno ${this.createdCategories.length} existujících kategorií`);
      }

      // Načtení existujících autorů
      const authorsResponse = await fetch(`${this.baseURL}/api/authors`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      
      if (authorsResponse.ok) {
        const authorsData = await authorsResponse.json();
        this.createdAuthors = authorsData.data || [];
        console.log(`ℹ️  Nalezeno ${this.createdAuthors.length} existujících autorů`);
      }
    } catch (error) {
      console.error('❌ Chyba při načítání existujících dat:', error.message);
    }
  }

  async createArticles(count = 15) {
    console.log(`📝 Vytváření ${count} článků...`);
    
    if (this.createdCategories.length === 0 || this.createdAuthors.length === 0) {
      console.error('❌ Nejprve musí být vytvořeny kategorie a autoři');
      return;
    }

    for (let i = 0; i < count; i++) {
      const title = this.getRandomElement(articleTitles);
      const slug = this.generateSlug(title);
      const content = this.generateContent();
      const category = this.getRandomElement(this.createdCategories);
      const author = this.getRandomElement(this.createdAuthors);
      
      // Náhodné datum v posledních 30 dnech
      const publishedAt = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString();

      try {
        const response = await fetch(`${this.baseURL}/api/articles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: JSON.stringify({
            data: {
              title: `${title} ${i + 1}`,
              slug: `${slug}-${i + 1}`,
              description: `Článek o ${title.toLowerCase()}`,
              category: category.id || category.documentId,
              author: author.id || author.documentId
            }
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log(`✅ Článek "${title} ${i + 1}" vytvořen`);
        } else {
          const errorData = await response.text();
          console.error(`❌ Chyba při vytváření článku "${title} ${i + 1}" - ${response.status}:`, errorData);
        }
      } catch (error) {
        console.error(`❌ Chyba při vytváření článku "${title} ${i + 1}":`, error.message);
      }

      // Krátká pauza mezi požadavky
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  async generateAllContent() {
    console.log('🚀 Spouštění generování testovacího obsahu...');
    console.log(`🔗 API URL: ${this.baseURL}`);
    
    try {
      // Načtení existujících dat
      await this.fetchExistingData();
      
      // Vytvoření kategorií (pokud neexistují)
      if (this.createdCategories.length < categories.length) {
        await this.createCategories();
      }
      
      // Vytvoření autorů (pokud neexistují)
      if (this.createdAuthors.length < authors.length) {
        await this.createAuthors();
      }
      
      // Aktualizace dat po vytvoření
      await this.fetchExistingData();
      
      // Vytvoření článků
      await this.createArticles(15);
      
      console.log('🎉 Generování obsahu dokončeno!');
      console.log(`📊 Vytvořeno: ${this.createdCategories.length} kategorií, ${this.createdAuthors.length} autorů`);
      
    } catch (error) {
      console.error('❌ Chyba při generování obsahu:', error.message);
    }
  }
}

// Spuštění generátoru
if (require.main === module) {
  const generator = new ContentGenerator();
  generator.generateAllContent().catch(console.error);
}

module.exports = ContentGenerator;