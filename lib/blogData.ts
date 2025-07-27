export interface BlogArticle {
  id: string;
  slug: string;
  title: { cs: string; en: string };
  excerpt: { cs: string; en: string };
  content: { cs: string; en: string };
  category: 'news' | 'case-studies' | 'tutorials';
  tags: string[];
  author: string;
  publishedAt: string;
  featuredImage: string;
  readTime: number;
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'ai-automation-trends-2024',
    title: {
      cs: 'Trendy AI automatizace v roce 2024',
      en: 'AI Automation Trends in 2024'
    },
    excerpt: {
      cs: 'Objevte nejnovější trendy v oblasti umělé inteligence a automatizace, které transformují podnikání.',
      en: 'Discover the latest trends in artificial intelligence and automation transforming business.'
    },
    content: {
      cs: 'Podrobný obsah článku o AI trendech...',
      en: 'Detailed article content about AI trends...'
    },
    category: 'news',
    tags: ['AI', 'Automatizace', 'Trendy'],
    author: 'Expand Matrix Team',
    publishedAt: '2024-01-15',
    featuredImage: '/placeholder-blog.jpg', // Use placeholder until real images exist
    readTime: 8
  },
  {
    id: '2',
    slug: 'case-study-manufacturing-automation',
    title: {
      cs: 'Case Study: Automatizace výrobního procesu',
      en: 'Case Study: Manufacturing Process Automation'
    },
    excerpt: {
      cs: 'Jak jsme pomohli výrobní společnosti zvýšit efektivitu o 300% pomocí AI automatizace.',
      en: 'How we helped a manufacturing company increase efficiency by 300% using AI automation.'
    },
    content: {
      cs: 'Detailní case study o automatizaci...',
      en: 'Detailed case study about automation...'
    },
    category: 'case-studies',
    tags: ['Case Study', 'Výroba', 'ROI'],
    author: 'Jan Novák',
    publishedAt: '2024-01-10',
    featuredImage: '/placeholder-blog.jpg', // Use placeholder until real images exist
    readTime: 12
  },
  {
    id: '3',
    slug: 'getting-started-with-ai-chatbots',
    title: {
      cs: 'Začínáme s AI chatboty: Kompletní průvodce',
      en: 'Getting Started with AI Chatbots: Complete Guide'
    },
    excerpt: {
      cs: 'Krok za krokem návod, jak implementovat AI chatbota do vašeho podnikání.',
      en: 'Step-by-step guide on how to implement an AI chatbot in your business.'
    },
    content: {
      cs: 'Kompletní tutorial o chatbotech...',
      en: 'Complete tutorial about chatbots...'
    },
    category: 'tutorials',
    tags: ['Tutorial', 'Chatbot', 'Implementace'],
    author: 'Marie Svobodová',
    publishedAt: '2024-01-08',
    featuredImage: '/placeholder-blog.jpg', // Use placeholder until real images exist
    readTime: 15
  },
  // Add 9 more articles...
  {
    id: '4',
    slug: 'vps-hosting-best-practices',
    title: {
      cs: 'Nejlepší praktiky pro VPS hosting',
      en: 'VPS Hosting Best Practices'
    },
    excerpt: {
      cs: 'Optimalizujte výkon vašeho VPS serveru s našimi osvědčenými postupy.',
      en: 'Optimize your VPS server performance with our proven practices.'
    },
    content: {
      cs: 'Podrobný návod pro VPS optimalizaci...',
      en: 'Detailed guide for VPS optimization...'
    },
    category: 'tutorials',
    tags: ['VPS', 'Hosting', 'Optimalizace'],
    author: 'Tomáš Procházka',
    publishedAt: '2024-01-05',
    featuredImage: '/placeholder-blog.jpg', // Use placeholder until real images exist
    readTime: 10
  }
];

export const blogCategories = {
  cs: {
    'news': 'Novinky',
    'case-studies': 'Case Studies',
    'tutorials': 'Návody'
  },
  en: {
    'news': 'News',
    'case-studies': 'Case Studies',
    'tutorials': 'Tutorials'
  }
};
