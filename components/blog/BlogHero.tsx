'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface BlogHeroProps {
  lang: Locale;
  onSearch: (query: string) => void;
}

export default function BlogHero({ lang, onSearch }: BlogHeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const suggestions = lang === 'cs' 
    ? ['AI automatizace', 'Chatboty', 'VPS hosting', 'Case studies']
    : ['AI automation', 'Chatbots', 'VPS hosting', 'Case studies'];

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles - pouze na klientu */}
        {isClient && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 2xl:px-12 3xl:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-accent-primary mr-3" />
            <h1 className="text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-text-primary">
              {lang === 'cs' ? 'Blog' : 'Blog'}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {lang === 'cs' 
              ? 'Objevte nejnovější trendy v AI, automatizaci a technologiích. Praktické návody a case studies.'
              : 'Discover the latest trends in AI, automation, and technology. Practical guides and case studies.'
            }
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'cs' ? 'Hledat články...' : 'Search articles...'}
                className="w-full pl-12 pr-4 py-4 bg-bg-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </form>

          {/* Search Suggestions */}
          <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSearch(suggestion)}
                className="px-4 py-2 bg-bg-secondary hover:bg-accent-primary/10 border border-border-primary hover:border-accent-primary rounded-full text-sm text-text-secondary hover:text-accent-primary transition-all duration-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
