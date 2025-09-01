import strapiApi from '../lib/strapiApi';
import { StrapiArticle, StrapiCategory, StrapiAuthor } from '../lib/types/strapi';

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
  { name: 'Jan Novák', email: 'jan.novak@expandmatrix.com', bio: 'Expert na umělou inteligenci s 10letou praxí' },
  { name: 'Marie Svobodová', email: 'marie.svobodova@expandmatrix.com', bio: 'Specialistka na machine learning a data science' },
  { name: 'Petr Dvořák', email: 'petr.dvorak@expandmatrix.com', bio: 'Konzultant pro AI automatizaci v podnicích' },
  { name: 'Anna Krásná', email: 'anna.krasna@expandmatrix.com', bio: 'Vývojářka AI aplikací a chatbotů' }
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
  private createdCategories: any[] = [];
  private createdAuthors: any[] = [];

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  private generateContent(): string {
    const template = this.getRandomElement(contentTemplates);
    return template;
  }

  async createCategories(): Promise<void> {
    console.log('🏷️  Vytváření kategorií...');
    
    for (const category of categories) {
      try {
        const response = await fetch(`${process.env.STRAPI_API_URL}/api/categories`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
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
          console.log(`⚠️  Kategorie "${category.name}" již existuje nebo došlo k chybě`);
        }
      } catch (error) {
        console.error(`❌ Chyba při vytváření kategorie "${category.name}":`, error);
      }
    }
  }

  async createAuthors(): Promise<void> {
    console.log('👥 Vytváření autorů...');
    
    for (const author of authors) {
      try {
        const response = await fetch(`${process.env.STRAPI_API_URL}/api/authors`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
          },
          body: JSON.stringify({
            data: {
              name: author.name,
              email: author.email,
              bio: author.bio
            }
          })
        });

        if (response.ok) {
          const result = await response.json();
          this.createdAuthors.push(result.data);
          console.log(`✅ Autor "${author.name}" vytvořen`);
        } else {
          console.log(`⚠️  Autor "${author.name}" již existuje nebo došlo k chybě`);
        }
      } catch (error) {
        console.error(`❌ Chyba při vytváření autora "${author.name}":`, error);
      }
    }
  }

  async fetchExistingData(): Promise<void> {
    try {
      // Načtení existujících kategorií
      const categoriesResponse = await fetch(`${process.env.STRAPI_API_URL}/api/categories`, {
        headers: {
          'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
      });
      
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        this.createdCategories = categoriesData.data || [];
      }

      // Načtení existujících autorů
      const authorsResponse = await fetch(`${process.env.STRAPI_API_URL}/api/authors`, {
        headers: {
          'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
      });
      
      if (authorsResponse.ok) {
        const authorsData = await authorsResponse.json();
        this.createdAuthors = authorsData.data || [];
      }
    } catch (error) {
      console.error('❌ Chyba při načítání existujících dat:', error);
    }
  }

  async createArticles(count: number = 15): Promise<void> {
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
        const response = await fetch(`${process.env.STRAPI_API_URL}/api/articles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
          },
          body: JSON.stringify({
            data: {
              title: `${title} ${i + 1}`,
              slug: `${slug}-${i + 1}`,
              content: content,
              excerpt: content.substring(0, 200) + '...',
              publishedAt: publishedAt,
              category: category.id || category.documentId,
              author: author.id || author.documentId,
              featured: Math.random() < 0.3, // 30% šance na featured
              status: 'published'
            }
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log(`✅ Článek "${title} ${i + 1}" vytvořen`);
        } else {
          const errorData = await response.text();
          console.error(`❌ Chyba při vytváření článku "${title} ${i + 1}":`, errorData);
        }
      } catch (error) {
        console.error(`❌ Chyba při vytváření článku "${title} ${i + 1}":`, error);
      }

      // Krátká pauza mezi požadavky
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  async generateAllContent(): Promise<void> {
    console.log('🚀 Spouštění generování testovacího obsahu...');
    
    try {
      // Načtení existujících dat
      await this.fetchExistingData();
      
      // Vytvoření kategorií (pokud neexistují)
      if (this.createdCategories.length === 0) {
        await this.createCategories();
      } else {
        console.log(`ℹ️  Nalezeno ${this.createdCategories.length} existujících kategorií`);
      }
      
      // Vytvoření autorů (pokud neexistují)
      if (this.createdAuthors.length === 0) {
        await this.createAuthors();
      } else {
        console.log(`ℹ️  Nalezeno ${this.createdAuthors.length} existujících autorů`);
      }
      
      // Vytvoření článků
      await this.createArticles(15);
      
      console.log('🎉 Generování obsahu dokončeno!');
      
    } catch (error) {
      console.error('❌ Chyba při generování obsahu:', error);
    }
  }
}

// Spuštění generátoru
if (require.main === module) {
  const generator = new ContentGenerator();
  generator.generateAllContent();
}

export default ContentGenerator;