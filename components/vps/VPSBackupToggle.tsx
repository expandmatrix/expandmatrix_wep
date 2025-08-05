'use client';

import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
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
    console.log('VPSBackupToggle: Toggling backup from', backupEnabled, 'to', newState);
    onBackupToggle(newState);
    
    console.log('Backup option changed:', {
      enabled: newState,
      timestamp: new Date().toISOString(),
      language: lang,
    });
  };

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div 
            className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl p-8 shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(0, 255, 127, 0.4)',
              boxShadow: '0 20px 60px rgba(0, 255, 127, 0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Liquid Glass Background Effect */}
            <motion.div
              className="absolute inset-0 opacity-30 rounded-3xl"
              style={{
                background: `
                  linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
                  linear-gradient(-45deg, transparent 30%, rgba(0,255,127,0.05) 50%, transparent 70%)
                `
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative z-10 flex items-center justify-between space-x-6">
              {/* Left Section - Icon & Title */}
              <div className="flex items-center space-x-4">
                <motion.div
                  className="p-3 bg-accent-primary/20 rounded-2xl backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="w-8 h-8 text-accent-primary" />
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {lang === 'cs' ? 'BEZPEČNOST DAT' : 'DATA SECURITY'}
                  </h3>
                  <p className="text-text-secondary">
                    {lang === 'cs' 
                      ? 'Denní automatické zálohování' 
                      : 'Daily automatic backup'
                    }
                  </p>
                </div>
              </div>

              {/* Right Section - Modern Toggle Switch */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-text-secondary">
                  {backupEnabled 
                    ? (lang === 'cs' ? 'Zapnuto' : 'Enabled')
                    : (lang === 'cs' ? 'Vypnuto' : 'Disabled')
                  }
                </span>
                
                {/* Apple-style Liquid Glass Toggle */}
                <motion.button
                  onClick={handleToggle}
                  className={`
                    relative w-16 h-8 rounded-full p-1 cursor-pointer
                    transition-all duration-500 ease-out
                    focus:outline-none focus:ring-4 focus:ring-accent-primary/30
                    ${backupEnabled 
                      ? 'bg-gradient-to-r from-accent-primary to-green-400 shadow-lg shadow-accent-primary/30' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 shadow-inner'
                    }
                  `}
                  style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="switch"
                  aria-checked={backupEnabled}
                  aria-label={lang === 'cs' ? 'Zapnout automatické zálohování' : 'Enable automatic backup'}
                >
                  {/* Toggle Knob */}
                  <motion.div
                    className={`
                      w-6 h-6 rounded-full shadow-lg
                      flex items-center justify-center
                      ${backupEnabled 
                        ? 'bg-white shadow-accent-primary/20' 
                        : 'bg-gray-300 shadow-gray-800/20'
                      }
                    `}
                    style={{
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                    animate={{
                      x: backupEnabled ? 32 : 0,
                      rotate: backupEnabled ? 360 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.6
                    }}
                  >
                    {/* Inner Glow */}
                    <motion.div
                      className={`
                        w-3 h-3 rounded-full
                        ${backupEnabled 
                          ? 'bg-gradient-to-br from-accent-primary/30 to-green-400/30' 
                          : 'bg-gray-400/30'
                        }
                      `}
                      animate={{
                        scale: backupEnabled ? [1, 1.2, 1] : 1,
                        opacity: backupEnabled ? [0.5, 1, 0.5] : 0.3,
                      }}
                      transition={{
                        duration: 2,
                        repeat: backupEnabled ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Background Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: backupEnabled 
                        ? 'radial-gradient(circle, rgba(0,255,127,0.3) 0%, transparent 70%)'
                        : 'none'
                    }}
                    animate={{
                      scale: backupEnabled ? [1, 1.1, 1] : 1,
                      opacity: backupEnabled ? [0.5, 0.8, 0.5] : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: backupEnabled ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              </div>
            </div>
            
            {/* Backup Info Panel */}
            <motion.div
              initial={false}
              animate={{
                height: backupEnabled ? 'auto' : 0,
                opacity: backupEnabled ? 1 : 0,
                marginTop: backupEnabled ? 24 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-br from-accent-primary/10 via-accent-primary/5 to-transparent rounded-2xl border border-accent-primary/20 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-text-secondary mb-1">
                      {lang === 'cs' ? 'Frekvence' : 'Frequency'}
                    </div>
                    <div className="text-text-primary font-semibold">
                      {lang === 'cs' ? 'Denně' : 'Daily'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-text-secondary mb-1">
                      {lang === 'cs' ? 'Uchovávání' : 'Retention'}
                    </div>
                    <div className="text-text-primary font-semibold">
                      {lang === 'cs' ? '7 dní' : '7 days'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-text-secondary mb-1">
                      {lang === 'cs' ? 'Obnovení' : 'Restore'}
                    </div>
                    <div className="text-text-primary font-semibold">
                      {lang === 'cs' ? '1 klik' : '1-click'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
