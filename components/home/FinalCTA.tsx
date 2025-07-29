'use client';

import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import CtaCard, { CtaButton } from '@/components/CtaCard';
import { motion } from 'framer-motion';
import type { Locale } from '@/lib/getDictionary';

interface FinalCTAProps {
  dict: any;
  lang: Locale;
}

export default function FinalCTA({ dict, lang }: FinalCTAProps) {
  const buttons: CtaButton[] = [
    {
      key: 'primary',
      element: (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-accent-primary text-bg-primary font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {lang === 'cs' ? 'Začít hned teď' : 'Get Started Now'}
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      ),
    },
    {
      key: 'secondary',
      element: (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-transparent border-2 border-accent-primary/30 text-text-primary font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 overflow-hidden group"
        >
          <motion.div className="absolute inset-0 bg-accent-primary/10 rounded-full" initial={{ scale: 0 }} whileHover={{ scale: 1 }} transition={{ duration: 0.3 }} />
          <span className="relative z-10">{lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}</span>
        </motion.button>
      ),
    },
  ];

  const trust = (
    <>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
        <span>{lang === 'cs' ? 'Bezplatná konzultace' : 'Free consultation'}</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <span>{lang === 'cs' ? 'Bez závazků' : 'No commitment'}</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <span>{lang === 'cs' ? '24/7 podpora' : '24/7 support'}</span>
      </div>
    </>
  );

  return (
    <>
    <CtaCard
      title={
        lang === 'cs' ? (
          <>
            Připraveni{' '}
            <span className="text-accent-primary relative inline-block">
              revolucionalizovat
              <motion.div
                className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            <br />
            váš business?
          </>
        ) : (
          <>
            Ready to{' '}
            <span className="text-accent-primary relative inline-block">
              revolutionize
              <motion.div
                className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            <br />
            your business?
          </>
        )
      }
      description={
        lang === 'cs'
          ? 'Získejte bezplatnou konzultaci a zjistěte, jak AI může transformovat vaše procesy. Náš tým expertů vám ukáže cestu k efektivnější budoucnosti.'
          : 'Get a free consultation and discover how AI can transform your processes. Our team of experts will show you the path to a more efficient future.'
      }
      buttons={buttons}
      icons={{ left: <Sparkles className="w-6 h-6" />, right: <Zap className="w-6 h-6" />, bottom: <Rocket className="w-8 h-8" /> }}
      trustIndicators={trust}
    />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        viewport={{ once: true }}
        className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-center"
      />
    </div>
    </>
  );
}
