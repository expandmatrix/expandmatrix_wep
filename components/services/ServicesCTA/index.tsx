'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface ServicesCTAProps {
  dict: any;
  lang: Locale;
}

export default function ServicesCTA({ dict, lang }: ServicesCTAProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center liquid-glass-card p-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            {dict?.cta?.title || 'Ready to Transform Your Business?'}
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            {dict?.cta?.subtitle || 'Get started with our AI solutions today'}
          </p>
          
          <Link
            href={`/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-bg-primary font-semibold rounded-lg hover:bg-accent-primary/90 transition-all duration-300 group"
          >
            {dict?.cta?.button || 'Contact Us'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}