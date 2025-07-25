'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight, Zap, Users, Building, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface AIPackagesGridProps {
  dict: any;
  lang: Locale;
}

export default function AIPackagesGrid({ dict, lang }: AIPackagesGridProps) {
  const packages = [
    {
      name: 'Starter',
      icon: <Zap className="w-8 h-8" />,
      price: lang === 'cs' ? 'Od 50 000 Kč' : 'From $2,000',
      priceNote: lang === 'cs' ? '/měsíc' : '/month',
      description: lang === 'cs' ? 'Ideální pro malé firmy a startupy začínající s AI' : 'Perfect for small businesses and startups starting with AI',
      features: lang === 'cs' ? [
        'Základní AI chatbot pro web',
        'Automatizace 3-5 procesů',
        'Email podpora (48h)',
        'Základní analytics dashboard',
        'Integrace s 2 systémy',
        'Měsíční reporty'
      ] : [
        'Basic AI chatbot for website',
        'Automation of 3-5 processes',
        'Email support (48h)',
        'Basic analytics dashboard',
        'Integration with 2 systems',
        'Monthly reports'
      ],
      popular: false,
      bestFor: lang === 'cs' ? 'Firmy 1-50 zaměstnanců' : 'Companies 1-50 employees'
    },
    {
      name: 'Professional',
      icon: <Users className="w-8 h-8" />,
      price: lang === 'cs' ? 'Od 150 000 Kč' : 'From $6,000',
      priceNote: lang === 'cs' ? '/měsíc' : '/month',
      description: lang === 'cs' ? 'Pro střední firmy s pokročilými AI potřebami' : 'For medium businesses with advanced AI needs',
      features: lang === 'cs' ? [
        'Pokročilý AI asistent s NLP',
        'Automatizace 10-15 procesů',
        'Prioritní podpora (24h)',
        'Pokročilé analytics + predikce',
        'Integrace s 5+ systémy',
        'CRM a ERP propojení',
        'Týdenní konzultace',
        'Custom AI modely'
      ] : [
        'Advanced AI assistant with NLP',
        'Automation of 10-15 processes',
        'Priority support (24h)',
        'Advanced analytics + predictions',
        'Integration with 5+ systems',
        'CRM and ERP connections',
        'Weekly consultations',
        'Custom AI models'
      ],
      popular: true,
      bestFor: lang === 'cs' ? 'Firmy 50-500 zaměstnanců' : 'Companies 50-500 employees'
    },
    {
      name: 'Enterprise',
      icon: <Building className="w-8 h-8" />,
      price: lang === 'cs' ? 'Na míru' : 'Custom',
      priceNote: lang === 'cs' ? 'podle potřeb' : 'based on needs',
      description: lang === 'cs' ? 'Kompletní AI transformace pro velké korporace' : 'Complete AI transformation for large corporations',
      features: lang === 'cs' ? [
        'Vlastní AI infrastruktura',
        'Neomezená automatizace',
        'Dedikovaný tým (24/7)',
        'AI-powered business intelligence',
        'Neomezené integrace',
        'White-label řešení',
        'Pokročilé zabezpečení',
        'Školení celého týmu',
        'SLA garance 99.9%'
      ] : [
        'Custom AI infrastructure',
        'Unlimited automation',
        'Dedicated team (24/7)',
        'AI-powered business intelligence',
        'Unlimited integrations',
        'White-label solutions',
        'Advanced security',
        'Full team training',
        '99.9% SLA guarantee'
      ],
      popular: false,
      bestFor: lang === 'cs' ? 'Firmy 500+ zaměstnanců' : 'Companies 500+ employees'
    },
    {
      name: 'Custom',
      icon: <Sparkles className="w-8 h-8" />,
      price: lang === 'cs' ? 'Konzultace' : 'Consultation',
      priceNote: lang === 'cs' ? 'zdarma' : 'free',
      description: lang === 'cs' ? 'Zcela individuální AI řešení šité na míru' : 'Completely individual AI solutions tailored to fit',
      features: lang === 'cs' ? [
        'Analýza specifických potřeb',
        'Vlastní AI architektura',
        'Unikátní funkcionality',
        'Flexibilní cenový model',
        'Postupná implementace',
        'Dlouhodobé partnerství'
      ] : [
        'Analysis of specific needs',
        'Custom AI architecture',
        'Unique functionalities',
        'Flexible pricing model',
        'Gradual implementation',
        'Long-term partnership'
      ],
      popular: false,
      bestFor: lang === 'cs' ? 'Specifické požadavky' : 'Specific requirements'
    }
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 40%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,255,127,0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Energy Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/40 rounded-full blur-sm"
            style={{
              left: `${15 + (i * 8) % 70}%`,
              top: `${20 + (i * 6) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? 'Vyberte si svůj' : 'Choose your'}
            <span className="text-accent-primary"> {lang === 'cs' ? 'balíček' : 'package'}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs' 
              ? 'Každý balíček je navržen pro specifické potřeby a velikost firmy'
              : 'Each package is designed for specific needs and company size'
            }
          </p>
        </motion.div>

        {/* Packages Grid - Responsive for 4 packages */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, y: 6, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative ${index >= 2 ? 'lg:col-span-1 xl:col-span-1' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    {lang === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
                  </div>
                </motion.div>
              )}

              <div className={`liquid-glass-card h-full flex flex-col p-8 rounded-3xl transition-all duration-700 hover:scale-[1.02] ${
                pkg.popular ? 'popular-glow' : ''
              }`}>
                <div className="glass-layer-primary absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center"
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.7,
                        ease: "easeInOut"
                      }}
                    >
                      {pkg.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">{pkg.bestFor}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-black text-accent-primary mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {pkg.priceNote}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-center mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-text-secondary">
                          <CheckCircle className="w-5 h-5 text-accent-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}?package=${pkg.name.toLowerCase()}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center ${
                        pkg.popular 
                          ? 'bg-accent-primary text-bg-primary hover:bg-accent-primary/90' 
                          : 'bg-gradient-to-r from-white/10 to-white/5 text-text-primary border border-accent-primary/30 hover:border-accent-primary/60 hover:bg-accent-primary/10'
                      }`}
                    >
                      <span className="mr-3">
                        {lang === 'cs' ? 'Vybrat balíček' : 'Choose Package'}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
        
        .liquid-glass-card:hover {
          box-shadow: 
            0 20px 40px rgba(255, 255, 255, 0.1), 
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 0 30px rgba(0, 255, 127, 0.15);
          border-color: rgba(0, 255, 127, 0.3);
        }
        
        .popular-glow {
          border-color: rgba(0, 255, 127, 0.4);
          box-shadow: 
            0 8px 25px rgba(255, 255, 255, 0.05), 
            0 0 0 1px rgba(255, 255, 255, 0.05) inset,
            0 0 20px rgba(0, 255, 127, 0.2);
        }
        
        .glass-layer-primary {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.06) 50%, 
            rgba(255, 255, 255, 0.02) 100%
          );
        }
      `}</style>
    </section>
  );
}
