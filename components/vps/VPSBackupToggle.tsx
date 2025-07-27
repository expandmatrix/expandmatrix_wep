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
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    backupEnabled ? 'bg-accent-primary' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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