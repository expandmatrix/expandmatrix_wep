'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target, Users, Award, Globe, Zap, TrendingUp, Star } from 'lucide-react';
import { useRef } from 'react';

interface AboutStoryProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutStory({ dict, lang }: AboutStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth timeline progress animation with better range
  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const timelineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8]);

  const milestones = [
    {
      year: '2020',
      title: lang === 'cs' ? 'Založení společnosti' : 'Company Founded',
      description: lang === 'cs' 
        ? 'Začali jsme s vizí automatizovat business procesy pomocí AI technologií.'
        : 'We started with a vision to automate business processes using AI technologies.',
      achievement: lang === 'cs' ? 'První AI řešení' : 'First AI Solution',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2021',
      title: lang === 'cs' ? 'Růst týmu' : 'Team Growth',
      description: lang === 'cs'
        ? 'Rozšířili jsme tým o experty v oblasti AI a machine learning.'
        : 'We expanded our team with AI and machine learning experts.',
      achievement: lang === 'cs' ? '10+ projektů' : '10+ Projects',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2022',
      title: lang === 'cs' ? 'Technologický průlom' : 'Technology Breakthrough',
      description: lang === 'cs'
        ? 'Vyvinuli jsme proprietární AI platformu pro automatizaci business procesů.'
        : 'We developed a proprietary AI platform for business process automation.',
      achievement: lang === 'cs' ? '50+ klientů' : '50+ Clients',
      icon: Target,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2023',
      title: lang === 'cs' ? 'Mezinárodní expanze' : 'International Expansion',
      description: lang === 'cs'
        ? 'Rozšířili jsme naše služby na mezinárodní trhy a získali prestižní ocenění.'
        : 'We expanded our services to international markets and received prestigious awards.',
      achievement: lang === 'cs' ? '100+ projektů' : '100+ Projects',
      icon: Globe,
      color: 'from-accent-primary to-accent-dark'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(0,255,127,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 75%, rgba(0,255,127,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(0,255,127,0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Reduced floating particles for better performance */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/20 rounded-full"
            style={{
              left: `${15 + (i * 14) % 70}%`,
              top: `${20 + (i * 12) % 60}%`,
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Naše ' : 'Our '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'Cesta' : 'Journey'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs' 
              ? 'Sledujte naši cestu od malého startupu k přednímu poskytovateli AI řešení'
              : 'Follow our journey from a small startup to a leading AI solutions provider'
            }
          </p>
        </motion.div>

        {/* Timeline - Optimized with better scroll tracking */}
        <div className="relative">
          {/* Central Timeline Line - Static */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary/30 via-accent-primary/20 to-transparent rounded-full" />
          
          {/* Timeline Progress - Scroll-based Animation */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-primary via-accent-primary to-accent-primary/80 rounded-full origin-top timeline-progress"
            style={{
              height: timelineHeight,
              opacity: timelineOpacity,
              willChange: 'height',
              transform: 'translate3d(-50%, 0, 0)',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* Milestones - Enhanced */}
          <div className="space-y-24">
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
              >
                {/* Content Card - Enhanced */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: index % 2 === 0 ? 5 : -5,
                      z: 50
                    }}
                    className="relative card-glass-enhanced rounded-3xl p-8 group overflow-hidden gpu-accelerated"
                    style={{
                      willChange: 'transform',
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Card Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                    
                    <div className="relative z-10">
                      {/* Year Badge */}
                      <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4"
                        whileHover={{ scale: 1.1 }}
                        style={{
                          willChange: 'transform',
                          transform: 'translate3d(0, 0, 0)',
                        }}
                      >
                        <span className="text-accent-primary font-bold text-lg">
                          {milestone.year}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Achievement Badge */}
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/5 border border-accent-primary/10">
                        <TrendingUp className="w-4 h-4 text-accent-primary mr-2" />
                        <span className="text-accent-primary font-semibold text-sm">
                          {milestone.achievement}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Central Icon - Enhanced */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: `0 0 30px ${milestone.color.includes('blue') ? '#3B82F6' : milestone.color.includes('green') ? '#10B981' : milestone.color.includes('orange') ? '#F59E0B' : milestone.color.includes('accent') ? '#00FF7F' : '#F59E0B'}40`
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} p-4 border-4 border-bg-primary shadow-2xl gpu-accelerated`}
                    style={{
                      willChange: 'transform',
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <milestone.icon className="w-full h-full text-white" />
                  </motion.div>
                </div>

                {/* Empty Space for Opposite Side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="relative card-glass-enhanced rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-dark p-5">
                <Star className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                {lang === 'cs' ? 'Naše Vize' : 'Our Vision'}
              </h3>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                {lang === 'cs' 
                  ? 'Pokračujeme v inovacích a vytváříme budoucnost automatizace business procesů pomocí nejmodernějších AI technologií.'
                  : 'We continue to innovate and shape the future of business process automation using cutting-edge AI technologies.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
