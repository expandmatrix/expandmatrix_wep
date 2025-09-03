'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, ArrowRight, Code, Cpu, Network } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface CustomAIHeroProps {
  dict: any;
  lang: Locale;
}

export default function CustomAIHero({ dict, lang }: CustomAIHeroProps) {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: lang === 'cs' ? 'Custom vývoj' : 'Custom Development',
      desc: lang === 'cs' ? 'Řešení šité na míru' : 'Tailored solutions'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: lang === 'cs' ? 'Pokročilé AI' : 'Advanced AI',
      desc: lang === 'cs' ? 'Nejnovější technologie' : 'Latest technologies'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: lang === 'cs' ? 'Integrace' : 'Integration',
      desc: lang === 'cs' ? 'Plynulé napojení' : 'Seamless connection'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary/20">
      {/* Advanced AI Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Neural Network Grid */}
        <motion.div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* AI Brain Visualization */}
        <div className="absolute top-20 left-20 w-[400px] h-[400px] opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <motion.circle
              cx="200"
              cy="200"
              r="150"
              stroke="rgba(0,255,127,0.3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="200"
              cy="200"
              r="100"
              stroke="rgba(0,255,127,0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="200"
              cy="200"
              r="50"
              stroke="rgba(0,255,127,0.4)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Data Flow Streams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-accent-primary/40 via-accent-primary/20 to-transparent"
              style={{
                left: `${20 + i * 10}%`,
                height: '100%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Quantum Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/40 rounded-full"
            style={{
              left: `${10 + (i * 5.5) % 80}%`,
              top: `${15 + (i * 4.2) % 70}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Holographic Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/10"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-24 py-32">
        <div className="text-center">
          {/* Modern Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center px-6 py-3 mb-8 liquid-glass-badge rounded-full backdrop-blur-xl"
          >
            <Sparkles className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'Pokročilé AI systémy' : 'Advanced AI Systems'}
            </span>
          </motion.div>

          {/* Unified Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-[9rem] 3xl:text-[11rem] font-black mb-6 leading-tight">
              {lang === 'cs' ? (
                <>
                  <span className="text-text-primary">Tvoříme AI systémy </span>
                  <span className="text-accent-primary relative">
                    na míru
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                      className="absolute bottom-2 left-0 right-0 h-2 bg-accent-primary/20 -z-10"
                    />
                  </span>
                </>
              ) : (
                <>
                  <span className="text-text-primary">Building AI Systems </span>
                  <span className="text-accent-primary relative">
                    Tailored
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                      className="absolute bottom-2 left-0 right-0 h-2 bg-accent-primary/20 -z-10"
                    />
                  </span>
                  <span className="text-text-primary"> to you</span>
                </>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {lang === 'cs'
                ? 'Od analýzy procesů přes návrh řešení až po implementaci a školení. Pomáháme firmám využít sílu AI automatizace a inteligentních agentů, které zvýší produktivitu, sníží náklady a dají vám konkurenční výhodu.'
                : 'From analysis and system design to full implementation and training, we create custom AI solutions and intelligent agents that automate processes, reduce costs, and give your business a competitive advantage.'
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
              href={`/${lang}/contact`}
              className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">
                {lang === 'cs' ? 'Začít projekt' : 'Start Project'}
              </span>
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
