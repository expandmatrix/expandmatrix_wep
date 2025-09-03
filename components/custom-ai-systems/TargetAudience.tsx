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
        ? 'Komplexní AI systémy pro automatizaci rozsáhlých procesů a optimalizaci celé organizace. Pomáháme firmám zvýšit produktivitu, snížit náklady a posílit konkurenceschopnost.'
        : 'Comprehensive AI solutions for automating complex processes and optimizing the entire organization. We help enterprises streamline workflows, reduce operational costs, and gain a competitive advantage.',
      features: lang === 'cs' 
        ? ['Škálovatelná architektura', 'Enterprise integrace', 'Pokročilá analytika']
        : ['Scalable architecture', 'Enterprise integration', 'Advanced analytics']
    },
    {
      icon: <User className="w-12 h-12" />,
      title: lang === 'cs' ? 'Podnikatelé & Freelanceři' : 'Entrepreneurs & Freelancers',
      description: lang === 'cs'
        ? 'Personalizovaní AI asistenti a chytré automatizační nástroje pro zvýšení produktivity. Pomůžeme vám ušetřit čas, zjednodušit provoz a soustředit se na růst.'
        : 'Personalized AI assistants and automation tools designed to boost productivity and simplify operations. We help you save time, automate repetitive tasks, and focus on growing your business effectively.',
      features: lang === 'cs'
        ? ['Vlastní AI asistent', 'Automatizace rutinních úkolů', 'Cenově dostupné řešení']
        : ['Custom AI assistants', 'Workflow automation', 'Cost-effective solutions']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: lang === 'cs' ? 'Malé a střední firmy' : 'Small & Medium Businesses',
      description: lang === 'cs'
        ? 'AI řešení na míru pro optimalizaci procesů, zefektivnění řízení a rychlejší růst. Naše systémy jsou navržené tak, aby byly rychle implementované a snadno použitelné.'
        : 'Tailored AI solutions to optimize operations, automate processes, and accelerate business growth. Fast to implement, easy to use, and designed to deliver maximum ROI for your organization.',
      features: lang === 'cs'
        ? ['Rychlá implementace', 'ROI-orientovaný přístup', 'Uživatelsky přívětivé používání']
        : ['Quick implementation', 'ROI-focused approach', 'User-friendly']
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: lang === 'cs' ? 'Inovativní projekty' : 'Innovative Projects',
      description: lang === 'cs'
        ? 'Experimentální AI systémy a custom vývoj pro průlomové nápady a nové technologie. Spolupracujeme na výzkumu, prototypování i vytváření MVP produktů.'
        : 'Cutting-edge AI systems and custom development for groundbreaking products and new technologies. We work with you on research, prototyping, and creating MVPs to bring your vision to life faster.',
      features: lang === 'cs'
        ? ['Výzkum a vývoj', 'Prototypování a testování', 'Nejmodernější technologie']
        : ['Research and development', 'Prototyping and testing', 'Latest technology']
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
                vytváříme AI řešení
              </>
            ) : (
              <>
                Who We {' '}
                <span className="text-accent-primary">Build</span>{' '}
                AI Solutions For
              </>
            )}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Naše AI systémy jsou navržené pro firmy, podnikatele i inovátory, kteří chtějí využít sílu AI automatizace a inteligentních agentů k růstu a vyšší efektivitě.'
              : 'Our AI systems are designed for businesses, entrepreneurs, and innovators who want to leverage AI automation and intelligent agents to grow faster and work smarter.'
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
