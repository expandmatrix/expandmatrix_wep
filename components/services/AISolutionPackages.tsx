'use client';

import { motion } from 'framer-motion';
import { Package, Zap, MessageCircle, BarChart, ArrowRight, CheckCircle, Bot, Brain, Target } from 'lucide-react';
import Link from 'next/link';
import { type Locale } from '@/lib/getDictionary';

interface AISolutionPackagesProps {
  dict: any;
  lang: Locale;
}

export default function AISolutionPackages({ dict, lang }: AISolutionPackagesProps) {
  const solutions = [
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: lang === 'cs' ? 'AI Chatbot řešení' : 'AI Chatbot Solutions',
      description: lang === 'cs' ? 'Připravené chatbot systémy pro zákaznickou podporu s okamžitým nasazením' : 'Ready-to-deploy chatbot systems for customer support with instant implementation',
      features: lang === 'cs' ? [
        'Předtrénované konverzační modely',
        'Integrace s populárními platformami',
        'Vícejazyčná podpora',
        'Nasazení do 48 hodin'
      ] : [
        'Pre-trained conversational models',
        'Integration with popular platforms',
        'Multi-language support',
        'Deployment within 48 hours'
      ],
      deployTime: lang === 'cs' ? '2-3 dny' : '2-3 days'
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: lang === 'cs' ? 'Analytické AI nástroje' : 'Analytics AI Tools',
      description: lang === 'cs' ? 'Pokročilé analytické systémy pro okamžité získání insights z vašich dat' : 'Advanced analytics systems for instant insights from your data',
      features: lang === 'cs' ? [
        'Automatické reportování',
        'Prediktivní analýzy',
        'Vizualizace dat v reálném čase',
        'Export do všech formátů'
      ] : [
        'Automated reporting',
        'Predictive analytics',
        'Real-time data visualization',
        'Export to all formats'
      ],
      deployTime: lang === 'cs' ? '1-2 týdny' : '1-2 weeks'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: lang === 'cs' ? 'Automatizační balíčky' : 'Automation Packages',
      description: lang === 'cs' ? 'Kompletní automatizační řešení pro nejčastější business procesy' : 'Complete automation solutions for the most common business processes',
      features: lang === 'cs' ? [
        'Email marketing automatizace',
        'Zpracování dokumentů',
        'Workflow optimalizace',
        'API integrace'
      ] : [
        'Email marketing automation',
        'Document processing',
        'Workflow optimization',
        'API integrations'
      ],
      deployTime: lang === 'cs' ? '3-5 dnů' : '3-5 days'
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: lang === 'cs' ? 'AI Asistenti' : 'AI Assistants',
      description: lang === 'cs' ? 'Inteligentní virtuální asistenti pro zvýšení produktivity týmu' : 'Intelligent virtual assistants to boost team productivity',
      features: lang === 'cs' ? [
        'Správa kalendáře a meetingů',
        'Automatické poznámky',
        'Task management',
        'Hlasové ovládání'
      ] : [
        'Calendar and meeting management',
        'Automatic note-taking',
        'Task management',
        'Voice control'
      ],
      deployTime: lang === 'cs' ? '1 týden' : '1 week'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: lang === 'cs' ? 'Rozpoznávání obrazu' : 'Image Recognition',
      description: lang === 'cs' ? 'Předpřipravené systémy pro analýzu a klasifikaci obrazového obsahu' : 'Pre-built systems for image analysis and content classification',
      features: lang === 'cs' ? [
        'Objektové rozpoznávání',
        'Kvalitní kontrola produktů',
        'Automatická kategorizace',
        'Real-time zpracování'
      ] : [
        'Object recognition',
        'Product quality control',
        'Automatic categorization',
        'Real-time processing'
      ],
      deployTime: lang === 'cs' ? '1-2 týdny' : '1-2 weeks'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: lang === 'cs' ? 'Personalizační engine' : 'Personalization Engine',
      description: lang === 'cs' ? 'AI systémy pro personalizaci obsahu a doporučování produktů' : 'AI systems for content personalization and product recommendations',
      features: lang === 'cs' ? [
        'Behavioral tracking',
        'Dynamické doporučování',
        'A/B testing integrace',
        'Conversion optimalizace'
      ] : [
        'Behavioral tracking',
        'Dynamic recommendations',
        'A/B testing integration',
        'Conversion optimization'
      ],
      deployTime: lang === 'cs' ? '2-3 týdny' : '2-3 weeks'
    }
  ];

  return (
    <section className="py-32 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0.4, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
            className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 rounded-full backdrop-blur-sm"
          >
            <Package className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'Připravená AI řešení' : 'Ready-to-Deploy AI Solutions'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0.4, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl md:text-6xl font-black mb-6 text-text-primary"
          >
            {lang === 'cs' ? (
              <>
                Rychlé{' '}
                <span className="text-accent-primary relative">
                  AI nasazení
                </span>
              </>
            ) : (
              <>
                Rapid{' '}
                <span className="text-accent-primary relative">
                  AI deployment
                </span>
              </>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0.3, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            {lang === 'cs'
              ? 'Předpřipravená AI řešení pro okamžité nasazení. Naše kolekce hotových AI nástrojů vám umožní začít s automatizací během několika dnů, ne měsíců. Každé řešení je optimalizované pro rychlou integraci a okamžité výsledky.'
              : 'Pre-built AI solutions for instant deployment. Our collection of ready-made AI tools allows you to start automation within days, not months. Each solution is optimized for rapid integration and immediate results.'
            }
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.2, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative h-full"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-700 ease-out hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,127,0.1)]">
                
                {/* Deployment time badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-primary/20 text-accent-primary text-xs font-bold rounded-full border border-accent-primary/30">
                  {solution.deployTime}
                </div>

                {/* Icon */}
                <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start text-text-primary group-hover:text-white transition-colors duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0.3, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center"
        >
          <Link 
            href={`/${lang}/${lang === 'cs' ? 'sluzby/ai-balicky' : 'services/ai-packages'}`}
            className="group relative inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] overflow-hidden"
          >
            <span className="relative z-10">
              {lang === 'cs' ? 'Prohlédnout všechna řešení' : 'View All Solutions'}
            </span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-primary to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
