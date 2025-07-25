'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Zap, CheckCircle, ArrowRight } from 'lucide-react';
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
      description: lang === 'cs' ? 'Vyvíjíme AI modely přesně podle vašich požadavků' : 'We develop AI models exactly according to your requirements'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: lang === 'cs' ? 'Integrace systémů' : 'System Integration',
      description: lang === 'cs' ? 'Bezproblémové propojení s vašimi stávajícími systémy' : 'Seamless integration with your existing systems'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: lang === 'cs' ? 'Rychlé nasazení' : 'Fast Deployment',
      description: lang === 'cs' ? 'Implementace za 2-4 týdny s plnou podporou' : 'Implementation in 2-4 weeks with full support'
    }
  ];

  return (
    <section id="custom-ai-systems" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? (
              <>
                AI řešení{' '}
                <span className="text-accent-primary relative">
                  na míru
                </span>
              </>
            ) : (
              <>
                Custom AI{' '}
                <span className="text-accent-primary relative">
                  Solutions
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs' 
              ? 'Vytváříme pokročilé AI systémy přesně podle vašich potřeb a požadavků'
              : 'We create advanced AI systems tailored exactly to your needs and requirements'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-accent-primary/30 transition-all duration-500 group"
            >
              <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
