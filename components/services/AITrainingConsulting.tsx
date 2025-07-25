'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Target, CheckCircle } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AITrainingConsultingProps {
  dict: any;
  lang: Locale;
}

export default function AITrainingConsulting({ dict, lang }: AITrainingConsultingProps) {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: lang === 'cs' ? 'AI Školení' : 'AI Training',
      description: lang === 'cs' ? 'Komplexní školení vašeho týmu v oblasti AI technologií' : 'Comprehensive training of your team in AI technologies',
      features: lang === 'cs' ? [
        'Základy umělé inteligence',
        'Praktické workshopy',
        'Certifikace týmu',
        'Pokračující podpora'
      ] : [
        'AI fundamentals',
        'Practical workshops',
        'Team certification',
        'Ongoing support'
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: lang === 'cs' ? 'AI Konzultace' : 'AI Consulting',
      description: lang === 'cs' ? 'Strategické poradenství pro implementaci AI ve vaší firmě' : 'Strategic consulting for AI implementation in your company',
      features: lang === 'cs' ? [
        'AI strategie',
        'Analýza procesů',
        'ROI kalkulace',
        'Implementační plán'
      ] : [
        'AI strategy',
        'Process analysis',
        'ROI calculation',
        'Implementation plan'
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: lang === 'cs' ? 'Vzdělávací programy' : 'Educational Programs',
      description: lang === 'cs' ? 'Dlouhodobé vzdělávací programy pro rozvoj AI kompetencí' : 'Long-term educational programs for AI competency development',
      features: lang === 'cs' ? [
        '3-6 měsíční programy',
        'Mentoring',
        'Praktické projekty',
        'Kariérní rozvoj'
      ] : [
        '3-6 month programs',
        'Mentoring',
        'Practical projects',
        'Career development'
      ]
    }
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                AI školení &{' '}
                <span className="text-accent-primary relative">
                  konzultace
                </span>
              </>
            ) : (
              <>
                AI Training &{' '}
                <span className="text-accent-primary relative">
                  Consulting
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs' 
              ? 'Připravte svůj tým na budoucnost s našimi odbornými školeními a konzultacemi'
              : 'Prepare your team for the future with our expert training and consulting services'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-accent-primary/30 transition-all duration-700 hover:scale-[1.02]"
            >
              <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm">
            <Target className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'Individuální přístup ke každému klientovi' : 'Individual approach to each client'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
