'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';
import type { BlogArticle } from '@/lib/blogApi';
import { blogCategories } from '@/lib/blogData';

interface ArticleCardProps {
  article: BlogArticle;
  lang: Locale;
  index: number;
}

export default function ArticleCard({ article, lang, index }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Link href={`/${lang}/blog/${article.slug}`}>
        <motion.div
          whileHover={{ 
            scale: 1.02,
            y: -4,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative bg-bg-secondary border border-accent-primary/20 rounded-3xl overflow-hidden h-full transition-all duration-300 hover:border-accent-primary/40 hover:shadow-2xl hover:shadow-accent-primary/10"
        >
          {/* Featured Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={article.featuredImage}
              alt={article.title[lang]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-accent-primary/90 text-bg-primary text-xs font-bold rounded-full backdrop-blur-sm">
                {blogCategories[lang][article.category]}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-xl font-bold text-text-primary mb-3 line-clamp-2 group-hover:text-accent-primary transition-colors duration-300">
              {article.title[lang]}
            </h3>

            {/* Excerpt */}
            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
              {article.excerpt[lang]}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-bg-tertiary/50 text-text-secondary text-xs rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta Information */}
            <div className="flex items-center justify-between text-xs text-text-secondary pt-4 border-t border-accent-primary/10">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime} min</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{article.author}</span>
              </div>
            </div>

            {/* Read More */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-accent-primary font-semibold text-sm group-hover:text-accent-primary/80 transition-colors duration-300">
                {lang === 'cs' ? 'Číst více' : 'Read More'}
              </span>
              <ArrowRight className="w-5 h-5 text-accent-primary group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}