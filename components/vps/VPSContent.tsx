'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  HardDrive, 
  Shield, 
  Check,
  ArrowRight,
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSContentProps {
  lang: Locale;
  dict: any;
  backupEnabled: boolean;
  onBackupToggle: (enabled: boolean) => void;
}

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
    popular: true,
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

export function VPSContent({ lang, dict, backupEnabled, onBackupToggle }: VPSContentProps) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <HeroSection lang={lang} />
      <BackupToggleSection 
        lang={lang} 
        backupEnabled={backupEnabled}
        onBackupToggle={onBackupToggle}
      />
      <VPSPackagesGrid 
        lang={lang} 
        packages={vpsPackages}
        backupEnabled={backupEnabled}
      />
      <VPSFinalCTA lang={lang} />
    </div>
  );
}

function HeroSection({ lang }: { lang: Locale }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 40%, rgba(0,255,127,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent-primary/10 rounded-2xl mb-8"
          >
            <Server className="w-10 h-10 text-accent-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-6"
          >
            VPS{' '}
            <span className="text-accent-primary">Hosting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto"
          >
            {lang === 'cs' 
              ? 'Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty.'
              : 'High-performance VPS servers for your AI applications and web projects.'
            }
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function BackupToggleSection({ 
  lang, 
  backupEnabled, 
  onBackupToggle 
}: { 
  lang: Locale; 
  backupEnabled: boolean; 
  onBackupToggle: (enabled: boolean) => void;
}) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-bg-secondary border border-accent-primary/20 rounded-2xl p-6">
            <div className="flex items-center space-x-4">
              <Shield className="w-6 h-6 text-accent-primary" />
              <span className="text-lg font-semibold text-text-primary">
                {lang === 'cs' ? 'BEZPEČNOST DAT' : 'DATA SECURITY'}
              </span>
              <div className="flex items-center space-x-3">
                <span className="text-text-secondary">
                  {lang === 'cs' 
                    ? 'Denní automatické zálohování' 
                    : 'Daily automatic backup'
                  }
                </span>
                <button
                  onClick={() => onBackupToggle(!backupEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    backupEnabled ? 'bg-accent-primary' : 'bg-bg-tertiary'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                      backupEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VPSPackagesGrid({ 
  lang, 
  packages, 
  backupEnabled 
}: { 
  lang: Locale; 
  packages: VPSPackage[]; 
  backupEnabled: boolean;
}) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <VPSPackageCard
              key={pkg.id}
              package={pkg}
              lang={lang}
              backupEnabled={backupEnabled}
              index={index}
            />
          ))}
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

  const basePrice = pkg.pricing[selectedOS].daily;
  const finalDailyPrice = backupEnabled ? basePrice * 2 : basePrice;

  return (
    <div className={`relative ${pkg.popular ? 'lg:-mt-4' : ''}`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-accent-primary text-bg-primary px-4 py-2 rounded-full text-sm font-bold">
            {lang === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
          </div>
        </div>
      )}

      <div className={`bg-bg-secondary border rounded-3xl p-8 h-full ${
        pkg.popular ? 'border-accent-primary/40' : 'border-accent-primary/20'
      }`}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-2xl mb-4">
            <pkg.icon className="w-8 h-8 text-accent-primary" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary">{pkg.name}</h3>
        </div>

        <div className="mb-8">
          <div className="flex bg-bg-tertiary rounded-full p-1">
            <button
              onClick={() => setSelectedOS('linux')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                selectedOS === 'linux'
                  ? 'bg-accent-primary text-bg-primary'
                  : 'text-text-secondary'
              }`}
            >
              Linux
            </button>
            <button
              onClick={() => setSelectedOS('windows')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                selectedOS === 'windows'
                  ? 'bg-accent-primary text-bg-primary'
                  : 'text-text-secondary'
              }`}
            >
              Windows
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-5xl font-black text-accent-primary">
            {finalDailyPrice} Kč
          </div>
          <div className="text-sm text-text-secondary">
            {lang === 'cs' ? 'den s DPH' : 'day with VAT'}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-accent-primary font-semibold mb-4">
            {lang === 'cs' ? 'Specifikace:' : 'Specifications:'}
          </h4>
          <div className="space-y-3">
            {Object.entries(pkg.specs).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-accent-primary" />
                <span className="text-text-secondary">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-accent-primary text-bg-primary font-bold text-lg py-4 rounded-full">
          <span className="flex items-center justify-center">
            {lang === 'cs' ? 'Objednat' : 'Order Now'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </button>
      </div>
    </div>
  );
}

function VPSFinalCTA({ lang }: { lang: Locale }) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-text-primary mb-6">
          {lang === 'cs' ? 'Připraveni začít?' : 'Ready to get started?'}
        </h2>
        <p className="text-xl text-text-secondary mb-8">
          {lang === 'cs' 
            ? 'Váš VPS server bude připraven během 15 minut.'
            : 'Your VPS server will be ready within 15 minutes.'
          }
        </p>
        <button className="bg-accent-primary text-bg-primary font-bold text-lg px-12 py-4 rounded-full">
          {lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}
        </button>
      </div>
    </section>
  );
}
