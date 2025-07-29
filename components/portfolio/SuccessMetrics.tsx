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
  const metrics = [
    {
      icon: <Clock className="w-10 h-10" />,
      value: 2000000,
      suffix: '+',
      label: lang === 'cs' ? 'Ušetřených hodin' : 'Hours Saved',
      description: lang === 'cs' 
        ? 'Celkový čas ušetřený automatizací procesů'
        : 'Total time saved through process automation'
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      value: 40,
      suffix: '%',
      label: lang === 'cs' ? 'Snížení nákladů' : 'Cost Reduction',
      description: lang === 'cs'
        ? 'Průměrné snížení provozních nákladů'
        : 'Average operational cost reduction'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      value: 300,
      suffix: '%',
      label: lang === 'cs' ? 'Nárůst efektivity' : 'Efficiency Increase',
      description: lang === 'cs'
        ? 'Zlepšení výkonnosti automatizovaných procesů'
        : 'Performance improvement in automated processes'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      value: 150,
      suffix: '+',
      label: lang === 'cs' ? 'Automatizovaných procesů' : 'Automated Processes',
      description: lang === 'cs'
        ? 'Celkový počet úspěšně automatizovaných procesů'
        : 'Total number of successfully automated processes'
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: 95,
      suffix: '%',
      label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction',
      description: lang === 'cs'
        ? 'Míra spokojenosti našich klientů'
        : 'Client satisfaction rate'
    },
    {
      icon: <Target className="w-10 h-10" />,
      value: 50,
      suffix: '+',
      label: lang === 'cs' ? 'Úspěšných projektů' : 'Successful Projects',
      description: lang === 'cs'
        ? 'Počet dokončených a úspěšných projektů'
        : 'Number of completed successful projects'
    }
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Dynamic Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-accent-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-accent-primary/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs'
              ? (<>Naše <span className="text-accent-primary">úspěchy</span> v číslech</>)
              : (<>Our <span className="text-accent-primary">Success</span> in Numbers</>)}
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Konkrétní výsledky, které jsme dosáhli pro naše klienty napříč různými odvětvími a projekty'
              : 'Concrete results we\'ve achieved for our clients across various industries and projects'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="h-full p-10 rounded-3xl liquid-glass-card border border-accent-primary/10 text-center relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(0, 255, 127, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(0, 255, 127, 0.15) 0%, transparent 70%)'
                  }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className="text-accent-primary mb-8 flex justify-center relative"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 scale-150"></div>
                  <div className="relative z-10">
                    {metric.icon}
                  </div>
                </motion.div>

                {/* Animated Counter */}
                <motion.div 
                  className="text-5xl md:text-6xl font-black text-text-primary mb-4"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </motion.div>

                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {metric.label}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-accent-primary/0 group-hover:border-accent-primary/30 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(0, 255, 127, 0.1), transparent)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
