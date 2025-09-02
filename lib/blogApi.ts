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
  name: string;
  slug: { cs: string; en: string };
  title: { cs: string; en: string };
  excerpt: { cs: string; en: string };
  content: { cs: string; en: string };
  category: 'news' | 'case-studies' | 'guide';
  authors: string[];
  publishedAt: string;
  featuredImage: { cs: string; en: string };
  readTime: number;
  metaTitle: { cs: string; en: string };
  metaDescription: { cs: string; en: string };
}

// API funkce pro kategorie s novou i18n strukturou
export async function getBlogCategories(locale: string = 'en'): Promise<BlogCategory[]> {
  const fallbackCategories: BlogCategory[] = [];

  try {
    console.log(`Načítám kategorie ze Strapi CMS pro jazyk: ${locale}...`);
    
    // Načteme kategorie pro oba jazyky
    const [csCategories, enCategories] = await Promise.all([
      strapiApi.getCategories('cs'),
      strapiApi.getCategories('en')
    ]);
    
    console.log('České kategorie:', csCategories);
    console.log('Anglické kategorie:', enCategories);
    
    if (!csCategories || !Array.isArray(csCategories)) {
      console.warn('Neplatná data českých kategorií ze Strapi, používám fallback');
      return fallbackCategories;
    }

    if (csCategories.length === 0) {
      console.warn('Žádné české kategorie ze Strapi, používám fallback');
      return fallbackCategories;
    }

    // Mapujeme kategorie s bilingválními názvy
    const mappedCategories = csCategories
      .filter(category => {
        if (!category || !category.slug) {
          console.warn('Neplatná kategorie:', category);
          return false;
        }
        return true;
      })
      .map((csCategory) => {
        console.log(`Zpracovávám kategorii: ${csCategory.slug}`);
        
        // Najdeme odpovídající anglickou kategorii podle ID
        const enCategory = enCategories?.find(en => en.id === csCategory.id);
        
        return {
          id: csCategory.id.toString(),
          slug: locale === 'cs' ? csCategory.slug : (enCategory?.slug || csCategory.slug),
          name: { 
            cs: csCategory.name,
            en: enCategory?.name || csCategory.name
          },
          description: { 
            cs: csCategory.description || '',
            en: enCategory?.description || csCategory.description || ''
          },
          order: 1, // sort_order není v transformované struktuře
          isActive: true, // is_active je filtrováno v getCategories
          icon: undefined
        };
      });

    console.log(`✅ Úspěšně načteno ${mappedCategories.length} kategorií`);
    return mappedCategories;
    
  } catch (error) {
    console.error('Chyba při načítání kategorií ze Strapi:', error);
    return fallbackCategories;
  }
}

// API funkce pro články
export async function getBlogArticles(categorySlug?: string): Promise<BlogArticle[]> {
  try {
    console.log('🔍 Načítávám články ze Strapi...');
    console.log('Debug - getBlogArticles called with categorySlug:', categorySlug);
    
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
      .filter(article => {
        console.log('Debug - filtering article:', JSON.stringify(article, null, 2));
        return article && article.id && article.i18n;
      }) // Filtrujeme pouze validní články
      .map(article => ({
      id: article.id.toString(),
      name: article.name,
      slug: {
        cs: article.i18n.cs?.slug || '',
        en: article.i18n.en?.slug || ''
      },
      title: {
        cs: article.i18n.cs?.title || '',
        en: article.i18n.en?.title || ''
      },
      excerpt: {
        cs: article.i18n.cs?.excerpt || (article.i18n.cs?.content ? article.i18n.cs.content.substring(0, 200) + '...' : 'Bez popisu'),
        en: article.i18n.en?.excerpt || (article.i18n.en?.content ? article.i18n.en.content.substring(0, 200) + '...' : 'No description')
      },
      content: {
        cs: article.i18n.cs?.content || '',
        en: article.i18n.en?.content || ''
      },
      category: article.categories?.[0]?.slug as 'news' | 'case-studies' | 'guide' || 'news',
      authors: article.authors?.map(author => author.name) || ['Expand Matrix'],
      publishedAt: article.publishedAt,
      featuredImage: {
        cs: article.i18n.cs?.coverImage?.url || '/images/default-blog.jpg',
        en: article.i18n.en?.coverImage?.url || '/images/default-blog.jpg'
      },
      readTime: Math.ceil((article.i18n.cs?.content?.length || article.i18n.en?.content?.length || 0) / 1000),
      metaTitle: {
        cs: article.i18n.cs?.metaTitle || '',
        en: article.i18n.en?.metaTitle || ''
      },
      metaDescription: {
        cs: article.i18n.cs?.metaDescription || '',
        en: article.i18n.en?.metaDescription || ''
      }
    }));
  } catch (error) {
    console.error('Chyba při načítání článků ze Strapi:', error);
    // Fallback - vrátime prázdny zoznam, pretože blogData má starú štruktúru
    return [];
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
      name: strapiArticle.name,
      slug: {
        cs: strapiArticle.i18n.cs?.slug || '',
        en: strapiArticle.i18n.en?.slug || ''
      },
      title: {
        cs: strapiArticle.i18n.cs?.title || '',
        en: strapiArticle.i18n.en?.title || ''
      },
      excerpt: {
        cs: strapiArticle.i18n.cs?.excerpt || (strapiArticle.i18n.cs?.content ? strapiArticle.i18n.cs.content.substring(0, 200) + '...' : 'Bez popisu'),
        en: strapiArticle.i18n.en?.excerpt || (strapiArticle.i18n.en?.content ? strapiArticle.i18n.en.content.substring(0, 200) + '...' : 'No description')
      },
      content: {
        cs: strapiArticle.i18n.cs?.content || '',
        en: strapiArticle.i18n.en?.content || ''
      },
      category: strapiArticle.categories?.[0]?.slug as 'news' | 'case-studies' | 'guide' || 'news',
      authors: strapiArticle.authors?.map(author => author.name) || ['Expand Matrix'],
      publishedAt: strapiArticle.publishedAt,
      featuredImage: {
        cs: strapiArticle.i18n.cs?.coverImage?.url || '/images/default-blog.jpg',
        en: strapiArticle.i18n.en?.coverImage?.url || '/images/default-blog.jpg'
      },
      readTime: Math.ceil((strapiArticle.i18n.cs?.content?.length || strapiArticle.i18n.en?.content?.length || 0) / 1000),
      metaTitle: {
        cs: strapiArticle.i18n.cs?.metaTitle || '',
        en: strapiArticle.i18n.en?.metaTitle || ''
      },
      metaDescription: {
        cs: strapiArticle.i18n.cs?.metaDescription || '',
        en: strapiArticle.i18n.en?.metaDescription || ''
      }
    };
  } catch (error) {
    console.error('Chyba při načítání článku ze Strapi:', error);
    // Fallback - vrátime null, pretože blogData má starú štruktúru
    return null;
  }
}

export async function getCategoryBySlug(slug: string, locale: string = 'en'): Promise<BlogCategory | null> {
  const categories = await getBlogCategories(locale);
  return categories.find(cat => cat.slug === slug) || null;
}