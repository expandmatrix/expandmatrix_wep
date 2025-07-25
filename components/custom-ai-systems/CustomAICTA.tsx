'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface CustomAICTAProps {
  dict: any;
  lang: Locale;
}

export default function CustomAICTA({ dict, lang }: CustomAICTAProps) {
  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                Připraveni{' '}
                <span className="text-accent-primary">začít</span>?
              </>
            ) : (
              <>
                Ready to{' '}
                <span className="text-accent-primary">start</span>?
              </>
            )}
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            {lang === 'cs'
              ? 'Pojďme společně vytvořit AI systém, který posune vaše podnikání na další úroveň. Začněte s bezplatnou konzultací.'
              : 'Let\'s create an AI system together that will take your business to the next level. Start with a free consultation.'
            }
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href={`/${lang}/contact`}
              className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] relative overflow-hidden"
            >
              <MessageCircle className="w-6 h-6 mr-3 relative z-10" />
              <span className="relative z-10">
                {lang === 'cs' ? 'Začít konzultaci' : 'Start Consultation'}
              </span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Link>

            <Link
              href={`/${lang}/contact`}
              className="group inline-flex items-center px-10 py-5 border border-accent-primary/30 text-accent-primary font-bold text-lg rounded-full hover:bg-accent-primary/10 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mr-3" />
              {lang === 'cs' ? 'Naplánovat schůzku' : 'Schedule Meeting'}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl">
              <div className="text-3xl font-black text-accent-primary mb-2">24h</div>
              <div className="text-text-secondary">
                {lang === 'cs' ? 'Odpověď na dotaz' : 'Response time'}
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl">
              <div className="text-3xl font-black text-accent-primary mb-2">
                {lang === 'cs' ? 'Zdarma' : 'Free'}
              </div>
              <div className="text-text-secondary">
                {lang === 'cs' ? 'První konzultace' : 'Initial consultation'}
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl">
              <div className="text-3xl font-black text-accent-primary mb-2">100%</div>
              <div className="text-text-secondary">
                {lang === 'cs' ? 'Individuální přístup' : 'Custom approach'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}