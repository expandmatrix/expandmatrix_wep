'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

interface PortfolioHeroProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function PortfolioHero({ dict, lang }: PortfolioHeroProps) {
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
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-accent-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-radial from-accent-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-primary/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-20 text-accent-primary/30"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-32 text-accent-primary/20"
      >
        <Target className="w-10 h-10" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-40 left-32 text-accent-primary/25"
      >
        <TrendingUp className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 right-20 text-accent-primary/20"
      >
        <Zap className="w-9 h-9" />
      </motion.div>

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
              {lang === 'cs' ? '🚀 Naše úspěšné projekty' : '🚀 Our Success Stories'}
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] font-black mb-8 leading-tight">
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
                {lang === 'cs' ? 'Portfolio' : 'Portfolio'}
              </motion.span>
              <br />
              <span className="text-text-primary">
                {lang === 'cs' ? 'Úspěchů' : 'of Success'}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {lang === 'cs'
              ? 'Objevte, jak jsme pomohli společnostem transformovat jejich procesy pomocí pokročilých AI řešení. Každý projekt je příběhem inovace, efektivity a úspěchu.'
              : 'Discover how we\'ve helped companies transform their processes with advanced AI solutions. Every project is a story of innovation, efficiency, and success.'
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
              className="btn-cta-large group inline-flex items-center"
            >
              <span>{lang === 'cs' ? 'Začněte svůj projekt' : 'Start Your Project'}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              href="#case-studies"
              className="btn-cta-secondary inline-flex items-center"
            >
              {lang === 'cs' ? 'Prohlédnout případové studie' : 'View Case Studies'}
            </Link>
          </motion.div>

          {/* Enhanced Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { number: '50+', label: lang === 'cs' ? 'Úspěšných projektů' : 'Successful Projects' },
              { number: '95%', label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction' },
              { number: '2M+', label: lang === 'cs' ? 'Ušetřených hodin' : 'Hours Saved' },
              { number: '40%', label: lang === 'cs' ? 'Průměrná úspora nákladů' : 'Average Cost Reduction' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl backdrop-blur-xl border border-accent-primary/10 bg-gradient-to-b from-accent-primary/5 to-transparent"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(0, 255, 127, 0.3)',
                  boxShadow: '0 0 30px rgba(0, 255, 127, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-black text-accent-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent-primary/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-accent-primary rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
