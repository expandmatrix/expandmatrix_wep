'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/getDictionary';
import VPSHero from './VPSHero';
import VPSBackupToggle from './VPSBackupToggle';
import VPSPackagesGrid from './VPSPackagesGrid';
import VPSFinalCTA from './VPSFinalCTA';

// Order data structure
export interface VPSOrderData {
  package: {
    id: string;
    name: string;
    price: number;
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
    features: string[];
  } | null;
  backup: {
    enabled: boolean;
    price: number;
  };
  os: {
    type: 'linux' | 'windows';
    price: number;
  };
  totals: {
    basePrice: number;
    backupPrice: number;
    osPrice: number;
    finalPrice: number;
  };
  metadata: {
    currency: 'CZK';
    billingCycle: 'monthly';
    language: Locale;
    timestamp: string;
  };
}

interface VPSContentProps {
  lang: Locale;
  dict: any;
}

export function VPSContent({ lang, dict }: VPSContentProps) {
  const [backupEnabled, setBackupEnabled] = useState(true);
  
  // Order state management
  const [orderData, setOrderData] = useState<VPSOrderData>({
    package: null,
    backup: {
      enabled: true,
      price: 0,
    },
    os: {
      type: 'linux',
      price: 0,
    },
    totals: {
      basePrice: 0,
      backupPrice: 0,
      osPrice: 0,
      finalPrice: 0,
    },
    metadata: {
      currency: 'CZK',
      billingCycle: 'monthly',
      language: lang,
      timestamp: new Date().toISOString(),
    },
  });

  // Update backup in order data
  const handleBackupToggle = (enabled: boolean) => {
    setBackupEnabled(enabled);
    setOrderData(prev => {
      const backupPrice = enabled && prev.package ? prev.package.price * 0.2 : 0;
      const newTotals = calculateTotals(prev.package?.price || 0, backupPrice, prev.os.price);
      
      return {
        ...prev,
        backup: {
          enabled,
          price: backupPrice,
        },
        totals: newTotals,
        metadata: {
          ...prev.metadata,
          timestamp: new Date().toISOString(),
        },
      };
    });
  };

  // Update package selection in order data
  const handlePackageSelect = (packageData: VPSOrderData['package']) => {
    setOrderData(prev => {
      const basePrice = packageData?.price || 0;
      const backupPrice = prev.backup.enabled ? basePrice * 0.2 : 0;
      const newTotals = calculateTotals(basePrice, backupPrice, prev.os.price);
      
      return {
        ...prev,
        package: packageData,
        totals: newTotals,
        metadata: {
          ...prev.metadata,
          timestamp: new Date().toISOString(),
        },
      };
    });
  };

  // Update OS selection in order data
  const handleOSSelect = (osType: 'linux' | 'windows') => {
    setOrderData(prev => {
      const osPrice = osType === 'windows' && prev.package ? prev.package.price * 0.5 : 0;
      const newTotals = calculateTotals(prev.package?.price || 0, prev.backup.price, osPrice);
      
      return {
        ...prev,
        os: {
          type: osType,
          price: osPrice,
        },
        totals: newTotals,
        metadata: {
          ...prev.metadata,
          timestamp: new Date().toISOString(),
        },
      };
    });
  };

  // Calculate totals helper function
  const calculateTotals = (basePrice: number, backupPrice: number, osPrice: number) => ({
    basePrice,
    backupPrice,
    osPrice,
    finalPrice: basePrice + backupPrice + osPrice,
  });

  // Handle order processing
  const handleOrderProcess = (orderData: VPSOrderData) => {
    console.log('VPS Order Data:', orderData);
    
    if (!orderData.package) {
      console.error('No package selected');
      return;
    }

    console.log('Processing VPS order:', {
      ...orderData,
      readableTotal: `${orderData.totals.finalPrice} ${orderData.metadata.currency}`,
      readablePackage: `${orderData.package.name} (${orderData.package.cpu}, ${orderData.package.ram}, ${orderData.package.storage})`,
      readableOptions: {
        backup: orderData.backup.enabled ? 'Enabled' : 'Disabled',
        os: orderData.os.type.charAt(0).toUpperCase() + orderData.os.type.slice(1),
      },
    });
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <VPSHero lang={lang} />
      <VPSBackupToggle 
        lang={lang} 
        backupEnabled={backupEnabled}
        onBackupToggle={handleBackupToggle}
      />
      <VPSPackagesGrid 
        lang={lang} 
        backupEnabled={backupEnabled}
        orderData={orderData}
        onPackageSelect={handlePackageSelect}
        onOSSelect={handleOSSelect}
        onOrderProcess={handleOrderProcess}
      />
      <VPSFinalCTA lang={lang} />
    </div>
  );
}
