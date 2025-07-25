'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Cpu, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface CustomAISystemsProps {
  dict: any;
  lang: Locale;
}

export default function CustomAISystems({ dict, lang }: CustomAISystemsProps) {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: lang === 'cs' ? 'Vlastní AI modely' : 'Custom AI Models',
      description: lang === 'cs' ? 'Vyvíjíme AI modely přesně podle vašich požadavků a specifických potřeb vašeho podnikání' : 'We develop AI models exactly according to your requirements and specific business needs'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: lang === 'cs' ? 'Integrace systémů' : 'System Integration', 
      description: lang === 'cs' ? 'Bezproblémové propojení s vašimi stávajícími systémy a databázemi pro maximální efektivitu' : 'Seamless integration with your existing systems and databases for maximum efficiency'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: lang === 'cs' ? 'Automatizace procesů' : 'Process Automation',
      description: lang === 'cs' ? 'Inteligentní automatizace opakujících se úkolů s pokročilými algoritmy strojového učení' : 'Intelligent automation of repetitive tasks with advanced machine learning algorithms'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: lang === 'cs' ? 'Rychlé nasazení' : 'Rapid Deployment',
      description: lang === 'cs' ? 'Efektivní implementace AI řešení s minimálním dopadem na vaše současné procesy' : 'Efficient AI solution implementation with minimal impact on your current processes'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: lang === 'cs' ? 'Bezpečnost dat' : 'Data Security',
      description: lang === 'cs' ? 'Nejvyšší standardy zabezpečení a ochrany vašich citlivých dat a obchodních informací' : 'Highest security standards and protection of your sensitive data and business information'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: lang === 'cs' ? 'Měřitelné výsledky' : 'Measurable Results',
      description: lang === 'cs' ? 'Sledování a analýza výkonnosti AI systémů s detailními reporty a metrikami ROI' : 'Performance tracking and analysis of AI systems with detailed reports and ROI metrics'
    }
  ];

  return (
    <section id="custom-ai-systems" className="py-32 bg-bg-primary relative overflow-hidden">
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
            <Brain className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-accent-primary font-semibold">
              {lang === 'cs' ? 'AI Systémy na míru' : 'Custom AI Systems'}
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
                Vytváříme AI{' '}
                <span className="text-accent-primary relative">
                  přesně pro vás
                </span>
              </>
            ) : (
              <>
                We create AI{' '}
                <span className="text-accent-primary relative">
                  exactly for you
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
              ? 'Každý business je jedinečný. Proto vytváříme AI řešení šitá přímo na míru vašim specifickým potřebám, cílům a procesům. Od analýzy po implementaci poskytujeme komplexní služby pro úspěšnou AI transformaci.'
              : 'Every business is unique. That\'s why we create AI solutions tailored specifically to your needs, goals and processes. From analysis to implementation, we provide comprehensive services for successful AI transformation.'
            }
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
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
              className="p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-accent-primary/30 transition-all duration-500 group"
            >
              <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
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
            href={`/${lang}/${lang === 'cs' ? 'sluzby/ai-systemy-na-miru' : 'services/custom-ai-systems'}`}
            className="group relative inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] overflow-hidden"
          >
            <span className="relative z-10">
              {lang === 'cs' ? 'Zjistit více o AI systémech' : 'Learn more about AI Systems'}
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
