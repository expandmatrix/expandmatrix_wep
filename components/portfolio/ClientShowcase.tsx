'use client';

import { motion } from 'framer-motion';
import { Building2, Zap, Shield, Heart, Cpu, TrendingUp } from 'lucide-react';

interface ClientShowcaseProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function ClientShowcase({ dict, lang }: ClientShowcaseProps) {
  const clients = [
    {
      name: "TechCorp Solutions",
      icon: <Cpu className="w-8 h-8" />,
      industry: lang === 'cs' ? 'Technologie' : 'Technology',
      description: lang === 'cs' 
        ? 'Automatizace zákaznického servisu pomocí AI chatbotů'
        : 'Customer service automation using AI chatbots',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20',
      borderGradient: 'from-blue-500/30 to-cyan-500/30'
    },
    {
      name: "RetailMax",
      icon: <TrendingUp className="w-8 h-8" />,
      industry: lang === 'cs' ? 'E-commerce' : 'E-commerce',
      description: lang === 'cs'
        ? 'Prediktivní analýza prodeje a optimalizace zásob'
        : 'Predictive sales analysis and inventory optimization',
      gradient: 'from-green-500/20 via-emerald-500/20 to-green-600/20',
      borderGradient: 'from-green-500/30 to-emerald-500/30'
    },
    {
      name: "FinanceFlow",
      icon: <Shield className="w-8 h-8" />,
      industry: lang === 'cs' ? 'Finance' : 'Finance', 
      description: lang === 'cs'
        ? 'Automatizace zpracování faktur a compliance'
        : 'Invoice processing automation and compliance',
      gradient: 'from-purple-500/20 via-pink-500/20 to-purple-600/20',
      borderGradient: 'from-purple-500/30 to-pink-500/30'
    },
    {
      name: "HealthTech Pro",
      icon: <Heart className="w-8 h-8" />,
      industry: lang === 'cs' ? 'Zdravotnictví' : 'Healthcare',
      description: lang === 'cs'
        ? 'AI diagnostika a analýza lékařských dat'
        : 'AI diagnostics and medical data analysis',
      gradient: 'from-red-500/20 via-orange-500/20 to-red-600/20',
      borderGradient: 'from-red-500/30 to-orange-500/30'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-bg-secondary/20 to-bg-primary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl" />
      
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
            {lang === 'cs' ? 'Naši ' : 'Our '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'klienti' : 'Clients'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'cs'
              ? 'Spolupracujeme s předními společnostmi napříč různými odvětvími a transformujeme jejich business pomocí AI.'
              : 'We collaborate with leading companies across various industries, transforming their business with AI.'
            }
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, y: 6, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative"
            >
              {/* Card container with liquid glass morphism */}
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-700 ease-out hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,127,0.1)]">
                
                {/* Top gradient line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Icon with dynamic gradient background */}
                <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${client.gradient} backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-accent-primary relative z-10">
                    {client.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.borderGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-black text-text-primary mb-3 group-hover:text-accent-primary/90 transition-colors duration-300">
                    {client.name}
                  </h3>
                  <div className="text-accent-primary text-sm font-bold mb-4 uppercase tracking-wider">
                    {client.industry}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {client.description}
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
