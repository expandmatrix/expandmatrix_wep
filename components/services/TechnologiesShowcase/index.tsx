'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/lib/getDictionary';

interface TechnologiesShowcaseProps {
  dict: any;
  lang: Locale;
}

export default function TechnologiesShowcase({ dict, lang }: TechnologiesShowcaseProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            {dict?.technologies?.title || 'Technologies We Use'}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}