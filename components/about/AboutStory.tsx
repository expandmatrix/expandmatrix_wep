'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, Target, Users, Award, Globe, Zap, TrendingUp, Star, Brain, Code, Cpu, Network } from 'lucide-react';
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
      year: '2020',
      title: lang === 'cs' ? 'Založení společnosti' : 'Company Founded',
      description: lang === 'cs' 
        ? 'Začali jsme s vizí automatizovat business procesy pomocí nejmodernějších AI technologií a machine learning algoritmů.'
        : 'We started with a vision to automate business processes using cutting-edge AI technologies and machine learning algorithms.',
      achievement: lang === 'cs' ? 'První AI řešení' : 'First AI Solution',
      icon: Rocket,
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      glowColor: 'shadow-blue-500/50',
      progress: 25
    },
    {
      year: '2021',
      title: lang === 'cs' ? 'Růst týmu a technologií' : 'Team & Technology Growth',
      description: lang === 'cs'
        ? 'Rozšířili jsme tým o experty v oblasti AI, machine learning a vyvinuli jsme proprietární algoritmy pro automatizaci.'
        : 'We expanded our team with AI and machine learning experts and developed proprietary algorithms for automation.',
      achievement: lang === 'cs' ? '15+ projektů dokončeno' : '15+ Projects Completed',
      icon: Brain,
      color: 'from-green-500 via-emerald-600 to-teal-500',
      glowColor: 'shadow-green-500/50',
      progress: 50
    },
    {
      year: '2022',
      title: lang === 'cs' ? 'Průlom v AI automatizaci' : 'AI Automation Breakthrough',
      description: lang === 'cs'
        ? 'Dosáhli jsme významného průlomu ve vývoji custom AI systémů a začali jsme nabízet komplexní automatizační řešení.'
        : 'We achieved a significant breakthrough in custom AI systems development and started offering comprehensive automation solutions.',
      achievement: lang === 'cs' ? '50+ spokojených klientů' : '50+ Happy Clients',
      icon: Cpu,
      color: 'from-purple-500 via-violet-600 to-indigo-500',
      glowColor: 'shadow-purple-500/50',
      progress: 75
    },
    {
      year: '2023',
      title: lang === 'cs' ? 'Expanze a inovace' : 'Expansion & Innovation',
      description: lang === 'cs'
        ? 'Rozšířili jsme naše služby o AI školení, VPS hosting a stali jsme se předním poskytovatelem AI řešení v regionu.'
        : 'We expanded our services to include AI training, VPS hosting, and became a leading AI solutions provider in the region.',
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-accent-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

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
          {/* Background Progress Bar */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary/20 to-accent-primary/10 rounded-full" />
          
          {/* Animated Progress Bar */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-primary via-accent-primary to-accent-primary/60 rounded-full origin-top"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5,
                    }}
                    className={`relative p-8 rounded-3xl backdrop-blur-2xl border border-accent-primary/20 bg-gradient-to-br from-bg-secondary/80 to-bg-secondary/40 group overflow-hidden ${milestone.glowColor} hover:shadow-2xl transition-all duration-500`}
                    style={{
                      willChange: 'transform',
                      transform: 'translate3d(0, 0, 0)',
                    }}
                  >
                    {/* Card Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      animate={activeIndex === index ? { opacity: 0.1 } : { opacity: 0 }}
                    />

                    {/* Year Badge */}
                    <motion.div
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Achievement Badge */}
                    <motion.div
                      className="inline-flex items-center px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary font-medium text-sm backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      {milestone.achievement}
                    </motion.div>

                    {/* Progress Indicator */}
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

                {/* Central Icon */}
                <div className="w-2/12 flex justify-center">
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

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
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
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-accent-primary/30"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}

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
