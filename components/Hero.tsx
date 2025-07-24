'use client';

import { motion } from 'framer-motion';
import { type Dictionary } from '@/lib/getDictionary';

interface HeroProps {
  dict: Dictionary;
  lang: string;
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animovaný nadpis */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {dict.home.title}
          </motion.h1>

          {/* Animovaný podnadpis */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-600 font-semibold mb-8"
          >
            {dict.home.subtitle}
          </motion.h2>

          {/* Animovaný popis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {dict.home.description}
          </motion.p>

          {/* Animované CTA tlačítko */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {dict.home.cta}
            </button>
          </motion.div>

          {/* Dekorativní elementy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-indigo-500 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">AI</div>
                  <div className="text-gray-600">Automatizace</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600">Podpora</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">∞</div>
                  <div className="text-gray-600">Možnosti</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}