export interface BlogCategory {
  id: string;
  slug: string;
  name: { cs: string; en: string };
  description: { cs: string; en: string };
  icon?: string;
  order: number;
  isActive: boolean;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: { cs: string; en: string };
  excerpt: { cs: string; en: string };
  content: { cs: string; en: string };
  categoryId: string; // Změna z category na categoryId
  tags: string[];
  author: string;
  publishedAt: string;
  featuredImage: string;
  readTime: number;
}

// API funkce pro kategorie
export async function getBlogCategories(): Promise<BlogCategory[]> {
  // TODO: Nahradit databázovým dotazem
  return [
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
      slug: 'tutorials',
      name: { cs: 'Návody', en: 'Tutorials' },
      description: { cs: 'Praktické návody krok za krokem', en: 'Step-by-step practical guides' },
      icon: 'book-open',
      order: 3,
      isActive: true
    }
  ];
}

// API funkce pro články
export async function getBlogArticles(categorySlug?: string): Promise<BlogArticle[]> {
  // TODO: Nahradit databázovým dotazem
  const allArticles = []; // Vaše články z databáze
  
  if (categorySlug) {
    const categories = await getBlogCategories();
    const category = categories.find(cat => cat.slug === categorySlug);
    if (!category) return [];
    
    return allArticles.filter(article => article.categoryId === category.id);
  }
  
  return allArticles;
}

export async function getCategoryBySlug(slug: string): Promise<BlogCategory | null> {
  const categories = await getBlogCategories();
  return categories.find(cat => cat.slug === slug) || null;
}