'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AIPackagesHeroProps {
  dict: any;
  lang: Locale;
}

export default function AIPackagesHero({ dict, lang }: AIPackagesHeroProps) {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: lang === 'cs' ? 'Rychlé nasazení' : 'Quick Deployment',
      desc: lang === 'cs' ? 'Implementace do 2 týdnů' : 'Implementation in 2 weeks'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: lang === 'cs' ? 'Bezpečnost' : 'Security',
      desc: lang === 'cs' ? 'Enterprise-grade zabezpečení' : 'Enterprise-grade security'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: lang === 'cs' ? 'Škálovatelnost' : 'Scalability',
      desc: lang === 'cs' ? 'Roste s vaší firmou' : 'Grows with your business'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary/20">
      {/* Package Delivery Background */}
      <div className="absolute inset-0">
        {/* Delivery Network Grid */}
        <motion.div 
          className="absolute inset-0 opacity-18"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '70px 70px'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Package Boxes Floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-15"
            style={{
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotateY: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
          >
            <Package className="w-6 h-6 text-accent-primary" />
          </motion.div>
        ))}

        {/* Delivery Routes */}
        <svg className="absolute inset-0 w-full h-full opacity-12" viewBox="0 0 1200 800">
          <motion.path
            d="M100,200 L300,200 L300,400 L600,400 L600,600 L900,600"
            stroke="rgba(0,255,127,0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M1100,150 L800,150 L800,350 L500,350 L500,550 L200,550"
            stroke="rgba(0,255,127,0.25)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12,8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Speed Indicators */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-8 bg-gradient-to-t from-accent-primary/30 to-transparent"
            style={{
              left: `${15 + (i * 6) % 70}%`,
              top: `${25 + (i * 4) % 50}%`,
              transform: `rotate(${45 + i * 15}deg)`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Digital Warehouse */}
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-32 opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-accent-primary/20 to-accent-primary/5 rounded-lg" />
          <div className="absolute top-2 left-2 right-2 h-1 bg-accent-primary/30 rounded" />
          <div className="absolute top-6 left-2 right-2 h-1 bg-accent-primary/25 rounded" />
          <div className="absolute top-10 left-2 right-2 h-1 bg-accent-primary/20 rounded" />
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Modern Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center px-6 py-3 mb-8 liquid-glass-badge rounded-full backdrop-blur-xl"
          >
            <Package className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'AI Řešení pro každou firmu' : 'AI Solutions for every business'}
            </span>
          </motion.div>

          {/* Unified Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="text-text-primary">AI </span>
              <span className="text-accent-primary relative">
                {lang === 'cs' ? 'Balíčky' : 'Packages'}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 right-0 h-2 bg-accent-primary/20 -z-10"
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {lang === 'cs' 
                ? 'Vyberte si AI balíček přesně podle velikosti a potřeb vaší firmy. Od startupů po velké korporace - máme řešení pro každého.'
                : 'Choose an AI package tailored to your company size and needs. From startups to large corporations - we have solutions for everyone.'
              }
            </p>
          </motion.div>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href={`/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`}
              className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">{lang === 'cs' ? 'Vybrat balíček' : 'Choose Package'}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Link>
            
            <Link
              href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
              className="inline-flex items-center px-10 py-5 liquid-glass-button text-accent-primary font-bold text-lg rounded-full transition-all duration-500 hover:scale-105"
            >
              {lang === 'cs' ? 'Všechny služby' : 'All Services'}
            </Link>
          </motion.div>

          {/* Liquid Glass Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group liquid-glass-card p-8 rounded-3xl transition-all duration-500 hover:scale-105"
              >
                <div className="glass-layer-primary absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center"
                    animate={{ 
                      y: [0, -4, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Unified Liquid Glass CSS */}
      <style jsx>{`
        .liquid-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 25px rgba(255, 255, 255, 0.05), 
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }
        
        .liquid-glass-card:hover {
          box-shadow: 
            0 20px 40px rgba(255, 255, 255, 0.1), 
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 0 30px rgba(0, 255, 127, 0.2);
          border-color: rgba(0, 255, 127, 0.3);
        }
        
        .liquid-glass-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 127, 0.2);
          box-shadow: 0 8px 32px rgba(0, 255, 127, 0.1);
        }
        
        .liquid-glass-button {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(0, 255, 127, 0.3);
        }
        
        .liquid-glass-button:hover {
          background: rgba(0, 255, 127, 0.1);
          border-color: rgba(0, 255, 127, 0.6);
        }
        
        .glass-layer-primary {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.06) 50%, 
            rgba(255, 255, 255, 0.02) 100%
          );
        }
      `}</style>
    </section>
  );
}
