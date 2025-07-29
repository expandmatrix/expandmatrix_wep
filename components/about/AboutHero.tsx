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
      number: '50+',
      label: lang === 'cs' ? 'Dokončených projektů' : 'Completed Projects',
      color: 'from-accent-primary to-blue-400'
    },
    {
      icon: Users,
      number: '30+',
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
      number: '98%',
      label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction',
      color: 'from-pink-400 to-accent-primary'
    }
  ];

  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-6 2xl:px-12 3xl:px-24 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.span 
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full text-accent-primary font-medium text-sm mb-8 backdrop-blur-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {lang === 'cs' ? '🚀 O naší AI agentuře' : '🚀 About Our AI Agency'}
            </motion.span>

            <h1 className="fluid-hero font-black mb-8 leading-tight">

              <motion.span 
                className="bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {lang === 'cs' ? 'Automatizujeme' : 'We Automate'}
              </motion.span>
              <br />
              <span className="text-accent-primary">
                {lang === 'cs' ? 'Budoucnost' : 'The Future'}
              </span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-12"
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
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

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl backdrop-blur-xl border border-accent-primary/10 bg-gradient-to-b from-accent-primary/5 to-transparent group hover:border-accent-primary/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-full h-full text-white" />
                </motion.div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-black text-text-primary mb-2"
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
                
                <div className="text-sm md:text-base text-text-secondary font-medium">
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
