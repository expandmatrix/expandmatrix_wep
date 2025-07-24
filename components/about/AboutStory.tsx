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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const milestones = [
    {
      year: '2019',
      icon: Rocket,
      title: lang === 'cs' ? 'Založení společnosti' : 'Company Founded',
      description: lang === 'cs' 
        ? 'Expand Matrix vznikla s vizí demokratizovat AI technologie pro všechny firmy.'
        : 'Expand Matrix was founded with a vision to democratize AI technologies for all businesses.',
      achievement: lang === 'cs' ? 'První AI řešení' : 'First AI Solution',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      year: '2020',
      icon: Users,
      title: lang === 'cs' ? 'Rozšíření týmu' : 'Team Expansion',
      description: lang === 'cs'
        ? 'Přilákali jsme špičkové AI experty z Google, Microsoft a dalších tech gigantů.'
        : 'We attracted top AI experts from Google, Microsoft and other tech giants.',
      achievement: lang === 'cs' ? '15+ expertů' : '15+ Experts',
      color: 'from-purple-400 to-pink-400'
    },
    {
      year: '2021',
      icon: Target,
      title: lang === 'cs' ? 'První velké úspěchy' : 'First Major Success',
      description: lang === 'cs'
        ? 'Dosáhli jsme 100+ úspěšných projektů a získali první mezinárodní ocenění.'
        : 'We achieved 100+ successful projects and won our first international award.',
      achievement: lang === 'cs' ? '100+ projektů' : '100+ Projects',
      color: 'from-green-400 to-emerald-400'
    },
    {
      year: '2022',
      icon: Globe,
      title: lang === 'cs' ? 'Mezinárodní expanze' : 'International Expansion',
      description: lang === 'cs'
        ? 'Rozšířili jsme se do 5 zemí a etablovali jako vedoucí AI agentura v regionu.'
        : 'We expanded to 5 countries and established ourselves as the leading AI agency in the region.',
      achievement: lang === 'cs' ? '5 zemí' : '5 Countries',
      color: 'from-orange-400 to-red-400'
    },
    {
      year: '2023',
      icon: Award,
      title: lang === 'cs' ? 'Průlomové inovace' : 'Breakthrough Innovations',
      description: lang === 'cs'
        ? 'Vyvinuli jsme proprietární AI platformu a dosáhli 500+ spokojených klientů.'
        : 'We developed our proprietary AI platform and reached 500+ satisfied clients.',
      achievement: lang === 'cs' ? '500+ klientů' : '500+ Clients',
      color: 'from-accent-primary to-accent-dark'
    },
    {
      year: '2024',
      icon: Star,
      title: lang === 'cs' ? 'Budoucnost AI' : 'Future of AI',
      description: lang === 'cs'
        ? 'Pokračujeme v inovacích a formujeme budoucnost AI automatizace.'
        : 'We continue innovating and shaping the future of AI automation.',
      achievement: lang === 'cs' ? 'Nekonečné možnosti' : 'Infinite Possibilities',
      color: 'from-yellow-400 to-amber-400'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/30 rounded-full"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Naše cesta' : 'Our Journey'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Od malého startupu k vedoucí AI agentuře - objevte klíčové milníky naší transformace'
              : 'From a small startup to a leading AI agency - discover the key milestones of our transformation'
            }
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary via-accent-primary/50 to-transparent rounded-full" />
          
          {/* Timeline Progress */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent-primary rounded-full origin-top"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
            }}
          />

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="relative bg-bg-secondary/80 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20 group overflow-hidden"
                  >
                    {/* Card Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                    
                    <div className="relative z-10">
                      {/* Year Badge */}
                      <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4"
                        whileHover={{ scale: 1.1 }}
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

                {/* Central Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} p-4 border-4 border-bg-primary shadow-2xl`}
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 relative"
        >
          <div className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl rounded-3xl p-12 border border-accent-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-20 h-20 mx-auto mb-8"
              >
                <Zap className="w-full h-full text-accent-primary" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                {lang === 'cs' ? 'Naše vize do budoucna' : 'Our Vision for the Future'}
              </h3>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                {lang === 'cs'
                  ? 'Pokračujeme v inovacích a vytváříme AI řešení, která nejen automatizují procesy, ale skutečně transformují způsob, jakým firmy fungují. Naším cílem je být průkopníky v éře inteligentní automatizace.'
                  : 'We continue to innovate and create AI solutions that not only automate processes, but truly transform the way businesses operate. Our goal is to be pioneers in the era of intelligent automation.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
