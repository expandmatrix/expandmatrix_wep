'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';
import { BlogCategory, BlogArticle } from '@/lib/blogApi';
import BlogHero from './BlogHero';
import BlogFilters from './BlogFilters';
import ArticleGrid from './ArticleGrid';
import BlogSidebar from './BlogSidebar';

interface BlogContentProps {
  lang: Locale;
  dict: any;
  initialCategory?: BlogCategory | null;
  articles: BlogArticle[];
  categories: BlogCategory[];
}

export default function BlogContent({ 
  lang, 
  dict, 
  initialCategory = null, 
  articles,
  categories
}: BlogContentProps) {
  const [displayedArticles, setDisplayedArticles] = useState<BlogArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [articlesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Filter articles based on search
  const filteredArticles = useMemo(() => {
    if (!searchQuery) return articles;
    
    const query = searchQuery.toLowerCase();
    return articles.filter(article => 
      article.title[lang].toLowerCase().includes(query) ||
      article.excerpt[lang].toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [articles, searchQuery, lang]);

  // Update displayed articles when filters change
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedArticles(filteredArticles.slice(0, articlesPerPage));
  }, [filteredArticles, articlesPerPage]);

  // Load more articles
  const loadMoreArticles = () => {
    const nextPage = currentPage + 1;
    const startIndex = currentPage * articlesPerPage;
    const endIndex = nextPage * articlesPerPage;
    const newArticles = filteredArticles.slice(startIndex, endIndex);
    
    setDisplayedArticles(prev => [...prev, ...newArticles]);
    setCurrentPage(nextPage);
  };

  const hasMoreArticles = displayedArticles.length < filteredArticles.length;

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="pb-12">
        <BlogHero lang={lang} onSearch={setSearchQuery} />
      </div>
      <div className="pb-12">
        <BlogFilters
          lang={lang}
          activeCategory={initialCategory}
          categories={categories}
        />
      </div>

      <div className="container py-16">
        {/* Zobrazení aktuální kategorie */}
        {initialCategory && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary">
              {initialCategory.name[lang]}
            </h2>
            <p className="text-text-secondary mt-2">
              {initialCategory.description[lang]}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ArticleGrid 
              articles={displayedArticles} 
              lang={lang}
              loading={false}
            />

            {/* Load More Button */}
            {hasMoreArticles && (
              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={loadMoreArticles}
                  disabled={loading}
                  className="inline-flex items-center px-8 py-4 bg-accent-primary text-bg-primary font-bold rounded-full transition-all duration-300 hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {lang === 'cs' ? 'Načíst více článků' : 'Load More Articles'}
                </motion.button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar 
                lang={lang}
                latestArticles={articles.slice(0, 4)}
                popularTags={[]} // TODO: Implement popular tags
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
