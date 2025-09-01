export interface BlogCategory {
  id: string;
  slug: string;
  name: { cs: string; en: string };
  description: { cs: string; en: string };
  icon?: string;
  order: number;
  isActive: boolean;
}

import { blogArticles } from './blogData';
import { strapiApi } from './strapiApi';

export interface BlogArticle {
  id: string;
  slug: string;
  title: { cs: string; en: string };
  excerpt: { cs: string; en: string };
  content: { cs: string; en: string };
  category: 'news' | 'case-studies' | 'guide';
  tags: string[];
  author: string;
  publishedAt: string;
  featuredImage: string;
  readTime: number;
}

// API funkce pro kategorie
export async function getBlogCategories(): Promise<BlogCategory[]> {
  // Fallback kategorie pro případ chyby
  const fallbackCategories: BlogCategory[] = [
    {
      id: '1',
      slug: 'news',
      name: { cs: 'Novinky', en: 'News' },
      description: { cs: 'Nejnovější trendy a novinky', en: 'Latest trends and news' },
      icon: 'newspaper',
      order: 1,
      isActive: true
    },
    {
      id: '2', 
      slug: 'case-studies',
      name: { cs: 'Case Studies', en: 'Case Studies' },
      description: { cs: 'Úspěšné projekty a jejich výsledky', en: 'Successful projects and results' },
      icon: 'file-text',
      order: 2,
      isActive: true
    },
    {
      id: '3',
      slug: 'guide',
      name: { cs: 'Návody', en: 'Guide' },
      description: { cs: 'Praktické návody krok za krokem', en: 'Step-by-step practical guides' },
      icon: 'book-open',
      order: 3,
      isActive: true
    }
  ];

  // Pro nyní vrátíme fallback kategorie, protože Strapi API nefunguje správně
  console.warn('Using fallback categories due to Strapi API issues');
  return fallbackCategories;
}

// API funkce pro články
export async function getBlogArticles(categorySlug?: string): Promise<BlogArticle[]> {
  try {
    const options: any = {
      page: 1,
      pageSize: 100, // Načteme více článků
      sort: 'publishedAt:desc'
    };

    // Pokud je specifikována kategorie, přidáme filtr
    if (categorySlug) {
      options.filters = {
        category: {
          slug: {
            $eq: categorySlug
          }
        }
      };
    }

    const result = await strapiApi.getArticles(options);
    const { articles } = result || {};
    
    // Kontrola, zda jsou články validní
    if (!articles || !Array.isArray(articles)) {
      throw new Error('Invalid articles data from Strapi');
    }
    
    // Transformace článků ze Strapi na blog články s dvoujazyčnou podporou
    return articles
      .filter(article => article && article.id && article.slug) // Filtrujeme pouze validní články
      .map(article => ({
      id: article.id.toString(),
      slug: article.slug,
      title: {
        cs: article.title, // V budoucnu můžeme přidat lokalizaci
        en: article.title
      },
      excerpt: {
        cs: article.excerpt || article.content.substring(0, 200) + '...',
        en: article.excerpt || article.content.substring(0, 200) + '...'
      },
      content: {
        cs: article.content,
        en: article.content
      },
      category: article.category?.slug as 'news' | 'case-studies' | 'guide' || 'news',
      tags: article.tags || [],
      author: article.author?.name || 'Expand Matrix',
      publishedAt: article.publishedAt,
      featuredImage: article.featuredImage?.url || '/images/default-blog.jpg',
      readTime: article.readingTime || Math.ceil(article.content.length / 1000) // Odhad času čtení
    }));
  } catch (error) {
    console.error('Chyba při načítání článků ze Strapi:', error);
    // Fallback na původní hardcoded články v případě chyby
    const allArticles = blogArticles;
    
    if (categorySlug) {
      return allArticles.filter(article => article.category === categorySlug);
    }
    
    return allArticles;
  }
}

export async function getArticleBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const strapiArticle = await strapiApi.getArticleBySlug(slug);
    
    if (!strapiArticle) {
      return null;
    }
    
    // Transformace článku ze Strapi na blog článek
    return {
      id: strapiArticle.id.toString(),
      slug: strapiArticle.slug,
      title: {
        cs: strapiArticle.title,
        en: strapiArticle.title
      },
      excerpt: {
        cs: strapiArticle.excerpt || strapiArticle.content.substring(0, 200) + '...',
        en: strapiArticle.excerpt || strapiArticle.content.substring(0, 200) + '...'
      },
      content: {
        cs: strapiArticle.content,
        en: strapiArticle.content
      },
      category: strapiArticle.category?.slug as 'news' | 'case-studies' | 'guide' || 'news',
      tags: strapiArticle.tags || [],
      author: strapiArticle.author?.name || 'Expand Matrix',
      publishedAt: strapiArticle.publishedAt,
      featuredImage: strapiArticle.featuredImage?.url || '/images/default-blog.jpg',
      readTime: strapiArticle.readingTime || Math.ceil(strapiArticle.content.length / 1000)
    };
  } catch (error) {
    console.error('Chyba při načítání článku ze Strapi:', error);
    // Fallback na původní hardcoded články
    const articles = blogArticles;
    return articles.find(article => article.slug === slug) || null;
  }
}

export async function getCategoryBySlug(slug: string): Promise<BlogCategory | null> {
  const categories = await getBlogCategories();
  return categories.find(cat => cat.slug === slug) || null;
}