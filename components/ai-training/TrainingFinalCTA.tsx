'use client';

import { motion, useReducedMotion } from 'framer-motion';
import CtaCard from '@/components/ui/CtaCard';
import { Sparkles } from 'lucide-react';

interface TrainingFinalCTAProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function TrainingFinalCTA({ dict, lang }: TrainingFinalCTAProps) {
  const prefersReducedMotion = useReducedMotion();

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
          transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          icon={<Sparkles className="w-16 h-16 text-accent-primary mx-auto" />}
          title={
            lang === 'cs' ? 'Připraveni na AI revoluci?' : 'Ready for the AI Revolution?'
          }
          description={
            lang === 'cs'
              ? 'Začněte svou AI cestu ještě dnes. Naši experti vám pomohou transformovat váš tým a dosáhnout nevídaných výsledků.'
              : 'Start your AI journey today. Our experts will help you transform your team and achieve unprecedented results.'
          }
          primary={{
            href: `/${lang}/kontakt`,
            label: lang === 'cs' ? 'Začít školení' : 'Start Training',
          }}
          secondary={{
            href: `/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`,
            label: lang === 'cs' ? 'Všechny služby' : 'All Services',
          }}
        />
      </div>
    </section>
  );
}
