'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, TrendingUp, Users, Zap } from 'lucide-react';

interface CaseStudiesProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function CaseStudies({ dict, lang }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Fix hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

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
        { metric: '75%', label: lang === 'cs' ? 'snížení čekacích dob' : 'reduction in waiting times' },
        { metric: '60%', label: lang === 'cs' ? 'úspora nákladů na podporu' : 'cost savings in support' },
        { metric: '95%', label: lang === 'cs' ? 'spokojenost zákazníků' : 'customer satisfaction' },
        { metric: '24/7', label: lang === 'cs' ? 'dostupnost služeb' : 'service availability' }
      ],
      technologies: ['GPT-4', 'Natural Language Processing', 'Machine Learning', 'API Integration'],
      duration: lang === 'cs' ? '3 měsíce' : '3 months',
      roi: '300%',
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/20 hover:border-blue-400/40',
      icon: Users
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
        { metric: '40%', label: lang === 'cs' ? 'snížení nadbytečných zásob' : 'reduction in excess inventory' },
        { metric: '25%', label: lang === 'cs' ? 'nárůst tržeb' : 'increase in sales' },
        { metric: '90%', label: lang === 'cs' ? 'přesnost predikce' : 'prediction accuracy' },
        { metric: '50%', label: lang === 'cs' ? 'rychlejší rozhodování' : 'faster decision making' }
      ],
      technologies: ['Python', 'TensorFlow', 'Time Series Analysis', 'Data Visualization'],
      duration: lang === 'cs' ? '4 měsíce' : '4 months',
      roi: '250%',
      color: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/20 hover:border-purple-400/40',
      icon: TrendingUp
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
        { metric: '85%', label: lang === 'cs' ? 'snížení času zpracování' : 'reduction in processing time' },
        { metric: '99%', label: lang === 'cs' ? 'přesnost zpracování' : 'processing accuracy' },
        { metric: '70%', label: lang === 'cs' ? 'úspora pracovních hodin' : 'labor hours saved' },
        { metric: '100%', label: lang === 'cs' ? 'compliance dodržování' : 'compliance adherence' }
      ],
      technologies: ['RPA', 'OCR', 'Document AI', 'Workflow Automation'],
      duration: lang === 'cs' ? '5 měsíců' : '5 months',
      roi: '400%',
      color: 'from-emerald-500/20 to-teal-500/20',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/20 hover:border-emerald-400/40',
      icon: Zap
    }
  ];

  if (!mounted) {
    return (
      <section id="case-studies" className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-text-primary">
              {lang === 'cs'
                ? (<>Případové <span className="bg-gradient-to-r from-accent-primary to-blue-400 bg-clip-text text-transparent">studie</span></>)
                : (<>Case <span className="bg-gradient-to-r from-accent-primary to-blue-400 bg-clip-text text-transparent">Studies</span></>)}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {lang === 'cs'
                ? 'Detailní pohled na naše nejúspěšnější projekty a jejich dopad na klientské firmy'
                : 'Detailed look at our most successful projects and their impact on client companies'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-white/5 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/[0.02] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/[0.01] to-transparent rounded-full blur-3xl"></div>
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
              ? (<>Případové <span className="text-accent-primary">studie</span></>)
              : (<>Case <span className="text-accent-primary">Studies</span></>)}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Detailní pohled na naše nejúspěšnější projekty a jejich dopad na klientské firmy'
              : 'Detailed look at our most successful projects and their impact on client companies'
            }
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={`case-study-${index}`}
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
                className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border ${study.borderColor} rounded-3xl p-6 md:p-8 transition-all duration-300 cursor-pointer overflow-hidden`}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCase(selectedCase === index ? null : index)}
                layout="position"
                layoutId={`card-${index}`}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${study.color} p-3 mb-6 backdrop-blur-sm border border-white/10`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <study.icon className={`w-full h-full ${study.accentColor}`} />
                </motion.div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                    <span className={study.accentColor}>{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>

                {/* Challenge Preview */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {study.challenge}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <motion.div 
                      key={idx} 
                      className={`text-center p-3 rounded-xl bg-gradient-to-br ${study.color} backdrop-blur-sm border border-white/10`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`text-2xl font-black ${study.accentColor} mb-1`}>
                        {result.metric}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.color} backdrop-blur-sm border border-white/10`}>
                    <span className={`text-xs font-semibold ${study.accentColor}`}>
                      ROI: {study.roi}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className={`w-5 h-5 ${study.accentColor}`} />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence mode="wait">
                  {selectedCase === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="pt-8 border-t border-white/10"
                    >
                      {/* Solution */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h4 className={`text-lg font-bold ${study.accentColor} mb-3`}>
                          {lang === 'cs' ? 'Řešení' : 'Solution'}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </motion.div>

                      {/* All Results */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className={`text-lg font-bold ${study.accentColor} mb-3`}>
                          {lang === 'cs' ? 'Výsledky' : 'Results'}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <motion.div 
                              key={idx} 
                              className={`p-3 rounded-xl bg-gradient-to-br ${study.color} backdrop-blur-sm border border-white/10`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + idx * 0.05 }}
                            >
                              <div className={`text-lg font-black ${study.accentColor} mb-1`}>
                                {result.metric}
                              </div>
                              <div className="text-xs text-text-secondary">
                                {result.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className={`text-lg font-bold ${study.accentColor} mb-3`}>
                          {lang === 'cs' ? 'Technologie' : 'Technologies'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.color} backdrop-blur-sm border border-white/10 text-xs ${study.accentColor} font-medium`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + idx * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Project Info */}
                      <motion.div 
                        className="flex items-center justify-between text-sm text-text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className={`font-bold ${study.accentColor}`}>
                          ROI: {study.roi}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
