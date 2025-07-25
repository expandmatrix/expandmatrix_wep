'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface OurApproachProps {
  dict: any;
  lang: Locale;
}

export default function OurApproach({ dict, lang }: OurApproachProps) {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: lang === 'cs' ? 'Analýza & Porozumění' : 'Analysis & Understanding',
      description: lang === 'cs'
        ? 'Důkladně analyzujeme vaše procesy, identifikujeme příležitosti a definujeme požadavky'
        : 'We thoroughly analyze your processes, identify opportunities and define requirements',
      duration: lang === 'cs' ? '1-2 týdny' : '1-2 weeks'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: lang === 'cs' ? 'Návrh řešení' : 'Solution Design',
      description: lang === 'cs'
        ? 'Vytváříme detailní návrh AI systému optimalizovaného pro vaše specifické potřeby'
        : 'We create a detailed design of an AI system optimized for your specific needs',
      duration: lang === 'cs' ? '1-2 týdny' : '1-2 weeks'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: lang === 'cs' ? 'Vývoj & Implementace' : 'Development & Implementation',
      description: lang === 'cs'
        ? 'Vyvíjíme a implementujeme AI systém s průběžným testováním a optimalizací'
        : 'We develop and implement the AI system with continuous testing and optimization',
      duration: lang === 'cs' ? '4-8 týdnů' : '4-8 weeks'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: lang === 'cs' ? 'Nasazení & Podpora' : 'Deployment & Support',
      description: lang === 'cs'
        ? 'Nasazujeme systém do provozu a poskytujeme kontinuální podporu a údržbu'
        : 'We deploy the system into operation and provide continuous support and maintenance',
      duration: lang === 'cs' ? 'Průběžně' : 'Ongoing'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-bg-secondary/20 to-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                Náš{' '}
                <span className="text-accent-primary">přístup</span>
              </>
            ) : (
              <>
                Our{' '}
                <span className="text-accent-primary">approach</span>
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Systematický proces od první konzultace po úspěšné nasazení a dlouhodobou podporu'
              : 'Systematic process from initial consultation to successful deployment and long-term support'
            }
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary/20 via-accent-primary/40 to-accent-primary/20 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.4, y: 6, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-80px" }}
                className="relative group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mb-6 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-primary/80 rounded-full flex items-center justify-center text-bg-primary font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-accent-primary/30 transition-all duration-700 hover:scale-[1.02] mt-6 lg:mt-0">
                  <div className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center lg:justify-start">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3 text-center lg:text-left group-hover:text-accent-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="inline-flex items-center px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded-full">
                      <span className="text-accent-primary text-sm font-semibold">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-primary" />
              <span className="text-text-secondary">
                {lang === 'cs' ? 'Transparentní komunikace' : 'Transparent communication'}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-primary" />
              <span className="text-text-secondary">
                {lang === 'cs' ? 'Agile metodologie' : 'Agile methodology'}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-primary" />
              <span className="text-text-secondary">
                {lang === 'cs' ? 'Dlouhodobá podpora' : 'Long-term support'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
