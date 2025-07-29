'use client';

import { motion, useReducedMotion } from 'framer-motion';
import CtaCard from '@/components/ui/CtaCard';
import { MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSFinalCTAProps {
  lang: Locale;
}

export default function VPSFinalCTA({ lang }: VPSFinalCTAProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)',
          maskImage: 'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)'
        }}
      >
        {/* Gradient Orbs */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  background: [
                    'radial-gradient(circle at 20% 80%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,255,127,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(0,255,127,0.1) 0%, transparent 50%)',
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/30 rounded-full blur-sm pointer-events-none"
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${30 + (i * 10) % 40}%`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.3, 1],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }
            }
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaCard
          icon={<MessageCircle className="w-16 h-16 text-accent-primary mx-auto" />}
          title={
            lang === 'cs' ? 'Nevíte si rady? Poradíme vám' : "Need help choosing? We'll help you"
          }
          description={
            lang === 'cs'
              ? 'Naši VPS experti vám pomohou vybrat nejlepší server pro vaše potřeby. Váš VPS bude připraven během 15 minut.'
              : 'Our VPS experts will help you choose the best server for your needs. Your VPS will be ready within 15 minutes.'
          }
          primary={{
            href: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`,
            label: lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us',
          }}
          secondary={{
            href: `/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`,
            label: lang === 'cs' ? 'Všechny služby' : 'All Services',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              <span>{lang === 'cs' ? 'Připraven za 15 minut' : 'Ready in 15 minutes'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>{lang === 'cs' ? 'České servery' : 'Czech servers'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>{lang === 'cs' ? '24/7 podpora' : '24/7 support'}</span>
            </div>
          </motion.div>
        </CtaCard>
      </div>
    </section>
  );
}
