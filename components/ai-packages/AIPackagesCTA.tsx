'use client';

import { motion } from 'framer-motion';
import CtaCard from '@/components/ui/CtaCard';
import { MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AIPackagesCTAProps {
  dict: any;
  lang: Locale;
}

export default function AIPackagesCTA({ dict, lang }: AIPackagesCTAProps) {

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
          className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)',
            maskImage:
              'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)'
          }}
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaCard
          icon={<MessageCircle className="w-16 h-16 text-accent-primary mx-auto" />}
          title={
            lang === 'cs' ? 'Potřebujete poradit?' : 'Need help choosing?'
          }
          description={
            lang === 'cs'
              ? 'Naši AI experti vám pomohou vybrat nejlepší balíček pro vaši firmu. Konzultace je zdarma a nezávazná.'
              : 'Our AI experts will help you choose the best package for your business. Consultation is free and non-binding.'
          }
          primary={{
            href: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`,
            label: lang === 'cs' ? 'Bezplatná konzultace' : 'Free Consultation',
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
