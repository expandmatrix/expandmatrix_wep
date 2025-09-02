import {
  StrapiResponse,
  StrapiSingleResponse,
  StrapiEntity,
  StrapiArticle,
  StrapiAuthor,
  StrapiCategory,
  Article,
  Author,
  Category,
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
  private transformArticle(strapiArticle: StrapiEntity<StrapiArticle>): Article {
    const { id, attributes } = strapiArticle;
    
    return {
      id,
      title: attributes.title,
      slug: attributes.slug,
      content: attributes.content,
      excerpt: attributes.excerpt,
      featuredImage: attributes.featured_image?.data ? {
        url: this.getMediaUrl(attributes.featured_image.data.attributes.url) || '',
        alt: attributes.featured_image.data.attributes.alternativeText,
        width: attributes.featured_image.data.attributes.width,
        height: attributes.featured_image.data.attributes.height,
      } : undefined,
      author: attributes.author?.data ? {
        id: attributes.author.data.id,
        name: attributes.author.data.attributes.name,
        email: attributes.author.data.attributes.email,
        bio: attributes.author.data.attributes.bio,
        avatar: this.getMediaUrl(attributes.author.data.attributes.avatar?.attributes.url),
      } : undefined,
      category: attributes.category?.data ? {
        id: attributes.category.data.id,
        name: attributes.category.data.attributes.name,
        slug: attributes.category.data.attributes.slug,
        description: attributes.category.data.attributes.description,
        color: attributes.category.data.attributes.color,
      } : undefined,
      tags: attributes.tags,
      seoTitle: attributes.seo_title,
      seoDescription: attributes.seo_description,
      readingTime: attributes.reading_time,
      featured: attributes.featured,
      publishedAt: attributes.publishedAt,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
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
  private transformCategory(strapiCategory: StrapiEntity<StrapiCategory>): Category {
    const { id, attributes } = strapiCategory;
    
    return {
      id,
      name: attributes.name,
      slug: attributes.slug,
      description: attributes.description,
      color: attributes.color,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
    };
  }

  // Get all articles with pagination
  async getArticles({
    page = 1,
    pageSize = 10,
    sort = 'publishedAt:desc',
    filters = {},
    populate = ['author', 'category', 'featured_image']
  }: {
    page?: number;
    pageSize?: number;
    sort?: string;
    filters?: Record<string, any>;
    populate?: string[];
  } = {}): Promise<{ articles: Article[]; pagination: any }> {
    // Použijeme jednodušší formát jako v testovacím skriptu
    const response = await this.request<any>(
      '/articles'
    );

    // Strapi vrací data v jednoduchém formátu
    const articles = response.data.map((article: any) => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      content: article.content,
      excerpt: article.excerpt,
      publishedAt: article.publishedAt,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      featured_image: article.featured_image,
      author: article.author,
      category: article.category,
    }));

    return {
      articles,
      pagination: response.meta || { page: 1, pageSize: articles.length, total: articles.length },
    };
  }

  // Get single article by slug
  async getArticleBySlug(slug: string): Promise<Article | null> {
    const params = new URLSearchParams({
      'filters[slug][$eq]': slug,
      'populate': 'author,category,featured_image',
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
        'populate': 'author,category,featured_image',
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

  // Get all categories
  async getCategories(locale: string = 'en'): Promise<Category[]> {
    // Určíme endpoint podle jazyka
    const endpoint = locale === 'cs' ? '/kategories?sort=name:asc' : '/categories?sort=name:asc';
    
    const response = await this.request<any>(endpoint);

    // Strapi vrací data v jednoduchém formátu, ne ve vnořené struktuře
    return response.data.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      color: category.color,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    }));
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