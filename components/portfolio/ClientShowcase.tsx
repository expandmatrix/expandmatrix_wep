'use client';

import { motion } from 'framer-motion';
import { Building2, Zap, TrendingUp, Shield, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ClientShowcaseProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function ClientShowcase({ dict, lang }: ClientShowcaseProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clients = [
    {
      name: "TechCorp Solutions",
      icon: <Building2 className="w-6 h-6" />,
      industry: lang === 'cs' ? 'Technologie' : 'Technology',
      description: lang === 'cs' 
        ? 'Automatizace zákaznického servisu pomocí AI chatbotů'
        : 'Customer service automation using AI chatbots',
      metrics: lang === 'cs' ? '75% snížení čekacích dob' : '75% reduction in waiting times',
      color: 'from-blue-500/10 to-cyan-500/10',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      name: "RetailMax",
      icon: <TrendingUp className="w-6 h-6" />,
      industry: lang === 'cs' ? 'E-commerce' : 'E-commerce',
      description: lang === 'cs'
        ? 'Prediktivní analýza prodeje a optimalizace zásob'
        : 'Predictive sales analysis and inventory optimization',
      metrics: lang === 'cs' ? '40% snížení zásob' : '40% inventory reduction',
      color: 'from-purple-500/10 to-pink-500/10',
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    },
    {
      name: "FinanceFlow",
      icon: <Shield className="w-6 h-6" />,
      industry: lang === 'cs' ? 'Finance' : 'Finance', 
      description: lang === 'cs'
        ? 'Automatizace zpracování faktur a compliance'
        : 'Invoice processing automation and compliance',
      metrics: lang === 'cs' ? '85% rychlejší zpracování' : '85% faster processing',
      color: 'from-emerald-500/10 to-teal-500/10',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/20'
    },
    {
      name: "HealthTech Pro",
      icon: <Zap className="w-6 h-6" />,
      industry: lang === 'cs' ? 'Zdravotnictví' : 'Healthcare',
      description: lang === 'cs'
        ? 'AI diagnostika a analýza lékařských dat'
        : 'AI diagnostics and medical data analysis',
      metrics: lang === 'cs' ? '300% nárůst efektivity' : '300% efficiency increase',
      color: 'from-orange-500/10 to-red-500/10',
      accentColor: 'text-orange-400',
      borderColor: 'border-orange-500/20'
    }
  ];

  if (!mounted) {
    return (
      <section className="py-20 md:py-32 bg-bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="h-12 bg-white/5 rounded-lg mb-6 animate-pulse max-w-md mx-auto"></div>
            <div className="h-6 bg-white/5 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 bg-white/5 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-white/[0.01] to-transparent rounded-full blur-3xl"></div>
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
              ? (<>Naši <span className="text-accent-primary">klienti</span></>)
              : (<>Our <span className="text-accent-primary">Clients</span></>)}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Spolupracujeme s předními společnostmi napříč různými odvětvími a pomáháme jim dosahovat výjimečných výsledků'
              : 'We work with leading companies across various industries, helping them achieve exceptional results'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={`client-${index}`}
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
                className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border ${client.borderColor} rounded-3xl p-6 md:p-8 h-full transition-all duration-300 overflow-hidden`}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${client.color} backdrop-blur-sm border border-white/10 flex items-center justify-center ${client.accentColor}`}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {client.icon}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className={`w-5 h-5 ${client.accentColor} opacity-60`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {client.name}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${client.color} backdrop-blur-sm border border-white/10`}>
                      <span className={`text-xs font-semibold ${client.accentColor} uppercase tracking-wider`}>
                        {client.industry}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {client.description}
                  </p>

                  {/* Metrics */}
                  <motion.div 
                    className={`mt-6 p-4 rounded-2xl bg-gradient-to-br ${client.color} backdrop-blur-sm border border-white/10`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`text-lg font-black ${client.accentColor} mb-1`}>
                      {client.metrics.split(' ')[0]}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {client.metrics.split(' ').slice(1).join(' ')}
                    </div>
                  </motion.div>
                </div>

                {/* Subtle glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${client.color}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
