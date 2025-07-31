'use client';

import { Sparkles } from 'lucide-react';
import CtaCard from '@/components/ui/CtaCard';
import { motion, useReducedMotion } from 'framer-motion';
import type { Locale } from '@/lib/getDictionary';

interface FinalCTAProps {
  dict: any;
  lang: Locale;
}

export default function FinalCTA({ dict, lang }: FinalCTAProps) {
  const prefersReducedMotion = useReducedMotion();

  const primary = {
    href: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`,
    label: lang === 'cs' ? 'Začít hned teď' : 'Get Started Now'
  };

  const secondary = {
    href: `/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`,
    label: lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'
  };

  const trust = (
    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm">
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
    </div>
  );

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)',
          maskImage: 'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)'
        }}
      >
        {/* Animated Gradient Mesh */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)'
                  ]
                }
          }
          transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)',
            maskImage:
              'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)'
          }}
        />

        {/* Floating Energy Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm pointer-events-none"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -40, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }
            }
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          primary={primary}
          secondary={secondary}
          icon={<Sparkles className="w-16 h-16 text-accent-primary mx-auto" />}
        >
          {trust}
        </CtaCard>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-center"
        />
      </div>
    </section>
  );
}
