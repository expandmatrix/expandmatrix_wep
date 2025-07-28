'use client';

import { motion } from 'framer-motion';
import { Newspaper, FileText, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';
import { type BlogCategory } from '@/lib/blogApi';

interface BlogFiltersProps {
  lang: Locale;
  activeCategory?: BlogCategory | null;
  categories: BlogCategory[]; // Přidáno - kategorie se předají jako prop
}

export default function BlogFilters({ lang, activeCategory = null, categories }: BlogFiltersProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'newspaper': return Newspaper;
      case 'file-text': return FileText;
      case 'book-open': return BookOpen;
      default: return FileText;
    }
  };

  return (
    <section className="py-8 border-b border-accent-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {/* All Articles */}
            <Link href={`/${lang}/blog`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                  !activeCategory
                    ? 'bg-accent-primary text-bg-primary shadow-lg shadow-accent-primary/30'
                    : 'bg-bg-secondary/60 text-text-secondary border border-accent-primary/20 hover:border-accent-primary/40 hover:text-accent-primary'
                }`}
              >
                <span>
                  {lang === 'cs' ? 'Všechny články' : 'All Articles'}
                </span>
              </motion.div>
            </Link>

            {/* Dynamic Categories */}
            {categories
              .filter(cat => cat.isActive)
              .sort((a, b) => a.order - b.order)
              .map((category) => {
                const Icon = getIcon(category.icon || 'file-text');
                const isActive = activeCategory?.id === category.id;
                
                return (
                  <Link key={category.id} href={`/${lang}/blog/category/${category.slug}`}> 
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-accent-primary text-bg-primary shadow-lg shadow-accent-primary/30'
                          : 'bg-bg-secondary/60 text-text-secondary border border-accent-primary/20 hover:border-accent-primary/40 hover:text-accent-primary'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      <span>{category.name[lang]}</span>
                    </motion.div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
