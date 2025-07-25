'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';
import { useState } from 'react';

interface CaseStudiesProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function CaseStudies({ dict, lang }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: lang === 'cs' ? 'AI Chatbot pro E-commerce' : 'AI Chatbot for E-commerce',
      client: 'RetailMax',
      industry: lang === 'cs' ? 'E-commerce' : 'E-commerce',
      icon: <Zap className="w-8 h-8" />,
      challenge: lang === 'cs' 
        ? 'Vysoký objem zákaznických dotazů a dlouhé čekací doby ovlivňovaly spokojenost zákazníků'
        : 'High volume of customer inquiries and long wait times were affecting customer satisfaction',
      solution: lang === 'cs'
        ? 'Implementace pokročilého AI chatbota s NLP pro automatizaci 90% běžných dotazů a seamless předání složitých případů lidským agentům'
        : 'Implementation of advanced AI chatbot with NLP to automate 90% of common inquiries with seamless handoff of complex cases to human agents',
      results: [
        lang === 'cs' ? '90% snížení čekacích dob' : '90% reduction in wait times',
        lang === 'cs' ? '24/7 dostupnost podpory' : '24/7 support availability', 
        lang === 'cs' ? '60% úspora nákladů na podporu' : '60% cost savings on support',
        lang === 'cs' ? '95% spokojenost zákazníků' : '95% customer satisfaction'
      ],
      technologies: ['OpenAI GPT-4', 'Python', 'React', 'Node.js', 'WebSocket'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: lang === 'cs' ? 'Prediktivní analýza prodeje' : 'Predictive Sales Analytics',
      client: 'TechCorp Solutions',
      industry: lang === 'cs' ? 'Technologie' : 'Technology',
      icon: <TrendingUp className="w-8 h-8" />,
      challenge: lang === 'cs'
        ? 'Nepřesné prognózy prodeje způsobovaly přebytečné zásoby a ztráty z nevyužitých příležitostí'
        : 'Inaccurate sales forecasts were causing excess inventory and missed opportunities',
      solution: lang === 'cs'
        ? 'Vývoj ML modelu pro predikci poptávky s real-time analýzou tržních trendů a automatickým doporučením optimálních zásob'
        : 'Development of ML model for demand prediction with real-time market trend analysis and automated optimal inventory recommendations',
      results: [
        lang === 'cs' ? '95% přesnost prognóz' : '95% forecast accuracy',
        lang === 'cs' ? '40% snížení přebytečných zásob' : '40% reduction in excess inventory',
        lang === 'cs' ? '25% zvýšení tržeb' : '25% increase in revenue',
        lang === 'cs' ? '3x rychlejší rozhodování' : '3x faster decision making'
      ],
      technologies: ['TensorFlow', 'Python', 'PostgreSQL', 'Docker', 'Apache Kafka'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: lang === 'cs' ? 'Automatizace zpracování dokumentů' : 'Document Processing Automation',
      client: 'FinanceFlow',
      industry: lang === 'cs' ? 'Finance' : 'Finance',
      icon: <Shield className="w-8 h-8" />,
      challenge: lang === 'cs'
        ? 'Manuální zpracování tisíců faktur měsíčně bylo časově náročné a náchylné k chybám'
        : 'Manual processing of thousands of invoices monthly was time-consuming and error-prone',
      solution: lang === 'cs'
        ? 'Implementace OCR a AI systému pro automatické extrakce dat z dokumentů s inteligentní validací a workflow managementem'
        : 'Implementation of OCR and AI system for automatic data extraction from documents with intelligent validation and workflow management',
      results: [
        lang === 'cs' ? '99% přesnost extrakce' : '99% extraction accuracy',
        lang === 'cs' ? '80% úspora času' : '80% time savings',
        lang === 'cs' ? '50% snížení chyb' : '50% error reduction',
        lang === 'cs' ? '100% compliance' : '100% compliance rate'
      ],
      technologies: ['Tesseract OCR', 'OpenCV', 'FastAPI', 'MongoDB', 'Redis'],
      color: 'from-purple-500/20 to-pink-500/20'
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
            {lang === 'cs' ? 'Případové ' : 'Case '}
            <span className="text-accent-primary">
              {lang === 'cs' ? 'studie' : 'Studies'}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'cs' 
              ? 'Detailní pohled na naše nejúspěšnější AI projekty a jejich reálný dopad.'
              : 'Detailed look at our most successful AI projects and their real-world impact.'
            }
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Case Study Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                study={study}
                index={index}
                isSelected={selectedCase === index}
                onClick={() => setSelectedCase(index)}
              />
            ))}
          </div>

          {/* Selected Case Study Details */}
          <div className="lg:col-span-8">
            <CaseStudyDetails 
              study={caseStudies[selectedCase]}
              lang={lang}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Premium Case Study Card Component
interface CaseStudyCardProps {
  study: any;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

function CaseStudyCard({ study, index, isSelected, onClick }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0.4, y: 6, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-80px" }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* Card container with liquid glass morphism */}
      <div className={`relative h-full p-6 rounded-3xl transition-all duration-700 ease-out hover:scale-[1.02] ${
        isSelected 
          ? 'bg-gradient-to-br from-white/[0.15] to-white/[0.05] border-accent-primary/50 shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,255,127,0.2)]' 
          : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.08] hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04]'
      } backdrop-blur-xl border`}>
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Icon with glow effect */}
        <div className={`relative mb-4 p-3 rounded-2xl transition-all duration-500 ${
          isSelected ? 'bg-accent-primary/20 text-accent-primary' : 'bg-white/[0.05] text-accent-primary/70 group-hover:bg-accent-primary/10 group-hover:text-accent-primary'
        }`}>
          <div className="relative z-10">
            {study.icon}
          </div>
          {isSelected && (
            <div className="absolute inset-0 bg-accent-primary/20 rounded-2xl blur-xl" />
          )}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary/90 transition-colors duration-300">
            {study.title}
          </h3>
          <div className="text-accent-primary text-sm font-medium mb-3 flex items-center gap-2">
            <span>{study.client}</span>
            <span className="w-1 h-1 bg-accent-primary/50 rounded-full"></span>
            <span className="text-text-secondary">{study.industry}</span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            {study.challenge.substring(0, 120)}...
          </p>
        </div>
        
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute right-4 top-4 w-3 h-3 bg-accent-primary rounded-full shadow-[0_0_20px_rgba(0,255,127,0.6)]" />
        )}
        
        {/* Card hover glow effect */}
        <div className={`absolute inset-0 rounded-3xl transition-opacity duration-700 pointer-events-none ${
          isSelected 
            ? 'bg-gradient-to-br from-accent-primary/[0.05] via-transparent to-accent-primary/[0.02] opacity-100'
            : 'bg-gradient-to-br from-accent-primary/[0.02] via-transparent to-accent-primary/[0.01] opacity-0 group-hover:opacity-100'
        }`} />
        
        {/* Bottom shine effect */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent transition-opacity duration-500 ${
          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`} />
      </div>
      
      {/* External card glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-xl transition-opacity duration-700 -z-10 ${
        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />
    </motion.div>
  );
}

// Case Study Details Component
interface CaseStudyDetailsProps {
  study: any;
  lang: 'cs' | 'en';
}

function CaseStudyDetails({ study, lang }: CaseStudyDetailsProps) {
  return (
    <motion.div
      key={study.title}
      initial={{ opacity: 0, x: 30, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      {/* Main container with premium glass effect */}
      <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl border border-white/[0.12] transition-all duration-700 ease-out hover:border-accent-primary/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4),0_0_50px_rgba(0,255,127,0.1)]">
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${study.color} backdrop-blur-sm border border-white/10`}>
              <div className="text-accent-primary">
                {study.icon}
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-text-primary mb-2">
                {study.title}
              </h3>
              <div className="flex items-center gap-3 text-lg">
                <span className="text-accent-primary font-bold">{study.client}</span>
                <span className="w-2 h-2 bg-accent-primary/50 rounded-full"></span>
                <span className="text-text-secondary font-medium">{study.industry}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8">
          {/* Challenge */}
          <div className="relative">
            <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-primary to-accent-primary/50 rounded-full"></div>
              {lang === 'cs' ? 'Výzva' : 'Challenge'}
            </h4>
            <p className="text-text-secondary leading-relaxed text-lg pl-5">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="relative">
            <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-primary to-accent-primary/50 rounded-full"></div>
              {lang === 'cs' ? 'Řešení' : 'Solution'}
            </h4>
            <p className="text-text-secondary leading-relaxed text-lg pl-5">
              {study.solution}
            </p>
          </div>

          {/* Results */}
          <div className="relative">
            <h4 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-primary to-accent-primary/50 rounded-full"></div>
              {lang === 'cs' ? 'Výsledky' : 'Results'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5">
              {study.results.map((result: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-accent-primary/5 to-transparent border border-accent-primary/10 hover:border-accent-primary/20 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-accent-primary flex-shrink-0" />
                  <span className="text-text-secondary font-medium">{result}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="relative">
            <h4 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-primary to-accent-primary/50 rounded-full"></div>
              {lang === 'cs' ? 'Technologie' : 'Technologies'}
            </h4>
            <div className="flex flex-wrap gap-3 pl-5">
              {study.technologies.map((tech: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full text-accent-primary text-sm font-medium hover:bg-accent-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Card hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/[0.02] via-transparent to-accent-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* External glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}
