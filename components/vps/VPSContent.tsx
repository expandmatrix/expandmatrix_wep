'use client';

import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/getDictionary';
import VPSHero from './VPSHero';
import VPSBackupToggle from './VPSBackupToggle';
import VPSPackagesGrid from './VPSPackagesGrid';
import VPSFinalCTA from './VPSFinalCTA';

interface VPSContentProps {
  lang: Locale;
  dict: any;
}

export function VPSContent({ lang, dict }: VPSContentProps) {
  const [backupEnabled, setBackupEnabled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <div className="h-screen bg-bg-primary animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <VPSHero lang={lang} />
      <VPSBackupToggle 
        lang={lang} 
        backupEnabled={backupEnabled}
        onBackupToggle={setBackupEnabled}
      />
      <VPSPackagesGrid 
        lang={lang} 
        backupEnabled={backupEnabled}
      />
      <VPSFinalCTA lang={lang} />
    </div>
  );
}
