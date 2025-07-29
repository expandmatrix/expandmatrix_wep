'use client';

import { motion } from 'framer-motion';
import { Building2, Zap, TrendingUp, Shield } from 'lucide-react';
import { stableRandom } from '@/lib/stableRandom';

interface ClientShowcaseProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function ClientShowcase({ dict, lang }: ClientShowcaseProps) {
  const clients = [
    {
      name: "TechCorp Solutions",
      icon: <Building2 className="w-8 h-8" />,
      industry: lang === 'cs' ? 'Technologie' : 'Technology',
      description: lang === 'cs' 
        ? 'Automatizace zákaznického servisu pomocí AI chatbotů'
        : 'Customer service automation using AI chatbots',
      metrics: lang === 'cs' ? '75% snížení čekacích dob' : '75% reduction in waiting times'
    },
    {
      name: "RetailMax",
      icon: <TrendingUp className="w-8 h-8" />,
      industry: lang === 'cs' ? 'E-commerce' : 'E-commerce',
      description: lang === 'cs'
        ? 'Prediktivní analýza prodeje a optimalizace zásob'
        : 'Predictive sales analysis and inventory optimization',
      metrics: lang === 'cs' ? '40% snížení zásob' : '40% inventory reduction'
    },
    {
      name: "FinanceFlow",
      icon: <Shield className="w-8 h-8" />,
      industry: lang === 'cs' ? 'Finance' : 'Finance', 
      description: lang === 'cs'
        ? 'Automatizace zpracování faktur a compliance'
        : 'Invoice processing automation and compliance',
      metrics: lang === 'cs' ? '85% rychlejší zpracování' : '85% faster processing'
    },
    {
      name: "HealthTech Pro",
      icon: <Zap className="w-8 h-8" />,
      industry: lang === 'cs' ? 'Zdravotnictví' : 'Healthcare',
      description: lang === 'cs'
        ? 'AI diagnostika a analýza lékařských dat'
        : 'AI diagnostics and medical data analysis',
      metrics: lang === 'cs' ? '300% nárůst efektivity' : '300% efficiency increase'
    }
  ];

  return (
    <section className="py-32 bg-bg-secondary relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,127,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,127,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-accent-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent-primary/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Particle System */}
        {Array.from({ length: 15 }).map((_, i) => {
          const left = `${stableRandom(i + 1) * 100}%`;
          const top = `${stableRandom(i + 21) * 100}%`;
          const duration = 4 + stableRandom(i + 41) * 2;
          const delay = stableRandom(i + 61) * 2;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-primary/20 rounded-full"
              style={{ left, top }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
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
              ? (<>
                  Naši <span className="text-accent-primary">klienti</span>
                </>)
              : (<>
                  Our <span className="text-accent-primary">Clients</span>
                </>)}
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Spolupracujeme s předními společnostmi napříč různými odvětvími a pomáháme jim dosahovat výjimečných výsledků'
              : 'We work with leading companies across various industries, helping them achieve exceptional results'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="h-full p-8 rounded-3xl liquid-glass-card border border-accent-primary/10 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(0, 255, 127, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(0, 255, 127, 0.1) 0%, transparent 70%)'
                  }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 rounded-2xl flex items-center justify-center text-accent-primary relative"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-accent-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative z-10">
                    {client.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-text-primary mb-3 text-center">
                  {client.name}
                </h3>
                
                <div className="text-accent-primary text-sm font-semibold mb-4 text-center uppercase tracking-wider">
                  {client.industry}
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6 text-center">
                  {client.description}
                </p>

                {/* Metrics Badge */}
                <motion.div 
                  className="bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full px-4 py-2 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-accent-primary font-semibold text-xs">
                    {client.metrics}
                  </div>
                </motion.div>

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
                    duration: 3,
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
