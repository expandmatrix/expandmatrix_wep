'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface AIPackagesComparisonProps {
  dict: any;
  lang: Locale;
}

export default function AIPackagesComparison({ dict, lang }: AIPackagesComparisonProps) {
  const features = [
    {
      category: lang === 'cs' ? 'Základní funkce' : 'Basic Features',
      items: [
        {
          name: lang === 'cs' ? 'AI Chatbot' : 'AI Chatbot',
          starter: true,
          professional: true,
          enterprise: true,
          custom: true
        },
        {
          name: lang === 'cs' ? 'Automatizace procesů' : 'Process Automation',
          starter: '3-5',
          professional: '10-15',
          enterprise: lang === 'cs' ? 'Neomezeno' : 'Unlimited',
          custom: lang === 'cs' ? 'Dle potřeb' : 'As needed'
        },
        {
          name: lang === 'cs' ? 'Integrace systémů' : 'System Integrations',
          starter: '2',
          professional: '5+',
          enterprise: lang === 'cs' ? 'Neomezeno' : 'Unlimited',
          custom: lang === 'cs' ? 'Dle potřeb' : 'As needed'
        }
      ]
    },
    {
      category: lang === 'cs' ? 'Pokročilé funkce' : 'Advanced Features',
      items: [
        {
          name: lang === 'cs' ? 'Custom AI modely' : 'Custom AI Models',
          starter: false,
          professional: true,
          enterprise: true,
          custom: true
        },
        {
          name: lang === 'cs' ? 'Prediktivní analýzy' : 'Predictive Analytics',
          starter: false,
          professional: true,
          enterprise: true,
          custom: true
        },
        {
          name: lang === 'cs' ? 'White-label řešení' : 'White-label Solutions',
          starter: false,
          professional: false,
          enterprise: true,
          custom: true
        }
      ]
    },
    {
      category: lang === 'cs' ? 'Podpora' : 'Support',
      items: [
        {
          name: lang === 'cs' ? 'Doba odezvy' : 'Response Time',
          starter: '48h',
          professional: '24h',
          enterprise: '24/7',
          custom: lang === 'cs' ? 'Dle dohody' : 'By agreement'
        },
        {
          name: lang === 'cs' ? 'Dedikovaný tým' : 'Dedicated Team',
          starter: false,
          professional: false,
          enterprise: true,
          custom: true
        },
        {
          name: lang === 'cs' ? 'Školení týmu' : 'Team Training',
          starter: false,
          professional: lang === 'cs' ? 'Základní' : 'Basic',
          enterprise: lang === 'cs' ? 'Kompletní' : 'Complete',
          custom: lang === 'cs' ? 'Dle potřeb' : 'As needed'
        }
      ]
    }
  ];

  const packages = ['Starter', 'Professional', 'Enterprise', 'Custom'];
  const packageColors = {
    'Professional': 'text-accent-primary'
  };

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-accent-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-text-secondary/50 mx-auto" />
      );
    }
    return <span className="text-text-secondary text-sm">{value}</span>;
  };

  return (
    <section className="py-32 bg-bg-secondary/20 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30" />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/20 rounded-full blur-sm"
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${25 + (i * 10) % 50}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Porovnání ' : 'Package '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'balíčků' : 'Comparison'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Detailní přehled funkcí a možností jednotlivých AI balíčků'
              : 'Detailed overview of features and capabilities of each AI package'
            }
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="liquid-glass-card rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-accent-primary/20">
                  <th className="text-left p-6 text-text-primary font-bold">
                    {lang === 'cs' ? 'Funkce' : 'Features'}
                  </th>
                  {packages.map((pkg, index) => (
                    <th key={pkg} className="text-center p-6 min-w-[120px]">
                      <div className={`font-bold ${packageColors[pkg] || 'text-text-primary'}`}>
                        {pkg === 'Professional' && (
                          <Star className="w-4 h-4 inline mr-1 text-accent-primary" />
                        )}
                        {pkg}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    {/* Category Header */}
                    <tr>
                      <td colSpan={5} className="p-6 pt-8">
                        <h3 className="text-lg font-bold text-accent-primary">
                          {category.category}
                        </h3>
                      </td>
                    </tr>
                    
                    {/* Category Items */}
                    {category.items.map((item, itemIndex) => (
                      <motion.tr
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (categoryIndex * 0.1) + (itemIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300"
                      >
                        <td className="p-4 text-text-secondary">
                          {item.name}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.starter)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.professional)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.enterprise)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.custom)}
                        </td>
                      </motion.tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Liquid Glass CSS */}
      <style jsx>{`
        .liquid-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 25px rgba(255, 255, 255, 0.05), 
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }
      `}</style>
    </section>
  );
}
