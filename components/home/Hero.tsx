'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Code, Brain } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface HeroProps {
  dict: any;
  lang: Locale;
}

export default function Hero({ dict, lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Enhanced parallax effects
  const parallaxX = useTransform(mouseX, [-500, 500], [-30, 30]);
  const parallaxY = useTransform(mouseY, [-500, 500], [-20, 20]);
  const glowX = useTransform(mouseX, [-500, 500], [-100, 100]);
  const glowY = useTransform(mouseY, [-500, 500], [-50, 50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set(e.clientX - rect.left - centerX);
    mouseY.set(e.clientY - rect.top - centerY);
  };

  // Enhanced title rendering with proper internationalization
  const renderTitle = () => {
    const title = dict?.hero?.title || (lang === 'cs' ? 'Automatizujte svůj business a ušetřete až 80% času' : 'Automate your business and save up to 80% of time');
    const highlightText = dict?.hero?.highlight || (lang === 'cs' ? '80% času' : '80% of time');
    
    // Split title by highlight text
    const parts = title.split(highlightText);
    
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="neon-text relative inline-block">
            {highlightText}
            <motion.div 
              className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
          {parts[1]}
        </>
      );
    }
    
    return title;
  };

  // Get localized content with fallbacks
  const getLocalizedContent = () => {
    return {
      title: dict?.hero?.title || (lang === 'cs' ? 'Automatizujte svůj business a ušetřete až 80% času' : 'Automate your business and save up to 80% of time'),
      subtitle: dict?.hero?.subtitle || (lang === 'cs' ? 'Jsme futuristická AI agentura, která pomáhá firmám automatizovat procesy, snižovat náklady a růst rychleji než kdy předtím.' : 'We are a futuristic AI agency that helps companies automate processes, reduce costs, and grow faster than ever before.'),
      primaryCTA: dict?.hero?.primaryCTA || (lang === 'cs' ? 'Začít zdarma' : 'Get Started Free'),
      secondaryCTA: dict?.hero?.secondaryCTA || (lang === 'cs' ? 'Zjistit více' : 'Learn More'),
      stats: {
        projects: {
          value: '500+',
          label: dict?.hero?.stats?.projects || (lang === 'cs' ? 'Projektů' : 'Projects')
        },
        success: {
          value: '98%',
          label: dict?.hero?.stats?.success || (lang === 'cs' ? 'Úspěšnost' : 'Success Rate')
        },
        support: {
          value: '24/7',
          label: dict?.hero?.stats?.support || (lang === 'cs' ? 'Podpora' : 'Support')
        }
      }
    };
  };

  const content = getLocalizedContent();

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

        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <motion.path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,255,127,0)" />
              <stop offset="50%" stopColor="rgba(0,255,127,0.8)" />
              <stop offset="100%" stopColor="rgba(0,255,127,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-accent-primary/20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Brain className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 text-accent-primary/20"
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Code className="w-10 h-10" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-accent-primary/20"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-8 h-8" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/3 text-accent-primary/20"
          animate={{
            rotate: 360,
            x: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Sparkles className="w-9 h-9" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.h1 
          key={`title-${lang}`} // Force re-render on language change
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2 
          }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-text-primary mb-8 leading-tight"
          style={{
            textShadow: '0 0 40px rgba(0,255,127,0.3)',
          }}
        >
          <motion.span
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {renderTitle()}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          key={`subtitle-${lang}`} // Force re-render on language change
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          {content.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 255, 127, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-accent-primary text-bg-primary font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 overflow-hidden backdrop-blur-xl border border-accent-primary/20"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-dark to-accent-primary opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative z-10 flex items-center">
              {content.primaryCTA}
              <motion.div
                className="ml-3"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>

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
              {content.secondaryCTA}
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-text-secondary"
        >
          {Object.entries(content.stats).map(([key, stat], index) => (
            <motion.div
              key={`${key}-${lang}`} // Force re-render on language change
              className="text-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            >
              <div className="text-2xl font-bold text-accent-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
