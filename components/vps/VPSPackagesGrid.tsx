'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  HardDrive, 
  Shield,
  ArrowRight,
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSPackage {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
  };
  pricing: {
    linux: { daily: number; monthly: number };
    windows: { daily: number; monthly: number };
  };
}

const vpsPackages: VPSPackage[] = [
  {
    id: 'mini',
    name: 'Mini',
    icon: Server,
    specs: {
      cpu: '2 vCPU jádra',
      ram: '4 GB RAM',
      storage: '60 GB rychlé SSD'
    },
    pricing: {
      linux: { daily: 7, monthly: 210 },
      windows: { daily: 27, monthly: 810 }
    }
  },
  {
    id: 'plus',
    name: 'Plus',
    icon: Database,
    specs: {
      cpu: '4 vCPU jádra',
      ram: '8 GB RAM',
      storage: '150 GB SSD'
    },
    pricing: {
      linux: { daily: 15, monthly: 450 },
      windows: { daily: 36, monthly: 1080 }
    }
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Cpu,
    popular: true,
    specs: {
      cpu: '6 vCPU jádra',
      ram: '16 GB RAM',
      storage: '400 GB SSD'
    },
    pricing: {
      linux: { daily: 21, monthly: 630 },
      windows: { daily: 57, monthly: 1710 }
    }
  },
  {
    id: 'max',
    name: 'Max',
    icon: HardDrive,
    specs: {
      cpu: '8 vCPU jádra',
      ram: '32 GB RAM',
      storage: '500 GB SSD'
    },
    pricing: {
      linux: { daily: 27, monthly: 810 },
      windows: { daily: 88, monthly: 2640 }
    }
  }
];

interface VPSPackagesGridProps {
  lang: Locale;
  backupEnabled: boolean;
}

export default function VPSPackagesGrid({ lang, backupEnabled }: VPSPackagesGridProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              {lang === 'cs' ? 'Vyberte si VPS balíček' : 'Choose Your VPS Package'}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {lang === 'cs' 
                ? 'Porovnejte naše VPS balíčky a vyberte si ten, který nejlépe vyhovuje vašim potřebám'
                : 'Compare our VPS packages and choose the one that best fits your needs'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-96 bg-bg-secondary/50 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            {lang === 'cs' ? 'Vyberte si VPS balíček' : 'Choose Your VPS Package'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs' 
              ? 'Porovnejte naše VPS balíčky a vyberte si ten, který nejlépe vyhovuje vašim potřebám'
              : 'Compare our VPS packages and choose the one that best fits your needs'
            }
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vpsPackages.map((pkg, index) => (
            <motion.div
              key={`vps-package-${pkg.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <VPSPackageCard
                package={pkg}
                lang={lang}
                backupEnabled={backupEnabled}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Comparison Helper */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-bg-secondary/50 border border-accent-primary/20 rounded-full">
            <Shield className="w-5 h-5 text-accent-primary mr-3" />
            <span className="text-text-secondary">
              {lang === 'cs' 
                ? 'Všechny balíčky zahrnují 24/7 podporu a 99.9% uptime záruku'
                : 'All packages include 24/7 support and 99.9% uptime guarantee'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function VPSPackageCard({ 
  package: pkg, 
  lang, 
  backupEnabled, 
  index 
}: { 
  package: VPSPackage; 
  lang: Locale; 
  backupEnabled: boolean; 
  index: number;
}) {
  const [selectedOS, setSelectedOS] = useState<'linux' | 'windows'>('linux');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const basePrice = pkg.pricing[selectedOS].daily;
  const finalDailyPrice = backupEnabled ? basePrice * 2 : basePrice;

  if (!isMounted) {
    return (
      <div className="relative bg-bg-secondary border border-accent-primary/20 rounded-3xl p-8 h-full animate-pulse">
        <div className="h-6 bg-accent-primary/20 rounded mb-4"></div>
        <div className="h-4 bg-accent-primary/10 rounded mb-8"></div>
        <div className="h-20 bg-accent-primary/10 rounded mb-8"></div>
        <div className="h-32 bg-accent-primary/10 rounded mb-8"></div>
        <div className="h-12 bg-accent-primary/20 rounded"></div>
      </div>
    );
  }

  return (
    <motion.div 
      className="relative"
      whileHover={{ 
        scale: 1.02,
        y: -4,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Popular Badge - nyní se pohybuje s celou kartou */}
      {pkg.popular && (
        <div className="absolute -top-3 -right-3 z-20">
          <div className="bg-accent-primary text-bg-primary px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
            {lang === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
          </div>
        </div>
      )}

      <div
        className={`relative bg-bg-secondary border rounded-3xl p-8 h-full transition-all duration-300 ${
          pkg.popular ? 'border-accent-primary/40' : 'border-accent-primary/20'
        } hover:border-accent-primary/60 hover:shadow-2xl hover:shadow-accent-primary/10`}
      >
        {/* Package Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-2xl mb-4">
            <pkg.icon className="w-8 h-8 text-accent-primary" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">{pkg.name}</h3>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-8 p-6 bg-bg-tertiary/30 rounded-2xl">
          <div className="text-4xl font-black text-accent-primary mb-2">
            {finalDailyPrice} Kč
          </div>
          <div className="text-sm text-text-secondary mb-3">
            {lang === 'cs' ? 'den s DPH' : 'day with VAT'}
          </div>
          <div className="text-xs text-text-secondary/70">
            {lang === 'cs' ? 'bez DPH' : 'without VAT'}: {Math.round(finalDailyPrice / 1.21)} Kč
          </div>
        </div>

        {/* OS Selection */}
        <div className="mb-8">
          <div className="flex bg-bg-tertiary rounded-full p-1">
            <button
              onClick={() => setSelectedOS('linux')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                selectedOS === 'linux'
                  ? 'bg-accent-primary text-bg-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Linux
            </button>
            <button
              onClick={() => setSelectedOS('windows')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                selectedOS === 'windows'
                  ? 'bg-accent-primary text-bg-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Windows
            </button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-8 flex-grow">
          <h4 className="text-accent-primary font-semibold mb-4 text-center">
            {lang === 'cs' ? 'Specifikace:' : 'Specifications:'}
          </h4>
          <div className="space-y-4">
            {Object.entries(pkg.specs).map(([key, value]) => (
              <div key={key} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-text-secondary text-sm leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.button 
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 10px 25px rgba(0, 255, 127, 0.3)',
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent-primary text-bg-primary font-bold text-lg py-4 rounded-full transition-all duration-300 hover:bg-accent-primary/90 group"
        >
          <span className="flex items-center justify-center">
            {lang === 'cs' ? 'Objednat' : 'Order Now'}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
