'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Rocket, Star, Clock, CheckCircle, ArrowRight, Code, Target } from 'lucide-react';

interface TrainingProgramsProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function TrainingPrograms({ dict, lang }: TrainingProgramsProps) {
  const programs = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: lang === 'cs' ? 'AI Základy' : 'AI Fundamentals',
      level: lang === 'cs' ? 'Začátečník' : 'Beginner',
      duration: lang === 'cs' ? '4 týdny' : '4 weeks',
      description: lang === 'cs'
        ? 'Komplexní úvod do světa umělé inteligence. Naučte se základy strojového učení a praktické aplikace.'
        : 'Comprehensive introduction to artificial intelligence. Learn machine learning basics and practical applications.',
      features: [
        lang === 'cs' ? 'Základy AI a ML' : 'AI and ML basics',
        lang === 'cs' ? 'Praktické projekty' : 'Practical projects',
        lang === 'cs' ? 'Certifikát' : 'Certificate',
        lang === 'cs' ? 'Mentoring' : 'Mentoring'
      ],
      popular: false
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: lang === 'cs' ? 'Pokročilé AI' : 'Advanced AI',
      level: lang === 'cs' ? 'Pokročilý' : 'Advanced',
      duration: lang === 'cs' ? '8 týdnů' : '8 weeks',
      description: lang === 'cs'
        ? 'Hluboké ponoření do pokročilých AI technik. Deep learning, neural networks a real-world implementace.'
        : 'Deep dive into advanced AI techniques. Deep learning, neural networks and real-world implementation.',
      features: [
        lang === 'cs' ? 'Deep Learning' : 'Deep Learning',
        lang === 'cs' ? 'Neural Networks' : 'Neural Networks',
        lang === 'cs' ? 'Vlastní projekty' : 'Custom projects',
        lang === 'cs' ? '1:1 konzultace' : '1:1 consultations'
      ],
      popular: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: lang === 'cs' ? 'Firemní školení' : 'Corporate Training',
      level: lang === 'cs' ? 'Všechny úrovně' : 'All levels',
      duration: lang === 'cs' ? 'Flexibilní' : 'Flexible',
      description: lang === 'cs'
        ? 'Školení šité na míru pro vaši firmu. Customizované kurzy podle vašich specifických potřeb.'
        : 'Training tailored for your company. Customized courses according to your specific needs.',
      features: [
        lang === 'cs' ? 'Customizované kurzy' : 'Customized courses',
        lang === 'cs' ? 'On-site školení' : 'On-site training',
        lang === 'cs' ? 'Certifikace týmu' : 'Team certification',
        lang === 'cs' ? 'Pokračující podpora' : 'Ongoing support'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 40%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,255,127,0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Energy Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/40 rounded-full blur-sm"
            style={{
              left: `${15 + (i * 10) % 70}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Naše ' : 'Our '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'Programy' : 'Programs'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Vyberte si školící program, který nejlépe odpovídá vašim potřebám a úrovni znalostí'
              : 'Choose the training program that best fits your needs and knowledge level'
            }
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative"
            >
              {/* Popular badge */}
              {program.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {lang === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
                  </div>
                </motion.div>
              )}

              <div className={`liquid-glass-card h-full flex flex-col p-8 rounded-3xl transition-all duration-700 hover:scale-[1.02] ${
                program.popular ? 'popular-glow' : ''
              }`}>
                <div className="glass-layer-primary absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7,
                      ease: "easeInOut"
                    }}
                  >
                    {program.icon}
                  </motion.div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {program.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-text-secondary">
                          <div className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center justify-center gap-2 ${
                      program.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {lang === 'cs' ? 'Vybrat program' : 'Choose Program'}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Liquid Glass CSS */}
      <style jsx>{`
        .liquid-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .liquid-glass-card:hover {
          border-color: rgba(0, 255, 127, 0.3);
        }
        
        .popular-glow {
          border-color: rgba(0, 255, 127, 0.4);
        }
        
        .glass-layer-primary {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.06) 50%, 
            rgba(255, 255, 255, 0.02) 100%
          );
        }
        
        /* Remove all shadows from buttons */
        button, .btn-primary, .btn-secondary, a[class*="btn"] {
          box-shadow: none !important;
        }
        
        button:hover, .btn-primary:hover, .btn-secondary:hover, a[class*="btn"]:hover {
          box-shadow: none !important;
        }
      `}</style>
    </section>
  );
}
