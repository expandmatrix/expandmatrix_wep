'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Target } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface ServicesHeroProps {
  dict: any;
  lang: Locale;
}

export default function ServicesHero({ dict, lang }: ServicesHeroProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-green-400/5" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            {dict?.hero?.title || 'AI Services for Your Business'}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {dict?.hero?.subtitle || 'Transform your business with cutting-edge AI solutions'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}