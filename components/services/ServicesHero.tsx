'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, ArrowDown, Brain, Code, Cpu, Network } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface ServicesHeroProps {
  dict: any;
  lang: Locale;
}

export default function ServicesHero({ dict, lang }: ServicesHeroProps) {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#custom-ai-systems');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary/20">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        {/* Static Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Simplified gradient orbs */}
        <div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,127,0.15) 0%, rgba(0,255,127,0.05) 50%, transparent 100%)'
          }}
        />
        
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,127,0.1) 0%, rgba(0,255,127,0.03) 50%, transparent 100%)'
          }}
        />

        {/* Reduced floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-primary/30"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${20 + (i * 8) % 60}%`,
              top: `${20 + (i * 5) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'AI Řešení Nové Generace' : 'Next-Generation AI Solutions'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-text-primary leading-tight"
          >
            {lang === 'cs' ? (
              <>
                Naše{' '}
                <span className="text-accent-primary relative inline-block">
                  AI služby
                </span>
              </>
            ) : (
              <>
                Our{' '}
                <span className="text-accent-primary relative inline-block">
                  AI Services
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-medium"
          >
            {lang === 'cs' 
              ? 'Objevte naše komplexní portfolio AI řešení. Od automatizace procesů po pokročilé AI systémy na míru - najděte řešení, které posune vaše podnikání do budoucnosti.'
              : 'Discover our comprehensive portfolio of AI solutions. From process automation to advanced custom AI systems - find the solution that will propel your business into the future.'
            }
          </motion.p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: lang === 'cs' ? 'Rychlá implementace' : 'Fast Implementation',
              desc: lang === 'cs' ? 'Nasazení za 2-4 týdny' : 'Deployment in 2-4 weeks'
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: lang === 'cs' ? 'Přesné řešení' : 'Precise Solutions',
              desc: lang === 'cs' ? 'Šité na míru vašim potřebám' : 'Tailored to your needs'
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: lang === 'cs' ? '24/7 podpora' : '24/7 Support',
              desc: lang === 'cs' ? 'Nepřetržitá technická podpora' : 'Continuous technical support'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1
              }}
              className="group p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className="text-accent-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-text-secondary text-sm mb-4 font-medium">
            {lang === 'cs' ? 'Prohlédněte si naše služby' : 'Explore our services'}
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
