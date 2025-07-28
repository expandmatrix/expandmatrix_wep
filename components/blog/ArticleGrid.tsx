'use client';

import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import type { Locale } from '@/lib/getDictionary';
import type { BlogArticle } from '@/lib/blogApi';

interface ArticleGridProps {
  articles: BlogArticle[];
  lang: Locale;
  loading?: boolean;
}

export default function ArticleGrid({ articles, lang, loading = false }: ArticleGridProps) {
  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-96 bg-bg-secondary/50 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {lang === 'cs' ? 'Žádné články nenalezeny' : 'No articles found'}
            </h3>
            <p className="text-text-secondary">
              {lang === 'cs' 
                ? 'Zkuste změnit filtry nebo hledaný výraz'
                : 'Try changing your filters or search term'
              }
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              lang={lang}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}