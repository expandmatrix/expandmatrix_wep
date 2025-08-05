'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingUp, Zap, Users, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SuccessMetricsProps {
  dict: any;
  lang: 'cs' | 'en';
}

const AnimatedCounter = ({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{prefix}{count}{suffix}</span>;
};

export default function SuccessMetrics({ dict, lang }: SuccessMetricsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const metrics = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: 2000000,
      suffix: '+',
      label: lang === 'cs' ? 'Ušetřených hodin' : 'Hours Saved',
      description: lang === 'cs' 
        ? 'Celkový čas ušetřený automatizací procesů'
        : 'Total time saved through process automation',
      color: 'from-blue-500/10 to-cyan-500/10',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: 40,
      suffix: '%',
      label: lang === 'cs' ? 'Snížení nákladů' : 'Cost Reduction',
      description: lang === 'cs'
        ? 'Průměrné snížení provozních nákladů'
        : 'Average operational cost reduction',
      color: 'from-emerald-500/10 to-teal-500/10',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/20'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 300,
      suffix: '%',
      label: lang === 'cs' ? 'Nárůst efektivity' : 'Efficiency Increase',
      description: lang === 'cs'
        ? 'Zlepšení výkonnosti automatizovaných procesů'
        : 'Performance improvement in automated processes',
      color: 'from-purple-500/10 to-pink-500/10',
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: 150,
      suffix: '+',
      label: lang === 'cs' ? 'Automatizovaných procesů' : 'Automated Processes',
      description: lang === 'cs'
        ? 'Celkový počet úspěšně automatizovaných procesů'
        : 'Total number of successfully automated processes',
      color: 'from-orange-500/10 to-red-500/10',
      accentColor: 'text-orange-400',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 95,
      suffix: '%',
      label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction',
      description: lang === 'cs'
        ? 'Míra spokojenosti našich klientů'
        : 'Client satisfaction rate',
      color: 'from-indigo-500/10 to-blue-500/10',
      accentColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/20'
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: 50,
      suffix: '+',
      label: lang === 'cs' ? 'Úspěšných projektů' : 'Successful Projects',
      description: lang === 'cs'
        ? 'Počet dokončených a úspěšných projektů'
        : 'Number of completed successful projects',
      color: 'from-rose-500/10 to-pink-500/10',
      accentColor: 'text-rose-400',
      borderColor: 'border-rose-500/20'
    }
  ];

  if (!mounted) {
    return (
      <section className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="h-12 bg-white/5 rounded-lg mb-6 animate-pulse max-w-lg mx-auto"></div>
            <div className="h-6 bg-white/5 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-white/5 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-white/[0.01] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs'
              ? (<>Naše <span className="text-accent-primary">úspěchy</span> v číslech</>)
              : (<>Our <span className="text-accent-primary">Success</span> in Numbers</>)}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Konkrétní výsledky, které jsme dosáhli pro naše klienty napříč různými odvětvími a projekty'
              : 'Concrete results we\'ve achieved for our clients across various industries and projects'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={`metric-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <motion.div
                className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border ${metric.borderColor} rounded-3xl p-6 md:p-8 h-full text-center transition-all duration-300 overflow-hidden`}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${metric.color} backdrop-blur-sm border border-white/10 flex items-center justify-center ${metric.accentColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {metric.icon}
                </motion.div>

                {/* Animated Counter */}
                <motion.div 
                  className="text-4xl md:text-5xl font-black text-text-primary mb-4"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </motion.div>

                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                  {metric.label}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Subtle glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${metric.color}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
