import strapiApi from './strapiApi';
import { Article, Category, Author } from './types/strapi';

// Cache interface
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class CMSArticleService {
  private cache = new Map<string, CacheEntry<any>>();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

  // Cache management
  private setCacheEntry<T>(key: string, data: T, ttl: number = this.DEFAULT_TTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  private getCacheEntry<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > entry.ttl;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  private clearCache(): void {
    this.cache.clear();
  }

  // Article fetching methods
  async getArticles(options: {
    page?: number;
    pageSize?: number;
    category?: string;
    featured?: boolean;
    useCache?: boolean;
  } = {}): Promise<{ articles: Article[]; pagination: any; fromCache: boolean }> {
    const {
      page = 1,
      pageSize = 10,
      category,
      featured,
      useCache = true,
    } = options;

    const cacheKey = `articles_${JSON.stringify({ page, pageSize, category, featured })}`;
    
    if (useCache) {
      const cached = this.getCacheEntry<{ articles: Article[]; pagination: any }>(cacheKey);
      if (cached) {
        return { ...cached, fromCache: true };
      }
    }

    try {
      let result;
      
      if (category) {
        result = await strapiApi.getArticlesByCategory(category, { page, pageSize });
      } else {
        const filters: Record<string, any> = {};
        if (featured !== undefined) {
          filters.featured = featured;
        }
        
        result = await strapiApi.getArticles({
          page,
          pageSize,
          filters,
        });
      }

      if (useCache) {
        this.setCacheEntry(cacheKey, result);
      }

      return { ...result, fromCache: false };
    } catch (error) {
      console.error('Failed to fetch articles from CMS:', error);
      throw new Error('Unable to load articles from CMS');
    }
  }

  async getArticleBySlug(slug: string, useCache: boolean = true): Promise<Article | null> {
    const cacheKey = `article_slug_${slug}`;
    
    if (useCache) {
      const cached = this.getCacheEntry<Article>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const article = await strapiApi.getArticleBySlug(slug);
      
      if (article && useCache) {
        this.setCacheEntry(cacheKey, article);
      }

      return article;
    } catch (error) {
      console.error(`Failed to fetch article with slug '${slug}':`, error);
      return null;
    }
  }

  async getArticleById(id: number, useCache: boolean = true): Promise<Article | null> {
    const cacheKey = `article_id_${id}`;
    
    if (useCache) {
      const cached = this.getCacheEntry<Article>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const article = await strapiApi.getArticleById(id);
      
      if (article && useCache) {
        this.setCacheEntry(cacheKey, article);
      }

      return article;
    } catch (error) {
      console.error(`Failed to fetch article with ID '${id}':`, error);
      return null;
    }
  }

  async getFeaturedArticles(limit: number = 5, useCache: boolean = true): Promise<Article[]> {
    const cacheKey = `featured_articles_${limit}`;
    
    if (useCache) {
      const cached = this.getCacheEntry<Article[]>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const articles = await strapiApi.getFeaturedArticles(limit);
      
      if (useCache) {
        this.setCacheEntry(cacheKey, articles);
      }

      return articles;
    } catch (error) {
      console.error('Failed to fetch featured articles:', error);
      return [];
    }
  }

  async getCategories(useCache: boolean = true): Promise<Category[]> {
    const cacheKey = 'categories';
    
    if (useCache) {
      const cached = this.getCacheEntry<Category[]>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const categories = await strapiApi.getCategories();
      
      if (useCache) {
        this.setCacheEntry(cacheKey, categories, 15 * 60 * 1000); // 15 minutes TTL
      }

      return categories;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return [];
    }
  }

  async getAuthors(useCache: boolean = true): Promise<Author[]> {
    const cacheKey = 'authors';
    
    if (useCache) {
      const cached = this.getCacheEntry<Author[]>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const authors = await strapiApi.getAuthors();
      
      if (useCache) {
        this.setCacheEntry(cacheKey, authors, 15 * 60 * 1000); // 15 minutes TTL
      }

      return authors;
    } catch (error) {
      console.error('Failed to fetch authors:', error);
      return [];
    }
  }

  async searchArticles(
    query: string,
    options: {
      page?: number;
      pageSize?: number;
      useCache?: boolean;
    } = {}
  ): Promise<{ articles: Article[]; pagination: any; fromCache: boolean }> {
    const { page = 1, pageSize = 10, useCache = true } = options;
    const cacheKey = `search_${query}_${page}_${pageSize}`;
    
    if (useCache) {
      const cached = this.getCacheEntry<{ articles: Article[]; pagination: any }>(cacheKey);
      if (cached) {
        return { ...cached, fromCache: true };
      }
    }

    try {
      const result = await strapiApi.searchArticles(query, { page, pageSize });
      
      if (useCache) {
        this.setCacheEntry(cacheKey, result, 2 * 60 * 1000); // 2 minutes TTL for search
      }

      return { ...result, fromCache: false };
    } catch (error) {
      console.error(`Failed to search articles with query '${query}':`, error);
      throw new Error('Unable to search articles');
    }
  }

  // Utility methods
  async refreshCache(): Promise<void> {
    this.clearCache();
    
    // Pre-load commonly used data
    try {
      await Promise.all([
        this.getCategories(false),
        this.getAuthors(false),
        this.getFeaturedArticles(5, false),
        this.getArticles({ page: 1, pageSize: 10, useCache: false }),
      ]);
      
      console.log('Cache refreshed successfully');
    } catch (error) {
      console.error('Failed to refresh cache:', error);
    }
  }

  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }

  // Health check
  async healthCheck(): Promise<{ status: 'healthy' | 'unhealthy'; message: string }> {
    try {
      await strapiApi.getArticles({ pageSize: 1 });
      return {
        status: 'healthy',
        message: 'CMS connection is working properly',
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `CMS connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  }
}

// Export singleton instance
export const cmsArticleService = new CMSArticleService();
export default cmsArticleService;
