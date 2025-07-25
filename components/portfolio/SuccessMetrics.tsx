'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Target, Clock, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessMetricsProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function SuccessMetrics({ dict, lang }: SuccessMetricsProps) {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "50+",
      label: lang === 'cs' ? 'Spokojených klientů' : 'Happy Clients',
      description: lang === 'cs' ? 'Napříč všemi odvětvími' : 'Across all industries',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "200+",
      label: lang === 'cs' ? 'Automatizovaných procesů' : 'Automated Processes',
      description: lang === 'cs' ? 'Úspěšně nasazených' : 'Successfully deployed',
      gradient: 'from-green-500/20 to-emerald-500/20',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "85%",
      label: lang === 'cs' ? 'Úspora času' : 'Time Saved',
      description: lang === 'cs' ? 'V průměru u klientů' : 'Average client savings',
      gradient: 'from-purple-500/20 to-pink-500/20',
      glowColor: 'rgba(168, 85, 247, 0.3)'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "99%",
      label: lang === 'cs' ? 'Úspěšnost projektů' : 'Project Success Rate',
      description: lang === 'cs' ? 'Dokončeno včas' : 'Completed on time',
      gradient: 'from-orange-500/20 to-red-500/20',
      glowColor: 'rgba(249, 115, 22, 0.3)'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "24/7",
      label: lang === 'cs' ? 'Technická podpora' : 'Technical Support',
      description: lang === 'cs' ? 'Nepřetržitá dostupnost' : 'Continuous availability',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      glowColor: 'rgba(99, 102, 241, 0.3)'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "€2M+",
      label: lang === 'cs' ? 'Ušetřeno klientům' : 'Saved for Clients',
      description: lang === 'cs' ? 'Celkové úspory' : 'Total cost savings',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    }
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? 'Naše úspěchy ' : 'Our Success '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'v číslech' : 'in Numbers'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'cs' 
              ? 'Konkrétní výsledky našich AI řešení a jejich dopad na business našich klientů.'
              : 'Concrete results of our AI solutions and their impact on our clients\' business.'
            }
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, y: 6, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative"
              onViewportEnter={() => setIsVisible(true)}
            >
              {/* Card container with liquid glass morphism */}
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-700 ease-out hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,127,0.1)]">
                
                {/* Top gradient line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Icon with dynamic gradient background */}
                <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${metric.gradient} backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-accent-primary relative z-10">
                    {metric.icon}
                  </div>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: metric.glowColor }}
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-accent-primary mb-4 group-hover:scale-105 transition-transform duration-300"
                  >
                    {metric.value}
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary/90 transition-colors duration-300">
                    {metric.label}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
                
                {/* Card hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/[0.02] via-transparent to-accent-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* External card glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
