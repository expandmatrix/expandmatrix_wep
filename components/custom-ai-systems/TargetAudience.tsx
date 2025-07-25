'use client';

import { motion } from 'framer-motion';
import { Building2, User, Users, Lightbulb } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface TargetAudienceProps {
  dict: any;
  lang: Locale;
}

export default function TargetAudience({ dict, lang }: TargetAudienceProps) {
  const audiences = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: lang === 'cs' ? 'Velké podniky & Enterprise' : 'Large Businesses & Enterprise',
      description: lang === 'cs' 
        ? 'Komplexní AI systémy pro automatizaci rozsáhlých procesů a optimalizaci celé organizace'
        : 'Complex AI systems for automating extensive processes and optimizing entire organizations',
      features: lang === 'cs' 
        ? ['Škálovatelná architektura', 'Enterprise integrace', 'Pokročilá analytika']
        : ['Scalable architecture', 'Enterprise integration', 'Advanced analytics']
    },
    {
      icon: <User className="w-12 h-12" />,
      title: lang === 'cs' ? 'Podnikatelé & Freelanceři' : 'Entrepreneurs & Freelancers',
      description: lang === 'cs'
        ? 'Personalizované AI asistenty a automatizační nástroje pro zvýšení produktivity'
        : 'Personalized AI assistants and automation tools to boost productivity',
      features: lang === 'cs'
        ? ['Osobní AI asistent', 'Automatizace úkolů', 'Cenově dostupné']
        : ['Personal AI assistant', 'Task automation', 'Cost-effective']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: lang === 'cs' ? 'Malé a střední firmy' : 'Small & Medium Businesses',
      description: lang === 'cs'
        ? 'AI řešení šitá na míru pro optimalizaci procesů a růst vašeho podnikání'
        : 'Tailored AI solutions for process optimization and business growth',
      features: lang === 'cs'
        ? ['Rychlá implementace', 'ROI zaměřené', 'Snadné používání']
        : ['Quick implementation', 'ROI focused', 'Easy to use']
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: lang === 'cs' ? 'Inovativní projekty' : 'Innovative Projects',
      description: lang === 'cs'
        ? 'Experimentální AI systémy pro průlomové nápady a cutting-edge technologie'
        : 'Experimental AI systems for breakthrough ideas and cutting-edge technology',
      features: lang === 'cs'
        ? ['Výzkum & vývoj', 'Prototypování', 'Nejnovější technologie']
        : ['Research & development', 'Prototyping', 'Latest technology']
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
                Pro{' '}
                <span className="text-accent-primary">koho</span>{' '}
                vytváříme
              </>
            ) : (
              <>
                Who we{' '}
                <span className="text-accent-primary">create</span>{' '}
                for
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Naše AI systémy jsou určené pro každého, kdo chce využít sílu umělé inteligence ve svém podnikání'
              : 'Our AI systems are designed for anyone who wants to harness the power of artificial intelligence in their business'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, y: 4, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-accent-primary/30 transition-all duration-700 hover:scale-[1.005]"
            >
              <div className="flex items-start space-x-6">
                <div className="text-accent-primary group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  {audience.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {audience.description}
                  </p>
                  
                  <div className="space-y-2">
                    {audience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
