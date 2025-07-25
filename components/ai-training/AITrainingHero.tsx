'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { GraduationCap, Brain, Users, Award, Zap, Target, ArrowRight } from 'lucide-react';

interface AITrainingHeroProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AITrainingHero({ dict, lang }: AITrainingHeroProps) {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: lang === 'cs' ? 'AI Fundamenty' : 'AI Fundamentals',
      desc: lang === 'cs' ? 'Základy umělé inteligence' : 'Artificial intelligence basics'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: lang === 'cs' ? 'Týmové školení' : 'Team Training',
      desc: lang === 'cs' ? 'Školení pro celé týmy' : 'Training for entire teams'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: lang === 'cs' ? 'Certifikace' : 'Certification',
      desc: lang === 'cs' ? 'Oficiální certifikáty' : 'Official certificates'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary/20">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Energy Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/30 rounded-full blur-sm"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${15 + (i * 6) % 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
        
        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Hlavní nadpis s futuristickým designem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="text-text-primary">AI </span>
              <span className="text-accent-primary">
                {lang === 'cs' ? 'Školení' : 'Training'}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {lang === 'cs' 
                ? 'Připravte svůj tým na budoucnost s našimi komplexními AI školeními a certifikačními programy. Od základů po pokročilé techniky.'
                : 'Prepare your team for the future with our comprehensive AI training and certification programs. From basics to advanced techniques.'
              }
            </p>
          </motion.div>

          {/* CTA tlačítka */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href={`/${lang}/kontakt`}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:scale-105"
            >
              <span>{lang === 'cs' ? 'Začít školení' : 'Start Training'}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
              className="inline-flex items-center px-10 py-5 bg-transparent text-accent-primary font-bold text-lg rounded-full border-2 border-accent-primary hover:bg-accent-primary/10 hover:scale-105 transition-all duration-500"
            >
              {lang === 'cs' ? 'Všechny služby' : 'All Services'}
            </Link>
          </motion.div>

          {/* Liquid Glass Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                <div className="relative z-10">
                  <motion.div
                    className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300"
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
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Liquid Glass CSS */}
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
