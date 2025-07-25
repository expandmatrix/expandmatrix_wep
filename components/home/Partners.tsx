'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Locale } from '@/lib/getDictionary';

interface PartnersProps {
  dict: any;
  lang: Locale;
}

const partners = [
  { name: 'Salesforce', logo: '/logos/salesforce.svg' },
  { name: 'OpenAI', logo: '/logos/openai.svg' },
  { name: 'Nvidia', logo: '/logos/nvidia.svg' },
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'Amazon', logo: '/logos/amazon.svg' },
];

export default function Partners({ dict, lang }: PartnersProps) {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {lang === 'cs' 
              ? 'Spolupracujeme s předními společnostmi' 
              : 'We partner with industry-leading companies'
            }
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0.4, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ 
                scale: 1.05,
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 127, 0.5))'
              }}
              className="flex items-center justify-center p-6 rounded-lg bg-bg-primary/50 backdrop-blur-sm border border-border-color/30 hover:border-accent-primary/50 transition-all duration-300"
            >
              <div className="w-24 h-12 relative opacity-70 hover:opacity-100 transition-opacity duration-300">
                {/* Placeholder pro loga - nahraďte skutečnými SVG */}
                <div className="w-full h-full bg-text-secondary/30 rounded flex items-center justify-center text-xs text-text-secondary font-medium">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
