'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Brain, Users, Award, ArrowRight } from 'lucide-react';

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
      {/* Educational Tech Background */}
      <div className="absolute inset-0">
        {/* Knowledge Network Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Learning Path Visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <motion.path
            d="M50,400 Q300,200 600,400 T1150,400"
            stroke="rgba(0,255,127,0.4)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M50,300 Q400,100 800,300 T1150,300"
            stroke="rgba(0,255,127,0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Knowledge Nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 8) % 70}%`,
              top: `${25 + (i * 5) % 50}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          >
            <div className="w-4 h-4 bg-accent-primary/40 rounded-full blur-sm" />
            <div className="absolute inset-0 w-8 h-8 border border-accent-primary/20 rounded-full -translate-x-2 -translate-y-2" />
          </motion.div>
        ))}

        {/* Digital Book Pages */}
        <motion.div
          className="absolute top-32 right-32 w-64 h-48 opacity-10"
          animate={{
            rotateY: [0, 15, 0],
            rotateX: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 rounded-lg transform perspective-1000 rotateX-12" />
          <div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-accent-primary/15 to-accent-primary/3 rounded-lg transform perspective-1000 rotateX-12" />
        </motion.div>

        {/* Floating Graduation Caps */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 7 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            <GraduationCap className="w-8 h-8 text-accent-primary" />
          </motion.div>
        ))}
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
            <GraduationCap className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'Profesionální AI školení' : 'Professional AI Training'}
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
                {lang === 'cs' ? 'Školení' : 'Training'}
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
                ? 'Připravte svůj tým na budoucnost s našimi komplexními AI školeními. Od základů po pokročilé techniky - získejte konkurenční výhodu.'
                : 'Prepare your team for the future with our comprehensive AI training programs. From basics to advanced techniques - gain competitive advantage.'
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
              href={`/${lang}/kontakt`}
              className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">{lang === 'cs' ? 'Začít školení' : 'Start Training'}</span>
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
