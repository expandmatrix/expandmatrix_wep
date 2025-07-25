'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Award, CheckCircle, Clock, ArrowRight } from 'lucide-react';

interface LearningPathProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function LearningPath({ dict, lang }: LearningPathProps) {
  const steps = [
    {
      icon: <Play className="w-6 h-6" />,
      title: lang === 'cs' ? 'Vstupní hodnocení' : 'Initial Assessment',
      description: lang === 'cs' 
        ? 'Zhodnotíme vaše současné znalosti a dovednosti v oblasti AI'
        : 'We assess your current knowledge and skills in AI',
      duration: '1 den',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: lang === 'cs' ? 'Praktické školení' : 'Practical Training',
      description: lang === 'cs'
        ? 'Hands-on přístup s reálnými projekty a případovými studiemi'
        : 'Hands-on approach with real projects and case studies',
      duration: '4-8 týdnů',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: lang === 'cs' ? 'Certifikace' : 'Certification',
      description: lang === 'cs'
        ? 'Získejte oficiální certifikát a pokračující podporu'
        : 'Get official certification and ongoing support',
      duration: '1 týden',
    }
  ];

  return (
    <section className="py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background stejný jako na home */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Cesta k ' : 'Path to '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'Úspěchu' : 'Success'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Náš strukturovaný přístup k AI vzdělávání zajišťuje maximální efektivitu učení'
              : 'Our structured approach to AI education ensures maximum learning efficiency'
            }
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-bg-primary/50 rounded-2xl border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {step.description}
              </p>
              <div className="flex items-center text-sm text-accent-primary">
                <Clock className="w-4 h-4 mr-2" />
                {step.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-cta-large inline-flex items-center"
          >
            {lang === 'cs' ? 'Začít svou cestu' : 'Start Your Journey'}
            <ArrowRight className="w-6 h-6 ml-3" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
