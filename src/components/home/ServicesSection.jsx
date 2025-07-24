import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Target, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const services = [
    {
      title: language === 'cs' ? 'AI Systémy na míru' : 'Custom AI Systems',
      description: language === 'cs' ? 'Vytváříme pokročilé AI řešení přesně podle vašich potřeb a požadavků.' : 'We create advanced AI solutions tailored exactly to your needs and requirements.',
      features: language === 'cs' ? ['Custom AI modely', 'Integrace se systémy', '24/7 podpora'] : ['Custom AI models', 'System integration', '24/7 support'],
      icon: <Zap className="w-12 h-12" />
    },
    {
      title: language === 'cs' ? 'Automatizace procesů' : 'Process Automation',
      description: language === 'cs' ? 'Automatizujeme opakující se úkoly a optimalizujeme vaše workflow.' : 'We automate repetitive tasks and optimize your workflows for maximum efficiency.',
      features: language === 'cs' ? ['Workflow automatizace', 'Reporty v reálném čase', 'ROI tracking'] : ['Workflow automation', 'Real-time reports', 'ROI tracking'],
      icon: <Target className="w-12 h-12" />
    },
    {
      title: language === 'cs' ? 'AI Školení' : 'AI Training',
      description: language === 'cs' ? 'Připravíme váš tým na budoucnost s AI technologiemi a best practices.' : 'We prepare your team for the future with AI technologies and best practices.',
      features: language === 'cs' ? ['Interaktivní workshopy', 'Online kurzy', 'Certifikace'] : ['Interactive workshops', 'Online courses', 'Certification'],
      icon: <Rocket className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'cs' ? 'Naše' : 'Our'} <span className="text-[#00FF7F] neon-text">{language === 'cs' ? 'služby' : 'Services'}</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {language === 'cs' 
              ? 'Kompletní portfolio AI řešení pro moderní firmy.'
              : 'A complete portfolio of AI solutions for modern businesses.'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-[#1A1A1A] border-0 rounded-3xl p-8 text-center group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] cursor-pointer"
              style={{
                transform: 'perspective(1000px) rotateX(0deg)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="text-[#00FF7F] mb-8 transition-all duration-300 group-hover:scale-110 group-hover:[&>svg]:drop-shadow-[0_0_25px_rgba(0,255,127,0.8)] flex justify-center">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 group-hover:text-[#00FF7F] transition-colors duration-300 text-white">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-4 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-[#00FF7F] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild size="lg" className="rounded-full bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold text-lg px-12 py-8 transition-all duration-300 hover:scale-105 hover-glow group">
            <Link to={createPageUrl('Services')}>
              {language === 'cs' ? 'Prohlédnout všechny služby' : 'View All Services'}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}