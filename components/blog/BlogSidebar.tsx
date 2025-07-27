'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Mail, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';
import type { BlogArticle } from '@/lib/blogData';

interface BlogSidebarProps {
  lang: Locale;
  latestArticles: BlogArticle[];
  popularTags: string[];
}

export default function BlogSidebar({ lang, latestArticles, popularTags }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Latest Articles */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-bg-secondary/60 backdrop-blur-sm border border-accent-primary/20 rounded-3xl p-6"
      >
        <div className="flex items-center mb-6">
          <TrendingUp className="w-6 h-6 text-accent-primary mr-3" />
          <h3 className="text-xl font-bold text-text-primary">
            {lang === 'cs' ? 'Nejnovější články' : 'Latest Articles'}
          </h3>
        </div>

        <div className="space-y-4">
          {latestArticles.slice(0, 4).map((article) => (
            <Link key={article.id} href={`/${lang}/blog/${article.slug}`}>
              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-bg-tertiary/30 transition-colors duration-300 group">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={article.featuredImage}
                    alt={article.title[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-semibold text-text-primary line-clamp-2 group-hover:text-accent-primary transition-colors duration-300">
                    {article.title[lang]}
                  </h4>
                  <p className="text-xs text-text-secondary mt-1">
                    {new Date(article.publishedAt).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Popular Tags */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-bg-secondary/60 backdrop-blur-sm border border-accent-primary/20 rounded-3xl p-6"
      >
        <div className="flex items-center mb-6">
          <Tag className="w-6 h-6 text-accent-primary mr-3" />
          <h3 className="text-xl font-bold text-text-primary">
            {lang === 'cs' ? 'Populární tagy' : 'Popular Tags'}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-2 bg-bg-tertiary/50 text-text-secondary text-sm rounded-lg hover:bg-accent-primary/20 hover:text-accent-primary transition-all duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 backdrop-blur-sm border border-accent-primary/30 rounded-3xl p-6"
      >
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 text-accent-primary mr-3" />
          <h3 className="text-xl font-bold text-text-primary">
            {lang === 'cs' ? 'Newsletter' : 'Newsletter'}
          </h3>
        </div>

        <p className="text-text-secondary text-sm mb-6">
          {lang === 'cs' 
            ? 'Získejte nejnovější články přímo do vaší e-mailové schránky'
            : 'Get the latest articles delivered directly to your inbox'
          }
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder={lang === 'cs' ? 'Váš e-mail' : 'Your email'}
            className="w-full px-4 py-3 bg-bg-secondary/80 border border-accent-primary/20 rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary/60 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-accent-primary text-bg-primary font-bold py-3 rounded-xl transition-all duration-300 hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-primary/30"
          >
            {lang === 'cs' ? 'Přihlásit se' : 'Subscribe'}
          </motion.button>
        </form>
      </motion.div>
    </aside>
  );
}