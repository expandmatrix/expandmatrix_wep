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
      {/* Advanced Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Circuit Patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,255,127,0)" />
              <stop offset="50%" stopColor="rgba(0,255,127,0.8)" />
              <stop offset="100%" stopColor="rgba(0,255,127,0)" />
            </linearGradient>
          </defs>
          
          {/* Animated circuit paths */}
          <motion.path
            d="M100,200 L300,200 L300,400 L500,400 L500,200 L700,200"
            stroke="url(#circuitGlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M200,600 L400,600 L400,800 L600,800 L600,600 L800,600"
            stroke="url(#circuitGlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Circuit nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 100}
              cy={300 + Math.sin(i) * 100}
              r="4"
              fill="rgba(0,255,127,0.6)"
              animate={{
                r: [4, 8, 4],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Large gradient orbs with enhanced effects */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,127,0.15) 0%, rgba(0,255,127,0.05) 50%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,127,0.12) 0%, rgba(0,255,127,0.04) 50%, transparent 100%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.6, 0.2],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/6 text-accent-primary/20"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Brain className="w-16 h-16" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/5 text-accent-primary/20"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
              x: [0, 15, 0],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Code className="w-14 h-14" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/4 text-accent-primary/20"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Cpu className="w-12 h-12" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/3 text-accent-primary/20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              x: [0, -18, 0],
            }}
            transition={{
              rotate: { duration: 22, repeat: Infinity, ease: "linear" },
              scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Network className="w-13 h-13" />
          </motion.div>
        </div>
        
        {/* Enhanced floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-primary/30"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              left: `${10 + (i * 4) % 80}%`,
              top: `${15 + (i * 3) % 70}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
        ))}

        {/* Holographic overlay effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 0%, 
                rgba(0,255,127,0.03) 25%, 
                transparent 50%, 
                rgba(0,255,127,0.03) 75%, 
                transparent 100%
              )
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'AI Řešení Nové Generace' : 'Next-Generation AI Solutions'}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-text-primary leading-tight">
            {lang === 'cs' ? (
              <>
                Naše{' '}
                <span className="text-accent-primary relative inline-block">
                  AI služby
                  <motion.div
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </>
            ) : (
              <>
                Our{' '}
                <span className="text-accent-primary relative inline-block">
                  AI Services
                  <motion.div
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-medium"
          >
            {lang === 'cs' 
              ? 'Transformujeme vaše podnikání pomocí pokročilých AI technologií. Od automatizace procesů po inteligentní analýzu dat - vytváříme řešení, která posouvají firmy do budoucnosti.'
              : 'We transform your business with advanced AI technologies. From process automation to intelligent data analysis - we create solutions that propel companies into the future.'
            }
          </motion.p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator with click functionality */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-text-secondary text-sm mb-4 font-medium">
            {lang === 'cs' ? 'Prohlédněte si naše služby' : 'Explore our services'}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 bg-accent-primary/10 border border-accent-primary/20 rounded-full backdrop-blur-sm hover:bg-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-6 h-6 text-accent-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
