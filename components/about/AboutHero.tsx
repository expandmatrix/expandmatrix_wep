'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AboutHeroProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutHero({ dict, lang }: AboutHeroProps) {
  return (
    <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-accent-primary mr-2" />
            <span className="text-accent-primary font-medium">
              {lang === 'cs' ? 'O naší AI agentuře' : 'About Our AI Agency'}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-6 leading-tight">
            <span className="block">
              {lang === 'cs' ? 'Transformujeme' : 'Transforming'}
            </span>
            <span className="block bg-gradient-to-r from-accent-primary to-accent-dark bg-clip-text text-transparent">
              {lang === 'cs' ? 'Budoucnost' : 'The Future'}
            </span>
            <span className="block">
              {lang === 'cs' ? 'S AI' : 'With AI'}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {lang === 'cs' 
              ? 'Jsme tým AI expertů, kteří pomáhají firmám automatizovat procesy, snižovat náklady a dosahovat lepších výsledků pomocí umělé inteligence.'
              : 'We are a team of AI experts who help companies automate processes, reduce costs, and achieve better results using artificial intelligence.'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}