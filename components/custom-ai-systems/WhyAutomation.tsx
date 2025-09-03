'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Zap, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/getDictionary';

interface WhyAutomationProps {
  dict: any;
  lang: Locale;
}

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startCount) + startCount));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black text-accent-primary"
    >
      {count}{suffix}
    </motion.div>
  );
}

export default function WhyAutomation({ dict, lang }: WhyAutomationProps) {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: lang === 'cs' ? 'Efektivita procesů' : 'Process Efficiency',
      description: lang === 'cs'
        ? 'Automatizujte opakující se úkoly a uvolněte svůj tým pro strategičtější práci. Naše AI systémy dokáží zkrátit rutinní procesy až o 80 %.'
        : 'Automate repetitive tasks and free up your team for more strategic and creative work. Our AI systems streamline operations and reduce task time by up to 80%.',
      stat: { number: 80, suffix: '%' },
      statLabel: lang === 'cs' ? 'úspora času' : 'time saved'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: lang === 'cs' ? 'Snížení nákladů' : 'Cost Reduction',
      description: lang === 'cs'
        ? 'Naše AI řešení pracují 24/7 bez přestávek, automatizují klíčové procesy a dokáží snížit provozní náklady až o 60 %, aniž by byla ohrožena kvalita služeb.'
        : 'Our AI-powered solutions work 24/7 without breaks, automate critical workflows, and reduce operational costs by up to 60% without compromising quality.',
      stat: { number: 60, suffix: '%' },
      statLabel: lang === 'cs' ? 'snížení nákladů' : 'cost reduction'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: lang === 'cs' ? 'Konkurenční výhoda' : 'Competitive Advantage',
      description: lang === 'cs'
        ? 'Získejte náskok s nejmodernějšími AI technologiemi a automatizacemi na míru. Naši klienti dosahují až 3× rychlejšího růstu.'
        : 'Gain an edge with cutting-edge AI technologies and custom automation solutions that help your business grow up to 3× faster than the competition.',
      stat: { number: 3, suffix: 'x' },
      statLabel: lang === 'cs' ? 'rychlejší růst' : 'faster growth'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: lang === 'cs' ? 'Škálovatelnost' : 'Scalability',
      description: lang === 'cs'
        ? 'Naše AI systémy rostou společně s vaším podnikáním. Díky chytré architektuře zvládnete 10× větší výkon bez navyšování týmu.'
        : 'Our AI systems scale seamlessly as your business grows, allowing you to handle up to 10× more operations without increasing your team size.',
      stat: { number: 10, suffix: 'x' },
      statLabel: lang === 'cs' ? 'škálovatelnost' : 'scalability'
    }
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                Proč je{' '}
                <span className="text-accent-primary">AI automatizace</span>{' '}
                klíčová pro růst vašeho byznysu
              </>
            ) : (
              <>
                Why{' '}
                <span className="text-accent-primary">automation</span>{' '}
                matters
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'V dnešním rychlém světě rozhoduje rychlost, efektivita a škálovatelnost. Naše AI systémy a inteligentní agenti vám pomohou automatizovat klíčové procesy, snížit náklady a získat konkurenční náskok.'
              : 'In today\'s rapidly changing world, automation is key to maintaining competitiveness and growth'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, y: 4, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-accent-primary/30 transition-all duration-700 hover:scale-[1.005]"
            >
              <div className="flex items-start space-x-6">
                <div className="text-accent-primary group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  {benefit.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <AnimatedCounter 
                      end={benefit.stat.number} 
                      suffix={benefit.stat.suffix}
                    />
                    <span className="text-text-secondary font-medium">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
