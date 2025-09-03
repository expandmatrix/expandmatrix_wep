'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Users, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

interface AboutHeroProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutHero({ dict, lang }: AboutHeroProps) {
  const stats = [
    {
      icon: Brain,
      number: '140+',
      label: lang === 'cs' ? 'Dokončených projektů' : 'Completed Projects',
      color: 'from-accent-primary to-blue-400'
    },
    {
      icon: Users,
      number: '60+',
      label: lang === 'cs' ? 'Spokojených klientů' : 'Happy Clients',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: TrendingUp,
      number: '80%',
      label: lang === 'cs' ? 'Úspora času' : 'Time Saved',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Award,
      number: '95%',
      label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction',
      color: 'from-pink-400 to-accent-primary'
    }
  ];

  return (
    <section className="relative min-h-screen lg:min-h-screen md:min-h-[80vh] sm:min-h-[70vh] bg-bg-primary flex items-center justify-center overflow-hidden">
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
        />

        {/* Animated Energy Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-accent-primary/10 blur-xl"
            style={{
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              left: `${10 + (i * 8) % 80}%`,
              top: `${15 + (i * 7) % 70}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, Math.sin(i) * 30, 0],
              y: [0, Math.cos(i) * 20, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic Light Rays */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 40%, rgba(0,255,127,0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse at 70% 60%, rgba(0,255,127,0.15) 0%, transparent 70%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <motion.span 
              className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full text-accent-primary font-medium text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {lang === 'cs' ? '🚀 O naší AI agentuře' : '🚀 About Our AI Agency'}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-text-primary mb-6 sm:mb-8 leading-tight"
            >
              {lang === 'cs' ? 'Automatizujeme' : 'We Automate'}{' '}
              <span className="text-accent-primary">
                {lang === 'cs' ? 'Budoucnost' : 'The Future'}
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {lang === 'cs' 
                ? 'Jsme tým AI expertů, kteří pomáhají firmám automatizovat procesy, snižovat náklady a dosahovat lepších výsledků pomocí umělé inteligence.'
                : 'We are a team of AI experts who help companies automate processes, reduce costs, and achieve better results using artificial intelligence.'
              }
            </motion.p>
          </motion.div>

          {/* CTA Buttons - responzivní úprava */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <Link
              href={`#${lang === 'cs' ? 'od-vize-k-realite' : 'from-vision-to-reality'}`}
              className="btn-cta-large group inline-flex items-center"
            >
              <span>{lang === 'cs' ? 'Více o nás' : 'More About Us'}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
              className="btn-cta-secondary inline-flex items-center"
            >
              {lang === 'cs' ? 'Prohlédnout služby' : 'View Services'}
            </Link>
          </motion.div>

          {/* Stats - responzivní grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-accent-primary/10 bg-gradient-to-b from-accent-primary/5 to-transparent group hover:border-accent-primary/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${stat.color} p-2 sm:p-3 lg:p-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-full h-full text-white" />
                </motion.div>
                
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-text-primary mb-1 sm:mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-xs sm:text-sm lg:text-base text-text-secondary font-medium px-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
