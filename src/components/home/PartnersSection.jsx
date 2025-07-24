import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const PartnerLogo = ({ name, url, description }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setIsHovered(false);
  };

  // Modern logo styling based on company
  const getLogoStyle = (companyName) => {
    const styles = {
      'MICROSOFT': { icon: '⊞' },
      'GOOGLE': { icon: 'G' },
      'AMAZON': { icon: '⟩' },
      'SALESFORCE': { icon: '☁' },
      'OPENAI': { icon: '◉' },
      'NVIDIA': { icon: '▲' }
    };
    return styles[companyName] || styles['MICROSOFT'];
  };

  const logoStyle = getLogoStyle(name);

  return (
    <div className="relative mx-4 flex-shrink-0 group">
      <div 
        className="relative overflow-hidden flex flex-col items-center justify-center h-24 w-48 cursor-pointer transition-all duration-500 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-white"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-label={`Visit ${name} website`}
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.1) inset'
            : '0 8px 25px rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.05) inset'
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {/* Primary glass layer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.02] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Secondary depth layer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/[0.02] to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-3xl mb-1 font-bold opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
          {logoStyle.icon}
        </div>
        
        <div className="relative z-10 font-semibold text-sm tracking-wider opacity-65 group-hover:opacity-100 transition-all duration-500">
          {name}
        </div>
        
        {/* Subtle inner highlight */}
        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white text-sm px-4 py-3 rounded-xl border border-white/10 whitespace-nowrap z-20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-2">
              <span className="text-[#00FF7F]">●</span>
              {description}
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function PartnersSection() {
  const { t, language } = useLanguage();

  const partnerData = [
    { 
      name: "MICROSOFT", 
      url: "https://www.microsoft.com",
      description: language === 'cs' ? 'Integrace s Azure AI' : 'Azure AI Integration'
    },
    { 
      name: "GOOGLE", 
      url: "https://www.google.com",
      description: language === 'cs' ? 'Cloud AI služby' : 'Cloud AI Services'
    },
    { 
      name: "AMAZON", 
      url: "https://www.amazon.com",
      description: language === 'cs' ? 'AWS AI řešení' : 'AWS AI Solutions'
    },
    { 
      name: "SALESFORCE", 
      url: "https://www.salesforce.com",
      description: language === 'cs' ? 'CRM automatizace' : 'CRM Automation'
    },
    { 
      name: "OPENAI", 
      url: "https://www.openai.com",
      description: language === 'cs' ? 'GPT modely' : 'GPT Models'
    },
    { 
      name: "NVIDIA", 
      url: "https://www.nvidia.com",
      description: language === 'cs' ? 'AI akcelerátory' : 'AI Accelerators'
    }
  ];

  // Triple duplication for seamless infinite scroll
  const duplicatedPartners = [...partnerData, ...partnerData, ...partnerData];

  return (
    <section className="py-16 lg:py-20 bg-[#0A0A0A] overflow-hidden relative">
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
      `}</style>
      
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00FF7F] tracking-wide">
            {language === 'cs' ? 'Spolupracujeme s předními firmami v oboru' : 'We partner with industry-leading companies'}
          </h2>
        </div>
        
        <div className="relative w-full overflow-visible">
          <div className="flex overflow-visible">
            <div className="flex items-center justify-center scrolling-wrapper overflow-visible">
              {duplicatedPartners.map((partner, index) => (
                <PartnerLogo 
                  key={`${partner.name}-${index}`}
                  name={partner.name} 
                  url={partner.url}
                  description={partner.description}
                />
              ))}
            </div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
        </div>
        
        {/* Separator line */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
