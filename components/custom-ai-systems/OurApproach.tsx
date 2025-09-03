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
      title: lang === 'cs' ? 'Úvodní konzultace' : 'Initial Consultation',
      description: lang === 'cs'
        ? 'Začínáme úvodním callem, kde probereme vaše procesy, cíle a možnosti. Identifikujeme příležitosti pro AI automatizaci a návrh inteligentních agentů.'
        : 'We start with an introductory call to discuss your processes, goals, and opportunities. We identify possibilities for AI automation and the design of intelligent agents.',
      duration: lang === 'cs' ? '45 minut' : '45 minutes'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: lang === 'cs' ? 'Návrh řešení' : 'Solution Design',
      description: lang === 'cs'
        ? 'Připravíme detailní návrh AI systému na míru vašim potřebám. Definujeme technologie, integrace, strategii a stanovíme časový rámec i rozpočet pro celý projekt.'
        : 'We prepare a detailed AI system design tailored to your needs. We define technologies, integrations, and strategy, and set the project timeline and budget.',
      duration: lang === 'cs' ? '3-5 dní' : '3-5 days'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: lang === 'cs' ? 'Vývoj & testování' : 'Development & Testing',
      description: lang === 'cs'
        ? 'Vyvíjíme a ladíme AI agenty a automatizační workflow. Používáme iterativní vývoj s průběžným testováním, takže vidíte výsledky v reálném čase.'
        : 'We develop and fine-tune AI agents and automation workflows. Using an iterative approach with continuous testing, you see results in real-time.',
      duration: lang === 'cs' ? '2-8 týdnů' : '2-8 weeks'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: lang === 'cs' ? 'Produkční nasazení' : 'Production Deployment',
      description: lang === 'cs'
        ? 'Nasazujeme řešení do produkce a předáváme kompletní dokumentaci i školení. Váš tým tak přesně ví, jak systém používat a spravovat.'
        : 'We deploy the solution to production and provide complete documentation and training. Your team will know exactly how to use and manage the system.',
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
              ? 'Každý projekt stavíme na důkladné analýze, chytré strategii a precizní implementaci. Váš systém dodáme včas, kvalitně a připravený na škálování.'
              : 'Every project starts with deep analysis, followed by smart strategy and precise implementation. Delivered on time, at the highest quality, and built for scalability.'
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

                <div className="h-full p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-accent-primary/30 transition-all duration-700 hover:scale-[1.02] mt-6 lg:mt-0 flex flex-col">
                  <div className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center lg:justify-start">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3 text-center lg:text-left group-hover:text-accent-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-0 leading-relaxed text-center lg:text-left flex-grow">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start mt-auto">
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
          className="mt-32 p-8 bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-primary" />
              <span className="text-text-secondary">
                {lang === 'cs' ? 'Transparentní komunikace' : 'Transparent Communication'}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-primary" />
              <span className="text-text-secondary">
                {lang === 'cs' ? 'Agilní metodika' : 'Agile Methodology'}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-primary" />
              <span className="text-text-secondary">
                {lang === 'cs' ? 'Dlouhodobá spolupráce' : 'Long-term Partnership'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
