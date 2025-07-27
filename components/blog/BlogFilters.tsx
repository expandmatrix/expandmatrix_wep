'use client';

import { motion } from 'framer-motion';
import { Newspaper, FileText, BookOpen } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';
import { blogCategories } from '@/lib/blogData';

interface BlogFiltersProps {
  lang: Locale;
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categoryIcons = {
  'news': Newspaper,
  'case-studies': FileText,
  'tutorials': BookOpen
};

export default function BlogFilters({ lang, activeCategory, onCategoryChange }: BlogFiltersProps) {
  const categories = Object.keys(blogCategories[lang]) as Array<keyof typeof blogCategories[typeof lang]>;

  return (
    <section className="py-8 border-b border-accent-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {/* All Articles Filter */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(null)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-accent-primary text-bg-primary shadow-lg shadow-accent-primary/30'
                  : 'bg-bg-secondary/60 text-text-secondary border border-accent-primary/20 hover:border-accent-primary/40 hover:text-accent-primary'
              }`}
            >
              <span>
                {lang === 'cs' ? 'Všechny články' : 'All Articles'}
              </span>
            </motion.button>

            {/* Category Filters */}
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;
              
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCategoryChange(category)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-primary text-bg-primary shadow-lg shadow-accent-primary/30'
                      : 'bg-bg-secondary/60 text-text-secondary border border-accent-primary/20 hover:border-accent-primary/40 hover:text-accent-primary'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span>{blogCategories[lang][category]}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}