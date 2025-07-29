'use client';

import { motion } from 'framer-motion';
import CtaCard from '@/components/ui/CtaCard';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Target, MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AIPackagesCTAProps {
  dict: any;
  lang: Locale;
}

export default function AIPackagesCTA({ dict, lang }: AIPackagesCTAProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const rotateX = isHovered ? (mousePosition.y - 200) * 0.01 : 0;
  const rotateY = isHovered ? (mousePosition.x - 300) * 0.01 : 0;

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
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
          style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        >
          {/* Main CTA Container with 3D Effect */}
          <CtaCard rotateX={rotateX} rotateY={rotateY} isHovered={isHovered}>
            <div className="relative z-10 p-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <MessageCircle className="w-16 h-16 text-accent-primary mx-auto" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-text-primary mb-6"
              >
                {lang === 'cs' 
                  ? 'Potřebujete poradit?' 
                  : 'Need help choosing?'
                }
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                {lang === 'cs'
                  ? 'Naši AI experti vám pomohou vybrat nejlepší balíček pro vaši firmu. Konzultace je zdarma a nezávazná.'
                  : 'Our AI experts will help you choose the best package for your business. Consultation is free and non-binding.'
                }
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`}
                  className="btn-cta-large group inline-flex items-center"
                >
                  <span>{lang === 'cs' ? 'Bezplatná konzultace' : 'Free Consultation'}</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
                  className="btn-cta-secondary inline-flex items-center"
                >
                  {lang === 'cs' ? 'Všechny služby' : 'All Services'}
                </Link>
              </motion.div>
            </div>
          </CtaCard>
        </motion.div>
      </div>
    </section>
  );
}
