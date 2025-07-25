'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Code, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/getDictionary';

interface HeroProps {
  dict: any;
  lang: Locale;
}

export default function Hero({ dict, lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const parallaxX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-20, 20]);
  const glowX = useTransform(mouseX, [-1, 1], [200, 800]);
  const glowY = useTransform(mouseY, [-1, 1], [200, 600]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const content = {
    cs: {
      badge: 'AI Řešení Budoucnosti',
      title: 'Automatizujeme až 80% Vašich Procesů',
      subtitle: 'Transformujeme vaše podnikání pomocí pokročilých AI technologií. Specializujeme se na custom AI systémy, chatboty a automatizaci workflow. Zvyšte efektivitu, snižte náklady a získejte konkurenční výhodu.',
      primaryCTA: 'Začít s AI automatizací',
      secondaryCTA: 'Zjistit více o službách',
      stats: {
        projects: { number: '50+', label: 'Automatizovaných procesů' },
        clients: { number: '30+', label: 'Spokojených klientů' },
        automation: { number: '80%', label: 'Úspora času' }
      }
    },
    en: {
      badge: 'AI Solutions of the Future',
      title: 'We Automate Up to 80% of Your Processes',
      subtitle: 'Transform your business with advanced AI technologies. We specialize in custom AI systems, chatbots, and workflow automation. Increase efficiency, reduce costs, and gain competitive advantage.',
      primaryCTA: 'Start AI Automation',
      secondaryCTA: 'Learn About Services',
      stats: {
        projects: { number: '50+', label: 'Automated processes' },
        clients: { number: '30+', label: 'Satisfied clients' },
        automation: { number: '80%', label: 'Time saved' }
      }
    }
  };

  const currentContent = content[lang];

  const renderTitle = () => {
    const words = currentContent.title.split(' ');
    return words.map((word, index) => (
      <motion.span
        key={`${word}-${lang}-${index}`}
        className={index === 1 ? 'text-accent-primary' : ''}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3 + index * 0.1,
          ease: "easeOut"
        }}
      >
        {word}{index < words.length - 1 ? ' ' : ''}
      </motion.span>
    ));
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            x: parallaxX,
            y: parallaxY,
          }}
        />

        {/* Animated Energy Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-accent-primary/10 blur-xl"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + (i * 8) % 80}%`,
              top: `${15 + (i * 7) % 70}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 30, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic Light Rays */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at ${glowX}px ${glowY}px, 
                rgba(0,255,127,0.15) 0%, 
                rgba(0,255,127,0.05) 30%, 
                transparent 70%
              )
            `,
          }}
        />

        {/* Floating Tech Icons - Optimized */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 text-accent-primary/20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }
            }}
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <Brain className="w-12 h-12" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/4 text-accent-primary/20"
            animate={{
              rotate: -360,
              y: [0, -15, 0],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              y: { duration: 10, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }
            }}
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <Code className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/3 text-accent-primary/20"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <Zap className="w-8 h-8" />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-accent-primary rounded-full mr-3 animate-pulse" />
          <span className="text-accent-primary font-semibold text-sm">
            {currentContent.badge}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-text-primary leading-tight"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <motion.span
            className="inline-block"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity, 
              ease: [0.4, 0, 0.6, 1],
              repeatType: "loop"
            }}
            style={{
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
            }}
          >
            {renderTitle()}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          key={`subtitle-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          {currentContent.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <Link
            href={`/${lang}/contact`}
            className="group relative bg-accent-primary text-bg-primary font-bold text-xl px-12 py-6 rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-primary to-accent-dark"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            <span className="relative z-10 flex items-center">
              {currentContent.primaryCTA}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(0, 255, 127, 0.6)',
              boxShadow: '0 0 30px rgba(0, 255, 127, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-transparent border-2 border-accent-primary/30 text-text-primary font-semibold text-lg px-10 py-5 rounded-full transition-all duration-300 overflow-hidden backdrop-blur-xl"
          >
            <motion.div
              className="absolute inset-0 bg-accent-primary/10 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <span className="relative z-10 group-hover:text-accent-primary transition-colors duration-300">
              {currentContent.secondaryCTA}
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-text-secondary"
        >
          {Object.entries(currentContent.stats).map(([key, stat], index) => (
            <motion.div
              key={`${key}-${lang}`}
              className="text-center"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.8,
                ease: [0.4, 0, 0.6, 1],
                repeatType: "loop"
              }}
              style={{
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="text-3xl md:text-4xl font-black text-accent-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
