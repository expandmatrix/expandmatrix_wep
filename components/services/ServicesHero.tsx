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
        {/* Animated Neural Network Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.2) 1px, transparent 1px)
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

        {/* Layered Gradient Orbs */}
        <div className="absolute top-10 -left-32 w-[600px] h-[600px] bg-gradient-radial from-accent-primary/15 via-accent-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-gradient-radial from-accent-primary/10 via-accent-primary/3 to-transparent rounded-full blur-3xl animate-pulse animate-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-primary/8 via-accent-primary/2 to-transparent rounded-full blur-3xl"></div>

        {/* Floating Tech Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 7) % 70}%`,
              top: `${20 + (i * 6) % 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          >
            <div className={`w-${2 + (i % 3)} h-${2 + (i % 3)} bg-accent-primary/30 rounded-full blur-sm`} />
          </motion.div>
        ))}

        {/* Scanning Lines Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Hexagonal Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff7f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Circuit Board Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <motion.path
            d="M100,100 L300,100 L300,200 L500,200 L500,300 L700,300"
            stroke="rgba(0,255,127,0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M1100,700 L900,700 L900,600 L700,600 L700,500 L500,500"
            stroke="rgba(0,255,127,0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-24 text-center">
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
            className="text-5xl md:text-7xl lg:text-8xl 2xl:text-[9rem] 3xl:text-[11rem] font-black mb-6 text-text-primary leading-tight"
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
            className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-medium"
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
