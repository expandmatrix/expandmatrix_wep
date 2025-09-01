import { strapiApi } from './strapiApi';
import { Article } from './types/strapi';

// Interface pro schvalovací workflow
export interface ArticleApprovalStatus {
  id: number;
  title: string;
  slug: string;
  status: 'draft' | 'pending_review' | 'approved' | 'published' | 'rejected';
  author: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  reviewNotes?: string;
}

export interface ApprovalAction {
  articleId: number;
  action: 'approve' | 'reject' | 'request_changes';
  reviewerId: string;
  notes?: string;
}

class ArticleApprovalService {
  // Získání všech článků čekajících na schválení
  async getPendingArticles(): Promise<ArticleApprovalStatus[]> {
    try {
      // Načteme články, které nejsou publikované (publishedAt je null)
      const { articles } = await strapiApi.getArticles({
        pageSize: 100,
        sort: 'createdAt:desc',
        filters: {
          publishedAt: {
            $null: true
          }
        }
      });

      return articles.map(article => this.transformToApprovalStatus(article));
    } catch (error) {
      console.error('Chyba při načítání článků čekajících na schválení:', error);
      throw error;
    }
  }

  // Získání všech publikovaných článků
  async getPublishedArticles(): Promise<ArticleApprovalStatus[]> {
    try {
      const { articles } = await strapiApi.getArticles({
        pageSize: 100,
        sort: 'publishedAt:desc',
        filters: {
          publishedAt: {
            $notNull: true
          }
        }
      });

      return articles.map(article => this.transformToApprovalStatus(article));
    } catch (error) {
      console.error('Chyba při načítání publikovaných článků:', error);
      throw error;
    }
  }

  // Schválení článku a jeho publikování
  async approveArticle(action: ApprovalAction): Promise<boolean> {
    try {
      const { articleId, action: approvalAction, reviewerId, notes } = action;
      
      if (approvalAction === 'approve') {
        // Publikujeme článek nastavením publishedAt na aktuální čas
        const response = await this.updateArticleStatus(articleId, {
          publishedAt: new Date().toISOString(),
          // V budoucnu můžeme přidat custom pole pro review informace
        });
        
        console.log(`✅ Článek ${articleId} byl schválen a publikován uživatelem ${reviewerId}`);
        if (notes) {
          console.log(`📝 Poznámky: ${notes}`);
        }
        
        return response;
      } else if (approvalAction === 'reject') {
        // Článek zůstává nepublikovaný
        console.log(`❌ Článek ${articleId} byl zamítnut uživatelem ${reviewerId}`);
        if (notes) {
          console.log(`📝 Důvod zamítnutí: ${notes}`);
        }
        
        return true;
      } else if (approvalAction === 'request_changes') {
        console.log(`🔄 Pro článek ${articleId} byly požadovány změny uživatelem ${reviewerId}`);
        if (notes) {
          console.log(`📝 Požadované změny: ${notes}`);
        }
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Chyba při schvalování článku:', error);
      throw error;
    }
  }

  // Zrušení publikace článku
  async unpublishArticle(articleId: number, reviewerId: string, reason?: string): Promise<boolean> {
    try {
      const response = await this.updateArticleStatus(articleId, {
        publishedAt: null, // Zrušíme publikaci
      });
      
      console.log(`📤 Článek ${articleId} byl stažen z publikace uživatelem ${reviewerId}`);
      if (reason) {
        console.log(`📝 Důvod: ${reason}`);
      }
      
      return response;
    } catch (error) {
      console.error('Chyba při rušení publikace článku:', error);
      throw error;
    }
  }

  // Pomocná metoda pro aktualizaci stavu článku
  private async updateArticleStatus(articleId: number, updates: any): Promise<boolean> {
    try {
      const response = await fetch(`${process.env.STRAPI_API_URL}/api/articles/${articleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
        },
        body: JSON.stringify({
          data: updates
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Chyba při aktualizaci článku:', error);
      return false;
    }
  }

  // Transformace článku na approval status
  private transformToApprovalStatus(article: Article): ArticleApprovalStatus {
    return {
      id: article.id,
      title: article.title,
      slug: article.slug,
      status: article.publishedAt ? 'published' : 'pending_review',
      author: article.author?.name || 'Neznámý autor',
      category: article.category?.name || 'Bez kategorie',
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
    };
  }

  // Získání statistik schvalování
  async getApprovalStats(): Promise<{
    pending: number;
    published: number;
    total: number;
  }> {
    try {
      const [pendingArticles, publishedArticles] = await Promise.all([
        this.getPendingArticles(),
        this.getPublishedArticles()
      ]);

      return {
        pending: pendingArticles.length,
        published: publishedArticles.length,
        total: pendingArticles.length + publishedArticles.length
      };
    } catch (error) {
      console.error('Chyba při načítání statistik:', error);
      return { pending: 0, published: 0, total: 0 };
    }
  }

  // Validace článku před schválením
  async validateArticleForApproval(articleId: number): Promise<{
    isValid: boolean;
    issues: string[];
  }> {
    try {
      const article = await strapiApi.getArticleById(articleId);
      
      if (!article) {
        return {
          isValid: false,
          issues: ['Článek nebyl nalezen']
        };
      }

      const issues: string[] = [];

      // Kontrola povinných polí
      if (!article.title || article.title.trim().length === 0) {
        issues.push('Chybí název článku');
      }

      if (!article.content || article.content.trim().length < 100) {
        issues.push('Obsah článku je příliš krátký (minimum 100 znaků)');
      }

      if (!article.excerpt || article.excerpt.trim().length === 0) {
        issues.push('Chybí excerpt článku');
      }

      if (!article.category) {
        issues.push('Článek nemá přiřazenou kategorii');
      }

      if (!article.author) {
        issues.push('Článek nemá přiřazeného autora');
      }

      if (!article.slug || article.slug.trim().length === 0) {
        issues.push('Chybí URL slug článku');
      }

      // Kontrola SEO polí (doporučené)
      if (!article.seoTitle) {
        issues.push('Doporučuje se přidat SEO title');
      }

      if (!article.seoDescription) {
        issues.push('Doporučuje se přidat SEO description');
      }

      return {
        isValid: issues.length === 0,
        issues
      };
    } catch (error) {
      console.error('Chyba při validaci článku:', error);
      return {
        isValid: false,
        issues: ['Chyba při validaci článku']
      };
    }
  }
}

// Export singleton instance
export const articleApprovalService = new ArticleApprovalService();
export default articleApprovalService;