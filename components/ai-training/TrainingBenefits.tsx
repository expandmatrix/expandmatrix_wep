'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Users, Award, Target, Brain, Rocket } from 'lucide-react';

interface TrainingBenefitsProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function TrainingBenefits({ dict, lang }: TrainingBenefitsProps) {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: lang === 'cs' ? 'Zvýšení produktivity' : 'Increased Productivity',
      description: lang === 'cs' 
        ? 'Automatizace rutinních úkolů a optimalizace pracovních procesů pomocí AI'
        : 'Automate routine tasks and optimize work processes using AI',
      stats: lang === 'cs' ? '+40% efektivita' : '+40% efficiency'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: lang === 'cs' ? 'Praktické znalosti' : 'Practical Knowledge',
      description: lang === 'cs'
        ? 'Hands-on přístup s reálnými projekty a okamžitou aplikací naučeného'
        : 'Hands-on approach with real projects and immediate application of learning',
      stats: lang === 'cs' ? '100% praktické' : '100% practical'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: lang === 'cs' ? 'Oficiální certifikace' : 'Official Certification',
      description: lang === 'cs'
        ? 'Získejte uznávané certifikáty, které posílí vaši profesní hodnotu'
        : 'Get recognized certificates that enhance your professional value',
      stats: lang === 'cs' ? 'Celosvětově uznávané' : 'Globally recognized'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: lang === 'cs' ? 'Týmová spolupráce' : 'Team Collaboration',
      description: lang === 'cs'
        ? 'Naučte se efektivně implementovat AI řešení v týmovém prostředí'
        : 'Learn to effectively implement AI solutions in team environment',
      stats: lang === 'cs' ? 'Až 20 lidí' : 'Up to 20 people'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: lang === 'cs' ? 'Rychlý start' : 'Quick Start',
      description: lang === 'cs'
        ? 'Začněte používat AI nástroje již během prvního týdne školení'
        : 'Start using AI tools during the first week of training',
      stats: lang === 'cs' ? '7 dní' : '7 days'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: lang === 'cs' ? 'Pokračující podpora' : 'Ongoing Support',
      description: lang === 'cs'
        ? '6 měsíců bezplatné podpory a aktualizací po dokončení kurzu'
        : '6 months of free support and updates after course completion',
      stats: lang === 'cs' ? '6 měsíců zdarma' : '6 months free'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-secondary/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${10 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.4, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Proč si vybrat ' : 'Why Choose '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'Naše Školení' : 'Our Training'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Naše AI školení přináší měřitelné výsledky a dlouhodobou hodnotu pro váš tým'
              : 'Our AI training delivers measurable results and long-term value for your team'
            }
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, y: 6, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative"
            >
              <motion.div
                className="relative p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-accent-primary/30 transition-all duration-700 hover:scale-[1.02] h-full"
              >
                {/* Floating Icon */}
                <motion.div
                  className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300"
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
                  {benefit.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className="mt-auto">
                  <div className="inline-flex items-center px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary text-sm font-semibold">
                    {benefit.stats}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0.4, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary font-bold rounded-full transition-all duration-300"
            >
              {lang === 'cs' ? 'Rezervovat konzultaci' : 'Book Consultation'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-accent-primary/30 text-accent-primary font-bold rounded-full hover:bg-accent-primary/10 transition-all duration-300"
            >
              {lang === 'cs' ? 'Stáhnout brožuru' : 'Download Brochure'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
