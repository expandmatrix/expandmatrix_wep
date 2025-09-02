'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, Target, Users, Award, Globe, Zap, TrendingUp, Star, Brain, Code, Cpu, Network } from 'lucide-react';
import { stableRandom } from '@/lib/stableRandom';
import { useRef, useState, useEffect } from 'react';

interface AboutStoryProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutStory({ dict, lang }: AboutStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Scroll progress for the timeline container specifically
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to timeline progress (0-100%)
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const springProgress = useSpring(timelineProgress, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001
  });
  
  // Particle system values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const milestones = [
    {
      year: '2022',
      title: lang === 'cs' ? 'Začátek éry AI' : 'AI Era Begins',
      description: lang === 'cs' 
        ? 'Objevili jsme ChatGPT 3.5 a okamžitě nás to pohltilo. V tu dobu jsme se poznali se svým parťákem a hned jsme věděli, že nás spojuje stejná vize. Od prvního dne jsme cítili, že AI technologie budou klíčovou součástí naší budoucnosti.'
        : 'We discovered ChatGPT 3.5 and were instantly fascinated. Around the same time, I met my partner, and we immediately clicked, sharing the same vision for the future. From day one, we knew that AI would play a key role in shaping what was coming next.',
      achievement: lang === 'cs' ? 'První AI řešení' : 'First AI Solution',
      icon: Rocket,
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      glowColor: 'shadow-blue-500/50',
      progress: 25
    },
    {
      year: '2023',
      title: lang === 'cs' ? 'První automatizace' : 'First Automation Solution',
      description: lang === 'cs'
        ? 'Začali jsme experimentovat s platformou Make.com (Integromat) a vytvářeli první jednoduché automatizace. Nejdříve pro sebe, potom pro známé. Byly to malé kroky, ale otevřely nám dveře k větším příležitostem.'
        : 'We started experimenting with Make.com (formerly Integromat) and built our first simple automations. At first, we created solutions for ourselves, then for our friends and close network. These small steps opened the door to much bigger opportunities.',
      achievement: lang === 'cs' ? '15+ projektů dokončeno' : '15+ Projects Completed',
      icon: Brain,
      color: 'from-green-500 via-emerald-600 to-teal-500',
      glowColor: 'shadow-green-500/50',
      progress: 50
    },
    {
      year: '2024',
      title: lang === 'cs' ? 'n8n a první velké projekty' : 'n8n and First Large Projects',
      description: lang === 'cs'
        ? 'Objevili jsme n8n a začali naplno využívat jeho potenciál. Vytvářeli jsme komplexní workflow, propojovali systémy a začali stavět první custom AI agenty. Spolupráce s prvními velkými klienty nám potvrdila, že jdeme správným směrem.'
        : 'We discovered n8n and went all-in on its capabilities. We started building complex workflows, integrating multiple systems, and developing our first custom AI agents. Working with our first major clients confirmed that we were on the right path.',
      achievement: lang === 'cs' ? '30+ spokojených klientů' : '30+ Happy Clients',
      icon: Cpu,
      color: 'from-purple-500 via-violet-600 to-indigo-500',
      glowColor: 'shadow-purple-500/50',
      progress: 75
    },
    {
      year: '2025',
      title: lang === 'cs' ? 'Přepisujeme pravidla hry' : 'Redefining the Game',
      description: lang === 'cs'
        ? 'Expand Matrix se mění v hybridní AI laboratoř. Propojujeme open-source technologie, AI agenty a vlastní architekturu do systémů, které mění způsob, jak firmy fungují. Naše platforma není jen o automatizaci. Je o rychlosti, škálování a inteligentním růstu. Tam, kde ostatní teprve experimentují, my už nasazujeme řešení, která mění celé odvětví.'
        : 'Expand Matrix is evolving into a hybrid AI laboratory. We connect open-source technologies, AI agents, and our own architectures to create systems that redefine how businesses operate. Our platform is no longer just about automation. It is about speed, scalability, and intelligent growth. Where others are still experimenting, we are already deploying solutions that transform entire industries.',
      achievement: lang === 'cs' ? '100+ úspěšných projektů' : '100+ Successful Projects',
      icon: Network,
      color: 'from-accent-primary via-green-400 to-cyan-400',
      glowColor: 'shadow-accent-primary/50',
      progress: 100
    }
  ];

  // Mouse tracking for particle effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Auto-advance timeline based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.floor(latest * milestones.length);
      const clampedIndex = Math.min(Math.max(newIndex, 0), milestones.length - 1);
      setActiveIndex(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, milestones.length]);

  return (
    <section
      id={lang === 'cs' ? 'od-vize-k-realite' : 'from-vision-to-reality'}
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-bg-primary via-bg-secondary/20 to-bg-primary overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Neural Network */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,255,127,0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0,255,127,0.2) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          const left = `${stableRandom(i + 1) * 100}%`;
          const top = `${stableRandom(i + 21) * 100}%`;
          const duration = 3 + stableRandom(i + 41) * 2;
          const delay = stableRandom(i + 61) * 2;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-accent-primary/40 rounded-full"
              style={{ left, top }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8 backdrop-blur-sm">
            <Star className="w-5 h-5 text-accent-primary mr-2" />
            <span className="text-accent-primary font-medium">
              {lang === 'cs' ? 'Naše Cesta' : 'Our Journey'}
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-6">
            {lang === 'cs' ? (
              <>
                Od{' '}
                <span className="text-accent-primary relative">
                  Vize
                  <motion.div 
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                {' '}k{' '}
                <span className="text-accent-primary">Realitě</span>
              </>
            ) : (
              <>
                From{' '}
                <span className="text-accent-primary relative">
                  Vision
                  <motion.div 
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                {' '}to{' '}
                <span className="text-accent-primary">Reality</span>
              </>
            )}
          </h2>

          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {lang === 'cs' 
              ? 'Sledujte naši transformaci od malého startupu k přednímu poskytovateli AI řešení, která mění způsob, jakým firmy pracují s technologiemi.'
              : 'Follow our transformation from a small startup to a leading AI solutions provider, changing how companies work with technology.'
            }
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline - původní design */}
          <div className="hidden md:block">
            {/* Background Progress Bar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary/20 to-accent-primary/10 rounded-full" />
            
            {/* Animated Progress Bar */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-primary via-accent-primary to-accent-primary/60 rounded-full origin-top"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              }}
            />
          </div>

          {/* Mobile Timeline - nový design */}
          <div className="block md:hidden">
            {/* Background Progress Bar - uprostřed */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary/15 to-accent-primary/5 rounded-full" />
            
            {/* Animated Progress Bar */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-primary via-accent-primary to-accent-primary/60 rounded-full origin-top"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              }}
            />

            {/* Glow effect pro aktivní kartu */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-32 h-32 bg-accent-primary/10 rounded-full blur-3xl"
              animate={{
                y: `${activeIndex * 400}px`,
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                y: { duration: 0.8, ease: "easeOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${
                  // Desktop: alternující layout, Mobile: centrovaný
                  'md:flex md:items-center ' + 
                  (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  {/* Central Icon pro mobil */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} p-4 shadow-2xl ${milestone.glowColor} border-4 border-bg-primary relative z-20`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 180,
                      }}
                      animate={activeIndex === index ? { 
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          '0 0 20px rgba(0,255,127,0.4)',
                          '0 0 40px rgba(0,255,127,0.7)',
                          '0 0 20px rgba(0,255,127,0.4)'
                        ]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <milestone.icon className="w-full h-full text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card pro mobil */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative p-6 mx-4 rounded-3xl backdrop-blur-2xl border border-accent-primary/20 bg-gradient-to-br from-bg-secondary/90 to-bg-secondary/50 group overflow-hidden ${milestone.glowColor} hover:shadow-2xl transition-all duration-500`}
                    animate={activeIndex === index ? {
                      borderColor: 'rgba(0, 255, 127, 0.4)',
                      boxShadow: '0 20px 60px rgba(0, 255, 127, 0.15)'
                    } : {}}
                  >
                    {/* Card Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      animate={activeIndex === index ? { opacity: 0.08 } : { opacity: 0 }}
                    />

                    {/* Year Badge */}
                    <motion.div
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm mb-4 shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {milestone.year}
                    </motion.div>

                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>

                    <p className="text-base text-text-secondary mb-4 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Achievement Badge */}
                    <motion.div
                      className="inline-flex items-center px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary font-medium text-sm backdrop-blur-sm mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      {milestone.achievement}
                    </motion.div>

                    {/* Progress Indicator */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-text-secondary">
                          {lang === 'cs' ? 'Pokrok' : 'Progress'}
                        </span>
                        <span className="text-xs text-accent-primary font-bold">
                          {milestone.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-bg-primary/50 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${milestone.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${milestone.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Desktop Layout - původní */}
                <div className="hidden md:block md:w-5/12">
                  <div className={index % 2 === 0 ? 'pr-12' : 'pl-12'}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: index % 2 === 0 ? 5 : -5,
                      }}
                      className={`relative p-8 rounded-3xl backdrop-blur-2xl border border-accent-primary/20 bg-gradient-to-br from-bg-secondary/80 to-bg-secondary/40 group overflow-hidden ${milestone.glowColor} hover:shadow-2xl transition-all duration-500`}
                    >
                      {/* Desktop card content - stejné jako původní */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                        animate={activeIndex === index ? { opacity: 0.1 } : { opacity: 0 }}
                      />

                      <motion.div
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm mb-6 shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {milestone.year}
                      </motion.div>

                      <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                        {milestone.title}
                      </h3>

                      <p className="text-base text-text-secondary mb-6 leading-relaxed">
                        {milestone.description}
                      </p>

                      <motion.div
                        className="inline-flex items-center px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary font-medium text-sm backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Award className="w-4 h-4 mr-2" />
                        {milestone.achievement}
                      </motion.div>

                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-text-secondary">
                            {lang === 'cs' ? 'Pokrok' : 'Progress'}
                          </span>
                          <span className="text-xs text-accent-primary font-bold">
                            {milestone.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-bg-primary/50 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${milestone.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${milestone.progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Central Icon */}
                <div className="hidden md:flex md:w-2/12 justify-center">
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${milestone.color} p-5 shadow-2xl ${milestone.glowColor} border-4 border-bg-primary relative z-20`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                    }}
                    animate={activeIndex === index ? { 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(0,255,127,0.3)',
                        '0 0 40px rgba(0,255,127,0.6)',
                        '0 0 20px rgba(0,255,127,0.3)'
                      ]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <milestone.icon className="w-full h-full text-white" />
                  </motion.div>
                </div>

                {/* Desktop Empty space */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 text-center relative"
        >
          {/* Premium Liquid Glass Container */}
          <motion.div
            className="relative p-16 rounded-[2rem] overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(0,255,127,0.2)',
              boxShadow: `
                0 8px 32px rgba(0,255,127,0.1),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.1)
              `
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `
                0 20px 60px rgba(0,255,127,0.2),
                inset 0 1px 0 rgba(255,255,255,0.2),
                inset 0 -1px 0 rgba(0,0,0,0.1)
              `
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Liquid Glass Reflections */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
                  linear-gradient(-45deg, transparent 30%, rgba(0,255,127,0.05) 50%, transparent 70%)
                `
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

            {/* Floating Orbs */}
            {Array.from({ length: 6 }).map((_, i) => {
              const left = `${20 + stableRandom(i + 1) * 60}%`;
              const top = `${20 + stableRandom(i + 21) * 60}%`;
              const xMove = stableRandom(i + 41) * 20 - 10;
              const duration = 4 + stableRandom(i + 61) * 2;
              const delay = stableRandom(i + 81) * 3;
              return (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-accent-primary/30"
                  style={{ left, top }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, xMove, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Morphing Background Waves */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 30%, rgba(0,255,127,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 70%, rgba(0,255,127,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 40% 80%, rgba(0,255,127,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 30%, rgba(0,255,127,0.1) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              {/* Enhanced Icon with Liquid Effect */}
              <motion.div
                className="w-32 h-32 mx-auto mb-10 rounded-full relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00FF7F 0%, #00CC66 100%)',
                  boxShadow: '0 0 40px rgba(0,255,127,0.4)'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Liquid Inner Glow */}
                <motion.div
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                  }}
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              
              {/* Enhanced Typography */}
              <motion.h3 
                className="text-5xl font-black text-text-primary mb-8 leading-tight"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0,255,127,0.3)',
                    '0 0 30px rgba(0,255,127,0.5)',
                    '0 0 20px rgba(0,255,127,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {lang === 'cs' ? 'Budoucnost AI Automatizace' : 'The Future of AI Automation'}
              </motion.h3>
              
              <motion.p 
                className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {lang === 'cs' 
                  ? 'Pokračujeme v inovacích a vytváříme budoucnost automatizace business procesů pomocí nejmodernějších AI technologií. Naše vize je svět, kde technologie slouží lidem a umožňuje jim dosáhnout jejich plného potenciálu.'
                  : 'We continue to innovate and shape the future of business process automation using cutting-edge AI technologies. Our vision is a world where technology serves people and enables them to reach their full potential.'
                }
              </motion.p>

              {/* Premium Interactive Elements */}
              <div className="flex justify-center space-x-12">
                {[
                  { icon: Brain, label: lang === 'cs' ? 'AI Inovace' : 'AI Innovation', color: '#3B82F6' },
                  { icon: Zap, label: lang === 'cs' ? 'Automatizace' : 'Automation', color: '#F59E0B' },
                  { icon: Globe, label: lang === 'cs' ? 'Globální Dosah' : 'Global Reach', color: '#10B981' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-4 group cursor-pointer"
                    whileHover={{ 
                      scale: 1.15, 
                      y: -10,
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-2xl p-4 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${item.color}30`
                      }}
                      whileHover={{
                        boxShadow: `0 0 30px ${item.color}40`,
                        borderColor: `${item.color}60`
                      }}
                    >
                      {/* Liquid Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(45deg, transparent, ${item.color}30, transparent)`
                        }}
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <item.icon 
                        className="w-full h-full relative z-10" 
                        style={{ color: item.color }}
                      />
                    </motion.div>
                    
                    <motion.span 
                      className="text-sm text-text-secondary font-semibold group-hover:text-accent-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
