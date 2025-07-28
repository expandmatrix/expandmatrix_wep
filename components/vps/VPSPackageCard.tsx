'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  HardDrive,
  ArrowRight,
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';
import type { VPSOrderData } from './VPSContent';

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

interface VPSPackageCardProps {
  package: VPSPackage;
  lang: Locale;
  backupEnabled: boolean;
  orderData: VPSOrderData;
  isSelected: boolean;
  onPackageSelect: (packageData: VPSOrderData['package']) => void;
  onOSSelect: (osType: 'linux' | 'windows') => void;
  onOrderProcess: (orderData: VPSOrderData) => void;
  index: number;
}

export default function VPSPackageCard({ 
  package: pkg, 
  lang, 
  backupEnabled, 
  orderData,
  isSelected,
  onPackageSelect,
  onOSSelect,
  onOrderProcess,
  index 
}: VPSPackageCardProps) {
  const [selectedOS, setSelectedOS] = useState<'linux' | 'windows'>('linux');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const basePrice = pkg.pricing[selectedOS].daily;
  const finalDailyPrice = backupEnabled ? basePrice * 2 : basePrice;

  const handleOSChange = (osType: 'linux' | 'windows') => {
    setSelectedOS(osType);
    onOSSelect(osType);
  };

  const handleOrderClick = () => {
    const packageData = {
      id: pkg.id,
      name: pkg.name,
      price: pkg.pricing[selectedOS].monthly,
      cpu: pkg.specs.cpu,
      ram: pkg.specs.ram,
      storage: pkg.specs.storage,
      bandwidth: 'Unlimited',
      features: ['24/7 support', '99.9% uptime', 'SSD storage'],
    };
    
    onPackageSelect(packageData);
    
    const completeOrderData: VPSOrderData = {
      ...orderData,
      package: packageData,
      os: {
        type: selectedOS,
        price: selectedOS === 'windows' ? packageData.price * 0.5 : 0,
      },
      totals: {
        basePrice: packageData.price,
        backupPrice: backupEnabled ? packageData.price * 0.2 : 0,
        osPrice: selectedOS === 'windows' ? packageData.price * 0.5 : 0,
        finalPrice: packageData.price + (backupEnabled ? packageData.price * 0.2 : 0) + (selectedOS === 'windows' ? packageData.price * 0.5 : 0),
      },
    };
    
    onOrderProcess(completeOrderData);
  };

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
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-2xl mb-4">
            <pkg.icon className="w-8 h-8 text-accent-primary" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">{pkg.name}</h3>
        </div>

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

        <div className="mb-8">
          <div className="flex bg-bg-tertiary rounded-full p-1">
            <button
              onClick={() => handleOSChange('linux')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                selectedOS === 'linux'
                  ? 'bg-accent-primary text-bg-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Linux
            </button>
            <button
              onClick={() => handleOSChange('windows')}
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

        <motion.button 
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 10px 25px rgba(0, 255, 127, 0.3)',
          }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOrderClick}
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