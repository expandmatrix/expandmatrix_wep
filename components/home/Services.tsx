'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/getDictionary';

interface ServicesProps {
  dict: any;
  lang: Locale;
}

export default function Services({ dict, lang }: ServicesProps) {
  const services = [
    {
      title: lang === 'cs' ? 'AI Systémy na míru' : 'Custom AI Systems',
      description: lang === 'cs'
        ? 'Vytváříme pokročilé AI řešení přesně podle vašich potřeb a požadavků.'
        : 'We create advanced AI solutions tailored exactly to your needs and requirements.',
      features: lang === 'cs'
        ? ['Custom AI modely', 'Integrace se systémy', '24/7 podpora']
        : ['Custom AI models', 'System integration', '24/7 support'],
      icon: <Zap className="w-16 h-16" />,
      link: `/${lang}/${lang === 'cs' ? 'sluzby/ai-systemy-na-miru' : 'services/custom-ai-systems'}`
    },
    {
      title: lang === 'cs' ? 'Automatizace procesů' : 'Process Automation',
      description: lang === 'cs'
        ? 'Automatizujeme opakující se úkoly a optimalizujeme vaše workflow.'
        : 'We automate repetitive tasks and optimize your workflows for maximum efficiency.',
      features: lang === 'cs'
        ? ['Workflow automatizace', 'Reporty v reálném čase', 'ROI tracking']
        : ['Workflow automation', 'Real-time reports', 'ROI tracking'],
      icon: <Target className="w-16 h-16" />,
      link: `/${lang}/${lang === 'cs' ? 'sluzby/ai-balicky' : 'services/ai-packages'}`
    },
    {
      title: lang === 'cs' ? 'AI Školení' : 'AI Training',
      description: lang === 'cs'
        ? 'Připravíme váš tým na budoucnost s AI technologiemi a best practices.'
        : 'We prepare your team for the future with AI technologies and best practices.',
      features: lang === 'cs'
        ? ['Interaktivní workshopy', 'Online kurzy', 'Certifikace']
        : ['Interactive workshops', 'Online courses', 'Certification'],
      icon: <Rocket className="w-16 h-16" />,
      link: `/${lang}/${lang === 'cs' ? 'sluzby/ai-skoleni' : 'services/ai-training'}`
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
            {lang === 'cs' ? 'Naše ' : 'Our '}
            <span className="text-accent-primary relative">
              {lang === 'cs' ? 'služby' : 'Services'}
              <div className="absolute -inset-1 bg-accent-primary/20 blur-xl rounded-lg" />
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'cs' 
              ? 'Kompletní portfolio AI řešení pro moderní firmy.'
              : 'A complete portfolio of AI solutions for modern businesses.'
            }
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              lang={lang}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
            className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)] relative overflow-hidden"
          >
            <span className="relative z-10">
              {lang === 'cs' ? 'Prohlédnout všechny služby' : 'View All Services'}
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

// Premium Service Card Component
interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    link: string;
  };
  index: number;
  lang: Locale;
}

function ServiceCard({ service, index, lang }: ServiceCardProps) {
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
      className="group relative"
    >
      {/* Card container with Apple-style glass morphism */}
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-700 ease-out hover:border-accent-primary/30 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,127,0.1)]">
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Icon with premium glow */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-500">
            <div className="text-accent-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,255,127,0.6)] transition-all duration-500">
              {service.icon}
            </div>
            
            {/* Icon background glow */}
            <div className="absolute inset-0 bg-accent-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-500 text-center">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-text-secondary mb-8 leading-relaxed text-center font-medium">
          {service.description}
        </p>
        
        {/* Features list */}
        <ul className="space-y-4">
          {service.features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15 + featureIndex * 0.1 
              }}
              viewport={{ once: true }}
              className="flex items-center text-text-primary group-hover:text-white transition-colors duration-300"
            >
              <div className="relative mr-4">
                <CheckCircle className="w-5 h-5 text-accent-primary" />
                <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-medium">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Detail link */}
        <Link
          href={service.link}
          className="absolute bottom-6 right-6 inline-flex items-center px-4 py-2 bg-accent-primary text-bg-primary text-sm font-semibold rounded-full transition-all duration-300 hover:bg-accent-primary/90"
        >
          <span>{lang === 'cs' ? 'Zjistit více' : 'Learn More'}</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>

        {/* Card hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/[0.02] via-transparent to-accent-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* External card glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}
