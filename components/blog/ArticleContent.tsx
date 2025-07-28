'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Locale } from '@/lib/getDictionary';
import type { BlogArticle } from '@/lib/blogApi';

interface ArticleContentProps {
  article: BlogArticle;
  lang: Locale;
}

export default function ArticleContent({ article, lang }: ArticleContentProps) {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-bg-primary min-h-screen">
      <header className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={article.title[lang]}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-12">
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-2">
            {article.title[lang]}
          </h1>
          <p className="text-text-secondary text-sm">
            {formatDate(article.publishedAt)} • {article.readTime} min • {article.author}
          </p>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6"
      >
        {article.content[lang].split('\n').map((paragraph, idx) => (
          <p key={idx} className="text-text-secondary leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </article>
  );
}
