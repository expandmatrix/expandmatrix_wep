'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  HardDrive, 
  Shield,
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';
import type { VPSOrderData } from './VPSContent';
import VPSPackageCard from './VPSPackageCard';

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
  orderData: VPSOrderData;
  onPackageSelect: (packageData: VPSOrderData['package']) => void;
  onOSSelect: (osType: 'linux' | 'windows') => void;
  onOrderProcess: (orderData: VPSOrderData) => void;
}

export default function VPSPackagesGrid({
  lang,
  backupEnabled,
  orderData,
  onPackageSelect,
  onOSSelect,
  onOrderProcess
}: VPSPackagesGridProps) {

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/30 rounded-full blur-sm"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                orderData={orderData}
                isSelected={orderData.package?.id === pkg.id}
                onPackageSelect={onPackageSelect}
                onOSSelect={onOSSelect}
                onOrderProcess={onOrderProcess}
                index={index}
              />
            </motion.div>
          ))}
        </div>

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


