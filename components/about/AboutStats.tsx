'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

interface AboutStatsProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutStats({ dict, lang }: AboutStatsProps) {
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
      if (!isInView || hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return { count, ref: countRef };
  };

  const stats = [
    { 
      icon: Target, 
      value: 500, 
      suffix: '+', 
      label: lang === 'cs' ? 'Úspěšných projektů' : 'Successful Projects',
      color: 'text-accent-primary'
    },
    { 
      icon: Users, 
      value: 150, 
      suffix: '+', 
      label: lang === 'cs' ? 'Spokojených klientů' : 'Happy Clients',
      color: 'text-blue-400'
    },
    { 
      icon: TrendingUp, 
      value: 85, 
      suffix: '%', 
      label: lang === 'cs' ? 'Zvýšení efektivity' : 'Efficiency Increase',
      color: 'text-purple-400'
    },
    { 
      icon: Award, 
      value: 98, 
      suffix: '%', 
      label: lang === 'cs' ? 'Spokojenost klientů' : 'Client Satisfaction',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCounter(stat.value, 1500);
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group"
              >
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center group-hover:from-accent-primary/30 group-hover:to-accent-primary/20 transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-text-primary mb-2">
                    {count}{stat.suffix}
                  </div>
                  <p className="text-text-secondary font-medium">{stat.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}