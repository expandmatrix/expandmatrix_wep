'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, ArrowRight, Code, Cpu, Network, Zap } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface CustomAIHeroProps {
  dict: any;
  lang: Locale;
}

export default function CustomAIHero({ dict, lang }: CustomAIHeroProps) {
  return (
    <section className="min-h-screen bg-bg-primary pt-24 relative overflow-hidden">
      {/* Advanced AI Background */}
      <div className="absolute inset-0">
        {/* Animated Neural Network Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* AI Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,255,127,0)" />
              <stop offset="50%" stopColor="rgba(0,255,127,0.8)" />
              <stop offset="100%" stopColor="rgba(0,255,127,0)" />
            </linearGradient>
          </defs>
          
          {/* Neural pathways */}
          <motion.path
            d="M100,300 Q300,200 500,300 T900,300"
            stroke="url(#neuralGlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M100,500 Q400,400 700,500 T900,500"
            stroke="url(#neuralGlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M100,700 Q350,600 600,700 T900,700"
            stroke="url(#neuralGlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Neural nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + i * 70}
              cy={300 + Math.sin(i * 0.5) * 200}
              r="6"
              fill="rgba(0,255,127,0.6)"
              animate={{
                r: [6, 10, 6],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Floating AI Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/6 text-accent-primary/15"
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
            className="absolute top-1/3 right-1/5 text-accent-primary/15"
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
            className="absolute bottom-1/3 left-1/4 text-accent-primary/15"
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
            className="absolute bottom-1/4 right-1/3 text-accent-primary/15"
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

          <motion.div
            className="absolute top-2/3 left-1/2 text-accent-primary/15"
            animate={{
              rotate: -360,
              scale: [1, 1.4, 1],
              y: [0, -30, 0],
            }}
            transition={{
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              scale: { duration: 14, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Zap className="w-10 h-10" />
          </motion.div>
        </div>

        {/* Large gradient orbs */}
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

        {/* Data particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-primary/20"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              left: `${15 + (i * 5) % 70}%`,
              top: `${20 + (i * 4) % 60}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-accent-primary mr-2" />
              <span className="text-accent-primary font-semibold text-sm">
                {lang === 'cs' ? 'AI Systémy na míru' : 'Custom AI Systems'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black text-text-primary leading-tight"
            >
              {lang === 'cs' ? (
                <>
                  Vytváříme AI{' '}
                  <span className="text-accent-primary relative">
                    přesně
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                      className="absolute bottom-2 left-0 right-0 h-2 bg-accent-primary/20 -z-10"
                    />
                  </span>{' '}
                  pro vás
                </>
              ) : (
                <>
                  We create AI{' '}
                  <span className="text-accent-primary relative">
                    exactly
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                      className="absolute bottom-2 left-0 right-0 h-2 bg-accent-primary/20 -z-10"
                    />
                  </span>{' '}
                  for you
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-xl text-text-secondary leading-relaxed max-w-2xl"
            >
              {lang === 'cs'
                ? 'Od analýzy vašich potřeb po kompletní implementaci. Vytváříme AI systémy, které skutečně vyřeší vaše obchodní výzvy a posunou vás před konkurenci.'
                : 'From analyzing your needs to complete implementation. We create AI systems that truly solve your business challenges and put you ahead of the competition.'
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={`/${lang}/contact`}
                className="group inline-flex items-center px-8 py-4 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] relative overflow-hidden"
              >
                <span className="relative z-10">
                  {lang === 'cs' ? 'Začít projekt' : 'Start Project'}
                </span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Link>
              
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center px-8 py-4 border border-accent-primary/30 text-accent-primary font-semibold rounded-full hover:bg-accent-primary/10 transition-all duration-300"
              >
                {lang === 'cs' ? 'Konzultace zdarma' : 'Free Consultation'}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main brain icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="relative z-10 flex justify-center"
              >
                <div className="p-12 bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 rounded-3xl border border-accent-primary/30 backdrop-blur-xl">
                  <Brain className="w-32 h-32 text-accent-primary" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="absolute -top-8 -left-8 p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-xl"
              >
                <span className="text-accent-primary font-bold">AI</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                className="absolute -bottom-8 -right-8 p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-xl"
              >
                <span className="text-accent-primary font-bold">ML</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
