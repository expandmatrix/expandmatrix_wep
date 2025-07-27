'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';
import { blogArticles, type BlogArticle } from '@/lib/blogData';
import BlogHero from './BlogHero';
import BlogFilters from './BlogFilters';
import ArticleGrid from './ArticleGrid';
import BlogSidebar from './BlogSidebar';

interface BlogContentProps {
  lang: Locale;
  dict: any;
  initialCategory?: string;
}

export default function BlogContent({ lang, dict, initialCategory = null }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedArticles, setDisplayedArticles] = useState<BlogArticle[]>([]);
  const [articlesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Filter articles based on category and search
  const filteredArticles = useMemo(() => {
    let filtered = blogArticles;

    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(article => article.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title[lang].toLowerCase().includes(query) ||
        article.excerpt[lang].toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, lang]);

  // Update displayed articles when filters change
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedArticles(filteredArticles.slice(0, articlesPerPage));
  }, [filteredArticles, articlesPerPage]);

  // Load more articles
  const loadMoreArticles = () => {
    setLoading(true);
    
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = currentPage * articlesPerPage;
      const endIndex = nextPage * articlesPerPage;
      const newArticles = filteredArticles.slice(startIndex, endIndex);
      
      setDisplayedArticles(prev => [...prev, ...newArticles]);
      setCurrentPage(nextPage);
      setLoading(false);
    }, 800);
  };

  const hasMoreArticles = displayedArticles.length < filteredArticles.length;

  // Get popular tags
  const popularTags = useMemo(() => {
    const tagCounts = blogArticles.reduce((acc, article) => {
      article.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([tag]) => tag);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <BlogHero lang={lang} onSearch={setSearchQuery} />
      <BlogFilters 
        lang={lang} 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {lang === 'cs' ? 'Načítání...' : 'Loading...'}
                    </>
                  ) : (
                    lang === 'cs' ? 'Načíst více článků' : 'Load More Articles'
                  )}
                </motion.button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar 
                lang={lang}
                latestArticles={blogArticles.slice(0, 4)}
                popularTags={popularTags}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
