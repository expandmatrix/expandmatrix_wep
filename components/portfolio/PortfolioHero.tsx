'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Zap, ArrowDown, Brain, Target, Cpu } from 'lucide-react';
import { useRef, useState } from 'react';

interface PortfolioHeroProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function PortfolioHero({ dict, lang }: PortfolioHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: x * 2 - 1, y: y * 2 - 1 });
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#case-studies');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "50+",
      label: lang === 'cs' ? 'Spokojených klientů' : 'Happy Clients',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "200+",
      label: lang === 'cs' ? 'Automatizovaných procesů' : 'Automated Processes',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "85%",
      label: lang === 'cs' ? 'Úspora času' : 'Time Saved',
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
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
          }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Animated Energy Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-accent-primary/10 blur-xl"
            style={{
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i * 8) % 70}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, Math.sin(i) * 40, 0],
              y: [0, Math.cos(i) * 25, 0],
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic Light Rays */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, 
                rgba(0,255,127,0.15) 0%, 
                rgba(0,255,127,0.05) 30%, 
                transparent 70%
              )
            `,
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-accent-primary/40"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              left: `${20 + (i * 7) % 60}%`,
              top: `${20 + (i * 6) % 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'Naše úspěšné projekty' : 'Our Success Stories'}
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-text-primary leading-tight"
          >
            <span className="block">
              {lang === 'cs' ? 'Portfolio' : 'Portfolio'}
            </span>
            <span className="text-accent-primary">
              {lang === 'cs' ? 'AI Automatizace' : 'AI Automation'}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-medium mb-12"
          >
            {lang === 'cs' 
              ? 'Prohlédněte si naše úspěšné AI projekty a automatizace. Ušetřili jsme klientům tisíce hodin práce a miliony korun díky pokročilým AI řešením.'
              : 'Explore our successful AI projects and automations. We saved clients thousands of hours and millions in costs through advanced AI solutions.'
            }
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: lang === 'cs' ? 'AI na míru' : 'Custom AI',
                desc: lang === 'cs' ? 'Řešení šitá přesně na vaše potřeby' : 'Solutions tailored to your needs'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: lang === 'cs' ? 'Měřitelné výsledky' : 'Measurable Results',
                desc: lang === 'cs' ? 'Konkrétní úspory času a nákladů' : 'Concrete time and cost savings'
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: lang === 'cs' ? 'Pokročilé technologie' : 'Advanced Tech',
                desc: lang === 'cs' ? 'Nejnovější AI a ML algoritmy' : 'Latest AI and ML algorithms'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] transition-all duration-500"
              >
                <div className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-105 transition-all duration-500"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} backdrop-blur-sm border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-accent-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-black text-accent-primary mb-3 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-text-secondary text-sm mb-4 font-medium">
            {lang === 'cs' ? 'Prohlédněte si naše projekty' : 'Explore our projects'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 bg-accent-primary/10 border border-accent-primary/20 rounded-full backdrop-blur-sm hover:bg-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDown className="w-6 h-6 text-accent-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
