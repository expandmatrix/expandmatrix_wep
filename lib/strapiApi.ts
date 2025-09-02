import {
  StrapiResponse,
  StrapiSingleResponse,
  StrapiEntity,
  StrapiArticle,
  StrapiAuthor,
  StrapiCategory,
  StrapiCategoryI18n,
  Article,
  Author,
  Category,
  CategoryI18n,
} from './types/strapi';

class StrapiAPI {
  private baseURL: string;
  private token: string;

  constructor() {
    this.baseURL = process.env.STRAPI_API_URL || 'https://cms.expandmatrix.com';
    this.token = process.env.STRAPI_API_TOKEN || '';

    if (!this.token) {
      throw new Error('STRAPI_API_TOKEN is required');
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}/api${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`Strapi API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Strapi API request failed:', error);
      throw error;
    }
  }

  // Transform Strapi media URL to absolute URL
  private getMediaUrl(url?: string): string | undefined {
    if (!url) return undefined;
    return url.startsWith('http') ? url : `${this.baseURL}${url}`;
  }

  // Transform Strapi article to our Article type
  private transformArticle(strapiArticle: any): Article {
    // V Strapi v4 sú údaje priamo v objekte, nie v attributes
    const { id, name, authors, categories, article_i_18_ns, publishedAt, createdAt, updatedAt } = strapiArticle;
    
    // Transform authors - handle case when authors is not populated
    const transformedAuthors = authors?.data ? authors.data.map((author: any) => ({
      id: author.id,
      name: author.attributes.name,
      email: author.attributes.email,
      bio: author.attributes.bio,
      avatar: this.getMediaUrl(author.attributes.avatar?.attributes.url),
    })) : [];

    // Transform categories - handle case when categories is not populated
    const transformedCategories = categories?.data ? categories.data.map((category: any) => ({
      id: category.id,
      name: category.name_cat,
      slug: category.name_cat.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      description: '', // Description je v category_i18n
      color: category.color,
    })) : [];

    // Transform i18n data
    const i18n: Article['i18n'] = {
      cs: {
        title: '',
        slug: '',
        content: '',
      },
      en: {
        title: '',
        slug: '',
        content: '',
      },
    };

    // Fill i18n data from article_i_18_ns
    article_i_18_ns?.data?.forEach((i18nData: any) => {
      const lang = i18nData.lang;
      (i18n as any)[lang] = {
        title: i18nData.title,
        slug: i18nData.slug,
        excerpt: i18nData.excerpt,
        content: i18nData.content,
        coverImage: i18nData.cover_image?.data ? {
          url: this.getMediaUrl(i18nData.cover_image.data.url) || '',
          alt: i18nData.cover_image.data.alternativeText,
          width: i18nData.cover_image.data.width,
          height: i18nData.cover_image.data.height,
        } : undefined,
        metaTitle: i18nData.meta_title,
        metaDescription: i18nData.meta_description,
        ogTitle: i18nData.og_title,
        ogDescription: i18nData.og_description,
        ogImage: i18nData.og_image?.data ? {
          url: this.getMediaUrl(i18nData.og_image.data.url) || '',
          alt: i18nData.og_image.data.alternativeText,
          width: i18nData.og_image.data.width,
          height: i18nData.og_image.data.height,
        } : undefined,
      };
    });
    
    return {
      id,
      name,
      authors: transformedAuthors,
      categories: transformedCategories,
      i18n,
      publishedAt,
      createdAt,
      updatedAt,
    };
  }

  // Transform Strapi author to our Author type
  private transformAuthor(strapiAuthor: StrapiEntity<StrapiAuthor>): Author {
    const { id, attributes } = strapiAuthor;
    
    return {
      id,
      name: attributes.name,
      email: attributes.email,
      bio: attributes.bio,
      avatar: this.getMediaUrl(attributes.avatar?.attributes.url),
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
    };
  }

  // Transform Strapi category to our Category type
  private transformCategory(strapiCategory: any, locale: string): Category | null {
    const { id, attributes, category_i_18_ns } = strapiCategory;
    
    // Check if we have the required data structure
    if (!id) {
      console.warn(`Category has no id, skipping`);
      return null;
    }
    
    // Find localization for the current locale from the populated data
    const localization = category_i_18_ns?.find((i18n: any) => i18n.lang === locale);
    
    // Fallback to English if current locale not found
    const fallbackLocalization = category_i_18_ns?.find((i18n: any) => i18n.lang === 'en');
    
    const finalLocalization = localization || fallbackLocalization;
    
    if (!finalLocalization) {
      console.warn(`No localization found for category ${id}`);
      return null;
    }
    
    return {
      id,
      name: finalLocalization.name || 'Unnamed Category',
      slug: finalLocalization.slug || 'unnamed-category',
      description: finalLocalization.description || '',
      color: attributes?.color || '#000000',
      createdAt: finalLocalization.createdAt || new Date().toISOString(),
      updatedAt: finalLocalization.updatedAt || new Date().toISOString(),
    };
  }

  // Get all articles with pagination
  async getArticles({
    page = 1,
    pageSize = 10,
    sort = 'publishedAt:desc',
    filters = {},
    populate = ['authors', 'categories', 'article_i_18_ns']
  }: {
    page?: number;
    pageSize?: number;
    sort?: string;
    filters?: Record<string, any>;
    populate?: string[];
  } = {}): Promise<{ articles: Article[]; pagination: any }> {
    const params = new URLSearchParams({
      'pagination[page]': page.toString(),
      'pagination[pageSize]': pageSize.toString(),
      'sort': sort,
    });

    // Add populate parameters
    populate.forEach(field => {
      params.append('populate', field);
    });

    // Add filters
    Object.entries(filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value);
    });

    const response = await this.request<StrapiResponse<StrapiEntity<StrapiArticle>[]>>(
      `/articles?${params.toString()}`
    );

    console.log('Debug - Strapi response:', {
      dataLength: response.data?.length || 0,
      hasData: !!response.data,
      firstArticle: response.data?.[0] ? Object.keys(response.data[0]) : 'no articles'
    });

    return {
      articles: response.data.map(article => this.transformArticle(article)),
      pagination: response.meta.pagination,
    };
  }

  // Get single article by slug
  async getArticleBySlug(slug: string): Promise<Article | null> {
    // Hľadáme článok podľa slug v article_i_18_ns tabuľke
    const params = new URLSearchParams({
      'filters[article_i_18_ns][slug][$eq]': slug,
      'populate': 'authors,categories,article_i_18_ns',
    });

    const response = await this.request<StrapiResponse<StrapiEntity<StrapiArticle>[]>>(
      `/articles?${params.toString()}`
    );

    if (response.data.length === 0) {
      return null;
    }

    return this.transformArticle(response.data[0]);
  }

  // Get article by ID
  async getArticleById(id: number): Promise<Article | null> {
    try {
      const params = new URLSearchParams({
        'populate': 'authors,categories,article_i_18_ns',
      });

      const response = await this.request<StrapiSingleResponse<StrapiEntity<StrapiArticle>>>(
        `/articles/${id}?${params.toString()}`
      );

      return this.transformArticle(response.data);
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }

  // Get all categories with i18n support
  async getCategories(locale: string = 'cs'): Promise<Category[]> {
    try {
      // Fetch categories with their localizations
      const params = new URLSearchParams({
        'populate': 'category_i_18_ns',
        'sort': 'sort_order:asc'
      });
      
      const response = await this.request<any>(
        `/categories?${params.toString()}`
      );

      const filteredCategories = response.data
        .filter((strapiCategory: any) => {
          // Filter out categories without proper structure
          return strapiCategory && strapiCategory.id && strapiCategory.category_i_18_ns;
        });
      
      const transformedCategories = filteredCategories
        .map((category: any) => this.transformCategory(category, locale))
        .filter((category: any): category is Category => category !== null);
      
      return transformedCategories;
    } catch (error) {
      console.error('Error loading categories:', error);
      return [];
    }
  }

  // Get category localizations for specific locale
  async getCategoryI18n(locale: string = 'en'): Promise<CategoryI18n[]> {
    try {
      const params = new URLSearchParams({
        'populate': 'category',
        'filters[locale][$eq]': locale,
        'filters[category][is_active][$eq]': 'true',
        'sort': 'category.sort_order:asc'
      });
      
      const response = await this.request<StrapiResponse<StrapiEntity<StrapiCategoryI18n>[]>>(
        `/category-i18ns?${params.toString()}`
      );

      return response.data.map(item => ({
        id: item.id,
        name: item.attributes.name,
        slug: item.attributes.slug,
        description: item.attributes.description,
        locale: item.attributes.locale,
        seo_title: item.attributes.seo_title,
        seo_description: item.attributes.seo_description,
        meta_keywords: item.attributes.meta_keywords,
        createdAt: item.attributes.createdAt,
        updatedAt: item.attributes.updatedAt,
      }));
    } catch (error) {
      console.error('Error loading category i18n:', error);
      return [];
    }
  }

  // Get all authors
  async getAuthors(): Promise<Author[]> {
    const params = new URLSearchParams({
      'populate': 'avatar',
      'sort': 'name:asc',
    });

    const response = await this.request<StrapiResponse<StrapiEntity<StrapiAuthor>[]>>(
      `/authors?${params.toString()}`
    );

    return response.data.map(author => this.transformAuthor(author));
  }

  // Get articles by category
  async getArticlesByCategory(categorySlug: string, options: {
    page?: number;
    pageSize?: number;
  } = {}): Promise<{ articles: Article[]; pagination: any }> {
    return this.getArticles({
      ...options,
      filters: {
        'category.slug': categorySlug,
      },
    });
  }

  // Get featured articles
  async getFeaturedArticles(limit: number = 5): Promise<Article[]> {
    const { articles } = await this.getArticles({
      pageSize: limit,
      filters: {
        featured: true,
      },
    });

    return articles;
  }

  // Search articles
  async searchArticles(query: string, options: {
    page?: number;
    pageSize?: number;
  } = {}): Promise<{ articles: Article[]; pagination: any }> {
    return this.getArticles({
      ...options,
      filters: {
        '$or': [
          { 'title': { '$containsi': query } },
          { 'content': { '$containsi': query } },
          { 'excerpt': { '$containsi': query } },
        ],
      },
    });
  }
}

// Export singleton instance
export const strapiApi = new StrapiAPI();
export default strapiApi;