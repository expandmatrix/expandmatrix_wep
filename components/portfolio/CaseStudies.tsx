'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface CaseStudiesProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function CaseStudies({ dict, lang }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: lang === 'cs' ? 'Automatizace zákaznického servisu' : 'Customer Service Automation',
      client: 'TechCorp Solutions',
      industry: lang === 'cs' ? 'Technologie' : 'Technology',
      challenge: lang === 'cs'
        ? 'Společnost čelila vysokému objemu zákaznických dotazů a dlouhým čekacím dobám. Potřebovali řešení pro 24/7 podporu.'
        : 'Company faced high volume of customer inquiries and long waiting times. They needed a solution for 24/7 support.',
      solution: lang === 'cs'
        ? 'Implementovali jsme inteligentní AI chatbot s NLP schopnostmi, který dokáže vyřešit 80% běžných dotazů automaticky.'
        : 'We implemented an intelligent AI chatbot with NLP capabilities that can resolve 80% of common inquiries automatically.',
      results: [
        lang === 'cs' ? '75% snížení čekacích dob' : '75% reduction in waiting times',
        lang === 'cs' ? '60% úspora nákladů na podporu' : '60% cost savings in support',
        lang === 'cs' ? '95% spokojenost zákazníků' : '95% customer satisfaction',
        lang === 'cs' ? '24/7 dostupnost služeb' : '24/7 service availability'
      ],
      technologies: ['GPT-4', 'Natural Language Processing', 'Machine Learning', 'API Integration'],
      duration: lang === 'cs' ? '3 měsíce' : '3 months',
      roi: '300%'
    },
    {
      title: lang === 'cs' ? 'Prediktivní analýza prodeje' : 'Predictive Sales Analytics',
      client: 'RetailMax',
      industry: lang === 'cs' ? 'E-commerce' : 'E-commerce',
      challenge: lang === 'cs'
        ? 'Neefektivní řízení zásob vedlo k přeplněným skladům a vyprodaným produktům. Potřebovali prediktivní model.'
        : 'Inefficient inventory management led to overstocked warehouses and out-of-stock products. They needed predictive modeling.',
      solution: lang === 'cs'
        ? 'Vytvořili jsme AI systém pro predikci poptávky založený na historických datech, sezónních trendech a externích faktorech.'
        : 'We created an AI demand prediction system based on historical data, seasonal trends, and external factors.',
      results: [
        lang === 'cs' ? '40% snížení nadbytečných zásob' : '40% reduction in excess inventory',
        lang === 'cs' ? '25% nárůst tržeb' : '25% increase in sales',
        lang === 'cs' ? '90% přesnost predikce' : '90% prediction accuracy',
        lang === 'cs' ? '50% rychlejší rozhodování' : '50% faster decision making'
      ],
      technologies: ['Python', 'TensorFlow', 'Time Series Analysis', 'Data Visualization'],
      duration: lang === 'cs' ? '4 měsíce' : '4 months',
      roi: '250%'
    },
    {
      title: lang === 'cs' ? 'Automatizace finančních procesů' : 'Financial Process Automation',
      client: 'FinanceFlow',
      industry: lang === 'cs' ? 'Finance' : 'Finance',
      challenge: lang === 'cs'
        ? 'Manuální zpracování faktur a compliance kontroly zabíraly týmy hodin denně a byly náchylné k chybám.'
        : 'Manual invoice processing and compliance checks took teams hours daily and were prone to errors.',
      solution: lang === 'cs'
        ? 'Implementovali jsme RPA řešení s AI pro automatické zpracování dokumentů a compliance monitoring.'
        : 'We implemented RPA solution with AI for automatic document processing and compliance monitoring.',
      results: [
        lang === 'cs' ? '85% snížení času zpracování' : '85% reduction in processing time',
        lang === 'cs' ? '99% přesnost zpracování' : '99% processing accuracy',
        lang === 'cs' ? '70% úspora pracovních hodin' : '70% labor hours saved',
        lang === 'cs' ? '100% compliance dodržování' : '100% compliance adherence'
      ],
      technologies: ['RPA', 'OCR', 'Document AI', 'Workflow Automation'],
      duration: lang === 'cs' ? '5 měsíců' : '5 months',
      roi: '400%'
    }
  ];

  return (
    <section id="case-studies" className="py-32 bg-bg-primary relative overflow-hidden">
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
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-accent-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-accent-primary/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
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
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            {lang === 'cs' ? 'Případové studie' : 'Case Studies'}
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Detailní pohled na naše nejúspěšnější projekty a jejich dopad na klientské firmy'
              : 'Detailed look at our most successful projects and their impact on client companies'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study Cards */}
          <div className="lg:col-span-1 space-y-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className={`h-full p-8 rounded-3xl backdrop-blur-xl border cursor-pointer transition-all duration-500 relative overflow-hidden ${
                    selectedCase === index 
                      ? 'border-accent-primary/40 bg-gradient-to-b from-accent-primary/10 to-accent-primary/5' 
                      : 'border-accent-primary/10 bg-gradient-to-b from-accent-primary/5 to-transparent hover:border-accent-primary/30'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(0, 255, 127, 0.4)',
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedCase(index)}
                >
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0, 255, 127, 0.1) 0%, transparent 70%)'
                    }}
                  />
                  
                  {/* Selected Indicator */}
                  {selectedCase === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-3 h-3 bg-accent-primary rounded-full"
                    />
                  )}

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {study.title}
                    </h3>
                    <div className="text-accent-primary text-sm font-semibold mb-3 uppercase tracking-wider">
                      {study.client} • {study.industry}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {study.challenge}
                    </p>
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full px-3 py-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-xs text-accent-primary font-semibold">
                          ROI: {study.roi}
                        </span>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4 text-accent-primary" />
                      </motion.div>
                    </div>
                  </div>

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

          {/* Selected Case Study Details */}
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group relative"
          >
            <motion.div
              className="h-full p-10 rounded-3xl backdrop-blur-xl border border-accent-primary/10 bg-gradient-to-b from-accent-primary/5 to-transparent relative overflow-hidden"
              whileHover={{ 
                borderColor: 'rgba(0, 255, 127, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 255, 127, 0.08) 0%, transparent 70%)'
                }}
              />

              <div className="relative z-10">
                <div className="mb-8">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-black text-text-primary mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {caseStudies[selectedCase].title}
                  </motion.h3>
                  <motion.div 
                    className="flex flex-wrap items-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="text-accent-primary font-semibold text-lg">
                      {caseStudies[selectedCase].client}
                    </span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">
                      {caseStudies[selectedCase].industry}
                    </span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">
                      {caseStudies[selectedCase].duration}
                    </span>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mr-3"></div>
                      {lang === 'cs' ? 'Výzva' : 'Challenge'}
                    </h4>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                      {caseStudies[selectedCase].challenge}
                    </p>

                    <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mr-3"></div>
                      {lang === 'cs' ? 'Řešení' : 'Solution'}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {caseStudies[selectedCase].solution}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mr-3"></div>
                      {lang === 'cs' ? 'Výsledky' : 'Results'}
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {caseStudies[selectedCase].results.map((result, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center text-text-secondary"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-accent-primary rounded-full mr-4 flex-shrink-0"></div>
                          {result}
                        </motion.li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mr-3"></div>
                      {lang === 'cs' ? 'Technologie' : 'Technologies'}
                    </h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {caseStudies[selectedCase].technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full text-accent-primary text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div 
                      className="bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-2xl p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-accent-primary font-black text-2xl mb-2">
                        ROI: {caseStudies[selectedCase].roi}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {lang === 'cs' ? 'Návratnost investice' : 'Return on Investment'}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-accent-primary/0 group-hover:border-accent-primary/20 transition-all duration-500"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(0, 255, 127, 0.05), transparent)',
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
        </div>
      </div>
    </section>
  );
}
