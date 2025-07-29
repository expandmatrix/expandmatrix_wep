'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import type { Locale } from '@/lib/getDictionary';

interface PortfolioCTAProps {
  dict: any;
  lang: Locale;
}

export default function PortfolioCTA({ dict, lang }: PortfolioCTAProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  // Predefined positions to avoid hydration mismatch
  const orbPositions = [
    { left: '15%', top: '20%' },
    { left: '27%', top: '28%' },
    { left: '39%', top: '36%' },
    { left: '51%', top: '44%' },
    { left: '63%', top: '52%' },
    { left: '75%', top: '60%' },
    { left: '87%', top: '68%' },
    { left: '23%', top: '76%' },
  ];

  if (!isMounted) {
    return (
      <section className="py-32 bg-bg-primary relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden">
            <div className="relative z-10 p-12 text-center">
              <div className="mb-8">
                <Sparkles className="w-16 h-16 text-accent-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
                {lang === 'cs' ? 'Připraveni realizovat váš projekt?' : 'Ready to bring your project to life?'}
              </h2>
              <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                {lang === 'cs'
                  ? 'Inspirovali vás naše úspěšné projekty? Pojďme společně vytvořit další příběh úspěchu pro vaši společnost.'
                  : 'Inspired by our successful projects? Let\'s create another success story for your company together.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`}
                  className="btn-cta-large group inline-flex items-center"
                >
                  <span>{lang === 'cs' ? 'Začněte svůj projekt' : 'Start Your Project'}</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
                  className="btn-cta-secondary inline-flex items-center"
                >
                  {lang === 'cs' ? 'Prohlédnout služby' : 'View Services'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Advanced Background System */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)',
          maskImage: 'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)'
        }}
      >
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-accent-primary/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-radial from-accent-primary/10 to-transparent rounded-full blur-3xl animate-pulse animate-delay-1000 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Floating Energy Orbs */}
        {orbPositions.map((position, i) => (
          <motion.div
            key={`cta-orb-${i}`}
            className="absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm pointer-events-none"
            style={{
              left: position.left,
              top: position.top,
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
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-20 text-accent-primary/30 hidden lg:block"
        aria-hidden="true"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-32 text-accent-primary/20 hidden lg:block"
        aria-hidden="true"
      >
        <Target className="w-10 h-10" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-20 text-accent-primary/20 hidden lg:block"
        aria-hidden="true"
      >
        <Zap className="w-9 h-9" />
      </motion.div>

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
          <motion.div
            className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
            style={{
              rotateX,
              rotateY,
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{
              scale: 1.01,
              borderColor: 'rgba(0, 255, 127, 0.4)',
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated Background Layers */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Primary Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl pointer-events-none overflow-hidden"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
                  maskImage:
                    'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)'
                }}
                animate={{
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Animated Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl pointer-events-none overflow-hidden"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
                  maskImage:
                    'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)'
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Sparkles className="w-16 h-16 text-accent-primary mx-auto" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-text-primary mb-6"
              >
                {dict.portfolio?.cta?.title || (lang === 'cs'
                  ? (<>Připraveni realizovat <span className="text-accent-primary">váš projekt</span>?</>)
                  : (<>Ready to bring your <span className="text-accent-primary">project</span> to life?</>)
                )}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                {dict.portfolio?.cta?.description || (lang === 'cs'
                  ? 'Inspirovali vás naše úspěšné projekty? Pojďme společně vytvořit další příběh úspěchu pro vaši společnost.'
                  : 'Inspired by our successful projects? Let\'s create another success story for your company together.'
                )}
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
                  <span>{lang === 'cs' ? 'Začněte svůj projekt' : 'Start Your Project'}</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
                  className="btn-cta-secondary inline-flex items-center"
                >
                  {lang === 'cs' ? 'Prohlédnout služby' : 'View Services'}
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                  <span>{lang === 'cs' ? 'Bezplatná konzultace' : 'Free consultation'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse animate-delay-500" />
                  <span>{lang === 'cs' ? 'Rychlá implementace' : 'Fast implementation'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse animate-delay-1000" />
                  <span>{lang === 'cs' ? 'Garantovaný ROI' : 'Guaranteed ROI'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
