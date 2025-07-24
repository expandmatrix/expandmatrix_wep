'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import type { Locale } from '@/lib/getDictionary';

interface StatsProps {
  dict: any;
  lang: Locale;
}

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export default function Stats({ dict, lang }: StatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats: StatItem[] = lang === 'cs' ? [
    { number: 80, suffix: '%', label: 'Ušetřeného času' },
    { number: 150, suffix: '+', label: 'Spokojených klientů' },
    { number: 95, suffix: '%', label: 'Úspěšnost projektů' },
    { number: 24, suffix: '/7', label: 'Podpora' },
  ] : [
    { number: 80, suffix: '%', label: 'Time Saved' },
    { number: 150, suffix: '+', label: 'Satisfied Clients' },
    { number: 95, suffix: '%', label: 'Project Success Rate' },
    { number: 24, suffix: '/7', label: 'Support' },
  ];

  return (
    <section ref={ref} className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-primary/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? 'Naše ' : 'Our '}
            <span className="text-accent-primary relative inline-block">
              {lang === 'cs' ? 'výsledky' : 'Results'}
              <div className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg" />
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'cs' 
              ? 'Čísla, která mluví za nás. Důkaz naší expertízy a závazku k excelenci.'
              : 'Numbers that speak for themselves. Proof of our expertise and commitment to excellence.'
            }
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-center"
        />
      </div>
    </section>
  );
}

function StatCard({ stat, index, isInView }: { stat: StatItem; index: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Floating Animation Container */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: index * 0.5,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Background Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-br from-accent-primary/10 via-accent-primary/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Main Card Container - Simplified for better text visibility */}
        <div className="relative bg-bg-secondary/80 border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:border-accent-primary/30 group-hover:bg-bg-secondary/90 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          
          {/* Top Accent Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
          
          {/* Number Display with Proper Spacing */}
          <div className="text-center mb-6 py-4">
            <motion.div 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-accent-primary mb-2 leading-none tracking-tight"
              animate={isInView ? { 
                textShadow: [
                  "0 0 20px rgba(0,255,127,0.4)",
                  "0 0 30px rgba(0,255,127,0.6)",
                  "0 0 20px rgba(0,255,127,0.4)"
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              style={{ 
                filter: 'drop-shadow(0 0 10px rgba(0,255,127,0.3))',
                WebkitTextStroke: '1px rgba(0,255,127,0.1)'
              }}
            >
              {count}{stat.suffix}
            </motion.div>
            
            {/* Subtle Number Reflection */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-accent-primary/10 blur-sm leading-none tracking-tight">
                {count}{stat.suffix}
              </div>
            </div>
          </div>

          {/* Label with Better Spacing */}
          <div className="text-center px-2">
            <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-500 leading-tight">
              {stat.label}
            </h3>
            
            {/* Animated Underline */}
            <motion.div 
              className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Corner Accent Dots */}
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}
