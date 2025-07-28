'use client';

import { Shield } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSBackupToggleProps {
  lang: Locale;
  backupEnabled: boolean;
  onBackupToggle: (enabled: boolean) => void;
}

export default function VPSBackupToggle({ 
  lang, 
  backupEnabled, 
  onBackupToggle 
}: VPSBackupToggleProps) {
  
  const handleToggle = () => {
    const newState = !backupEnabled;
    onBackupToggle(newState);
    
    // Log backup selection for order tracking
    console.log('Backup option changed:', {
      enabled: newState,
      timestamp: new Date().toISOString(),
      language: lang,
    });
  };

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
                  onClick={handleToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary ${
                    backupEnabled ? 'bg-accent-primary' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={backupEnabled}
                  aria-label={lang === 'cs' ? 'Zapnout automatické zálohování' : 'Enable automatic backup'}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      backupEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            
            {/* Backup Info */}
            {backupEnabled && (
              <div className="mt-4 p-4 bg-accent-primary/10 rounded-xl border border-accent-primary/20">
                <div className="text-sm text-text-secondary">
                  <div className="flex items-center justify-between mb-2">
                    <span>{lang === 'cs' ? 'Frekvence:' : 'Frequency:'}</span>
                    <span className="text-text-primary font-semibold">
                      {lang === 'cs' ? 'Denně' : 'Daily'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span>{lang === 'cs' ? 'Uchovávání:' : 'Retention:'}</span>
                    <span className="text-text-primary font-semibold">
                      {lang === 'cs' ? '7 dní' : '7 days'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{lang === 'cs' ? 'Obnovení:' : 'Restore:'}</span>
                    <span className="text-text-primary font-semibold">
                      {lang === 'cs' ? '1 klik' : '1-click'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
