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
  // Žádné fallback kategorie - načítáme pouze z CMS
  const fallbackCategories: BlogCategory[] = [];

  try {
    console.log('Načítám kategorie ze Strapi CMS...');
    const strapiCategories = await strapiApi.getCategories();
    console.log('Strapi kategorie:', strapiCategories);
    
    if (!strapiCategories || !Array.isArray(strapiCategories)) {
      console.warn('Neplatná data kategorií ze Strapi, používám fallback');
      return fallbackCategories;
    }

    if (strapiCategories.length === 0) {
      console.warn('Žádné kategorie ze Strapi, používám fallback');
      return fallbackCategories;
    }

    // Žádné hardcoded mapování - používáme pouze data z CMS

    // Filtrujeme a mapujeme kategorie
    const mappedCategories = strapiCategories
      .filter(category => {
        if (!category || !category.slug) {
          console.warn('Neplatná kategorie:', category);
          return false;
        }
        return true;
      })
      .map((category, index) => {
        console.log(`Zpracovávám kategorii: ${category.slug}`);
        
        // Vytvoříme mapování přímo z dat CMS
        const categoryData = {
          name: { 
            cs: category.name || category.slug, 
            en: category.name || category.slug 
          },
          description: { 
            cs: category.description || 'Popis kategorie', 
            en: category.description || 'Category description' 
          },
          icon: 'file-text'
        };
        
        if (!categoryData.name || !categoryData.description) {
          console.error('Neplatná data pro kategorii:', category.slug, categoryData);
          return null;
        }
        
        return {
          id: category.id.toString(),
          slug: category.slug,
          name: categoryData.name,
          description: categoryData.description,
          icon: categoryData.icon,
          order: index + 1,
          isActive: true
        };
      })
      .filter(Boolean) as BlogCategory[];

    if (mappedCategories.length === 0) {
      console.warn('Žádné validní kategorie po mapování, používám fallback');
      return fallbackCategories;
    }

    console.log('Úspěšně načteno kategorií ze Strapi:', mappedCategories.length);
    return mappedCategories.sort((a, b) => a.order - b.order);
    
  } catch (error) {
    console.error('Chyba při načítání kategorií ze Strapi:', error);
    return fallbackCategories;
  }
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
        cs: article.excerpt || (article.content ? article.content.substring(0, 200) + '...' : 'Bez popisu'),
        en: article.excerpt || (article.content ? article.content.substring(0, 200) + '...' : 'No description')
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
      readTime: article.readingTime || Math.ceil((article.content?.length || 0) / 1000) // Odhad času čtení
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