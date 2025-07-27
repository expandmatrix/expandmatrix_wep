'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/lib/getDictionary';

interface ServicesGridProps {
  dict: any;
  lang: Locale;
}

export default function ServicesGrid({ dict, lang }: ServicesGridProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            {dict?.grid?.title || 'Our Services'}
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service cards would go here */}
        </div>
      </div>
    </section>
  );
}