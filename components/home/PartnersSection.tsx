'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import type { Locale } from '@/lib/getDictionary';

interface PartnersSectionProps {
  dict: any;
  lang: Locale;
}

const partners = [
  { name: 'SALESFORCE', logo: '/logos/salesforce.png', icon: '☁', description: 'CRM automatizace' },
  { name: 'OPENAI', logo: '/logos/openai.png', icon: '◉', description: 'GPT modely' },
  { name: 'NVIDIA', logo: '/logos/nvidia.png', icon: '▲', description: 'AI akcelerátory' },
  { name: 'MICROSOFT', logo: '/logos/microsoft.png', icon: '⊞', description: 'Azure AI integrace' },
  { name: 'GOOGLE', logo: '/logos/google.png', icon: 'G', description: 'Cloud AI služby' },
  { name: 'AMAZON', logo: '/logos/amazon.png', icon: '⟩', description: 'AWS AI řešení' },
];

export default function PartnersSection({ dict, lang }: PartnersSectionProps) {
  // Trojnásobný array pro seamless nekonečný loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 lg:py-20 bg-bg-primary overflow-hidden relative">
      <div className="w-full">
        {/* Nadpis */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-accent-primary tracking-wide glow-text">
            {lang === 'cs' 
              ? 'Spolupracujeme s předními firmami v oboru' 
              : 'We partner with industry-leading companies'
            }
          </h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative w-full overflow-visible">
          <div className="flex overflow-visible">
            <div className="flex items-center justify-center scrolling-wrapper overflow-visible">
              {duplicatedPartners.map((partner, index) => (
                <PartnerLogo 
                  key={`${partner.name}-${index}`}
                  partner={partner}
                  lang={lang}
                />
              ))}
            </div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none z-10"></div>
        </div>
        
        {/* Separator line */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-40"></div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        
        .scrolling-wrapper {
          animation: infiniteScroll 80s linear infinite;
          width: max-content;
        }
        
        .scrolling-wrapper:hover {
          animation-play-state: paused;
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.6);
        }
      `}</style>
    </section>
  );
}

// Premium Partner Logo komponenta s liquid glass efektem
interface PartnerLogoProps {
  partner: {
    name: string;
    logo: string;
    icon: string;
    description: string;
  };
  lang: Locale;
}

function PartnerLogo({ partner, lang }: PartnerLogoProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setIsHovered(false);
  };

  const getDescription = () => {
    if (lang === 'cs') {
      const descriptions: { [key: string]: string } = {
        'SALESFORCE': 'CRM automatizace',
        'OPENAI': 'GPT modely',
        'NVIDIA': 'AI akcelerátory',
        'MICROSOFT': 'Azure AI integrace',
        'GOOGLE': 'Cloud AI služby',
        'AMAZON': 'AWS AI řešení'
      };
      return descriptions[partner.name] || partner.description;
    } else {
      const descriptions: { [key: string]: string } = {
        'SALESFORCE': 'CRM Automation',
        'OPENAI': 'GPT Models',
        'NVIDIA': 'AI Accelerators',
        'MICROSOFT': 'Azure AI Integration',
        'GOOGLE': 'Cloud AI Services',
        'AMAZON': 'AWS AI Solutions'
      };
      return descriptions[partner.name] || partner.description;
    }
  };

  return (
    <div className="relative mx-4 flex-shrink-0 group">
      <div 
        className="liquid-glass-card relative overflow-hidden flex flex-col items-center justify-center h-24 w-48 cursor-pointer transition-all duration-500 rounded-2xl text-white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-label={`${partner.name} partnership`}
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
        }}
      >
        {/* Primary glass layer */}
        <div className="glass-layer-primary absolute inset-0 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Secondary depth layer */}
        <div className="glass-layer-secondary absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
        
        {/* Shimmer effect */}
        <div className="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
          <div className="shimmer-gradient absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-3xl mb-1 font-bold opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
          {partner.icon}
        </div>
        
        <div className="relative z-10 font-semibold text-sm tracking-wider opacity-65 group-hover:opacity-100 transition-all duration-500">
          {partner.name}
        </div>
        
        {/* Subtle inner highlight */}
        <div className="inner-highlight absolute inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="tooltip absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white text-sm px-4 py-3 rounded-xl border border-white/10 whitespace-nowrap z-20">
            <div className="flex items-center gap-2">
              <span className="text-accent-primary">●</span>
              {getDescription()}
            </div>
            <div className="tooltip-arrow absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        )}
      </div>

      {/* Liquid Glass CSS */}
      <style jsx>{`
        
        .glass-layer-primary {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.06) 50%, 
            rgba(255, 255, 255, 0.02) 100%
          );
        }
        
        .glass-layer-secondary {
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.02) 0%, 
            transparent 100%
          );
        }
        
        .shimmer-gradient {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.25) 50%, 
            transparent 100%
          );
        }
        
        .inner-highlight {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.08) 0%, 
            transparent 100%
          );
        }
        
        .tooltip {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}

/* 
Příklad použití:
<PartnersSection dict={dictionary} lang="en" />

Pro přidání více partnerů:
const partners = [
  ...existingPartners,
  { name: 'Tesla', logo: '/logos/tesla.png' },
  { name: 'Apple', logo: '/logos/apple.png' },
];

Pro úpravu rychlosti animace:
Změňte "30s" v animation: marquee 30s linear infinite;

Pro přidání particles v pozadí:
Přidejte absolutně pozicovaný div s particles animací před hlavní obsah
*/
