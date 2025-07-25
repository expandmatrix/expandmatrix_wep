'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  HardDrive, 
  Shield, 
  Zap,
  Check,
  Info,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSClientProps {
  lang: Locale;
  dict: any;
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

export default function VPSClient({ lang, dict }: VPSClientProps) {
  const [backupEnabled, setBackupEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <HeroSection lang={lang} />
      
      {/* Backup Toggle Section */}
      <BackupToggleSection 
        lang={lang} 
        backupEnabled={backupEnabled}
        setBackupEnabled={setBackupEnabled}
      />
      
      {/* VPS Packages Grid */}
      <VPSPackagesGrid 
        lang={lang} 
        packages={vpsPackages}
        backupEnabled={backupEnabled}
      />

      {/* Final CTA Section */}
      <VPSFinalCTA lang={lang} />
    </div>
  );
}

// Hero Section Component
function HeroSection({ lang }: { lang: Locale }) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 40%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,255,127,0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/30 rounded-full"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${20 + (i * 6) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent-primary/10 rounded-2xl mb-8 backdrop-blur-sm border border-accent-primary/20"
          >
            <Server className="w-10 h-10 text-accent-primary" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-6 leading-tight"
          >
            VPS{' '}
            <span className="text-accent-primary relative inline-block">
              Hosting
              <motion.div 
                className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {lang === 'cs' 
              ? 'Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty. Rychlé SSD úložiště, plná kontrola a špičková bezpečnost. Všechny servery jsou připraveny během 15 minut.'
              : 'High-performance VPS servers for your AI applications and web projects. Fast SSD storage, full control and top security. All servers are ready within 15 minutes.'
            }
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// Backup Toggle Section
function BackupToggleSection({ 
  lang, 
  backupEnabled, 
  setBackupEnabled 
}: { 
  lang: Locale; 
  backupEnabled: boolean; 
  setBackupEnabled: (enabled: boolean) => void;
}) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-2xl p-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent rounded-2xl"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="relative z-10 flex items-center space-x-4">
              <Shield className="w-6 h-6 text-accent-primary" />
              <span className="text-lg font-semibold text-text-primary">
                {lang === 'cs' ? 'BEZPEČNOST DAT' : 'DATA SECURITY'}
              </span>
              <div className="flex items-center space-x-3">
                <span className="text-text-secondary">
                  {lang === 'cs' 
                    ? 'Denní automatické zálohování vašich dat' 
                    : 'Daily automatic backup of your data'
                  }
                </span>
                <motion.button
                  onClick={() => setBackupEnabled(!backupEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                    backupEnabled ? 'bg-accent-primary' : 'bg-bg-tertiary'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                    animate={{
                      x: backupEnabled ? 24 : 4,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced VPS Packages Grid with error boundary
function VPSPackagesGrid({ 
  lang, 
  packages, 
  backupEnabled 
}: { 
  lang: Locale; 
  packages: VPSPackage[]; 
  backupEnabled: boolean;
}) {
  const [loadingError, setLoadingError] = useState(false);

  // Validate packages data
  useEffect(() => {
    if (!packages || packages.length === 0) {
      setLoadingError(true);
    } else {
      setLoadingError(false);
    }
  }, [packages]);

  if (loadingError) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-text-secondary">
              {lang === 'cs' ? 'Načítání VPS balíčků...' : 'Loading VPS packages...'}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <VPSPackageCard
              key={`${pkg.id}-${index}`} // More stable key
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

// Individual VPS Package Card - Fixed version
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
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure component is marked as loaded after mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Memoize price calculation to prevent unnecessary recalculations
  const finalDailyPrice = useMemo(() => {
    const basePrice = pkg.pricing[selectedOS]?.daily || 0;
    return backupEnabled ? basePrice * 2 : basePrice;
  }, [pkg.pricing, selectedOS, backupEnabled]);

  const handleOSChange = (os: 'linux' | 'windows') => {
    setSelectedOS(os);
  };

  // Fallback rendering if data is missing
  if (!pkg || !pkg.pricing || !pkg.pricing[selectedOS]) {
    return (
      <div className="relative bg-bg-secondary/50 border border-accent-primary/10 rounded-3xl p-8 animate-pulse">
        <div className="text-center text-text-secondary">Loading...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${pkg.popular ? 'lg:-mt-4' : ''}`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-accent-primary text-bg-primary px-4 py-2 rounded-full text-sm font-bold">
            {lang === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
          </div>
        </motion.div>
      )}

      {/* Main Card */}
      <motion.div
        className={`relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border rounded-3xl overflow-hidden h-full ${
          pkg.popular 
            ? 'border-accent-primary/40 shadow-2xl shadow-accent-primary/20' 
            : 'border-accent-primary/20'
        }`}
        whileHover={{
          scale: 1.02,
          borderColor: 'rgba(0, 255, 127, 0.6)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl"
            animate={{
              opacity: isHovered ? 0.8 : 0.4,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="relative z-10 p-8">
          {/* Package Icon & Name */}
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-2xl mb-4 backdrop-blur-sm border border-accent-primary/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isLoaded ? 1 : 0.8, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <pkg.icon className="w-8 h-8 text-accent-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold text-text-primary">{pkg.name}</h3>
          </div>

          {/* Specifications */}
          <div className="space-y-4 mb-8">
            {Object.entries(pkg.specs).map(([key, value], specIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 + specIndex * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-accent-primary rounded-full flex-shrink-0" />
                <span className="text-text-secondary text-sm">{value}</span>
              </motion.div>
            ))}
          </div>

          {/* OS Selection */}
          <div className="mb-8">
            <div className="flex bg-bg-secondary/50 rounded-2xl p-1 border border-accent-primary/10">
              {(['linux', 'windows'] as const).map((os) => (
                <button
                  key={os}
                  onClick={() => handleOSChange(os)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedOS === os
                      ? 'bg-accent-primary text-bg-primary shadow-lg'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {os === 'linux' ? 'Linux' : 'Windows'}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <motion.div
              key={`${selectedOS}-${backupEnabled}-${finalDailyPrice}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <div className="space-y-1">
                <div className="text-5xl font-black text-accent-primary leading-none">
                  {finalDailyPrice} Kč
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {lang === 'cs' ? 'den s DPH' : 'day with VAT'}
                </div>
              </div>
              <div className="text-text-secondary text-sm">
                {lang === 'cs' ? 'bez DPH' : 'without VAT'}: {Math.round(finalDailyPrice / 1.21)} Kč / den
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 10px 25px rgba(0, 255, 127, 0.3)',
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-accent-primary text-bg-primary font-bold text-lg py-4 rounded-full transition-all duration-300 overflow-hidden group relative"
          >
            <span className="relative z-10 flex items-center justify-center">
              {lang === 'cs' ? 'Objednat' : 'Order Now'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// VPS Final CTA Section
function VPSFinalCTA({ lang }: { lang: Locale }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/20 rounded-full"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${20 + (i * 6) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0.4, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
          style={{
            perspective: 1000,
          }}
        >
          {/* Main CTA Container with 3D Effect */}
          <motion.div
            className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
            style={{
              rotateX,
              rotateY,
            }}
            whileHover={{
              scale: 1.01,
              borderColor: 'rgba(0, 255, 127, 0.4)',
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated Background Layers */}
            <div className="absolute inset-0">
              {/* Primary Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl"
                animate={{
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Animated Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
              {/* Floating Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-8 left-8 text-accent-primary/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Server className="w-6 h-6" />
                </motion.div>
                
                <motion.div
                  className="absolute top-8 right-8 text-accent-primary/30"
                  animate={{
                    rotate: -360,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight"
              >
                {lang === 'cs' ? (
                  <>
                    Připraven na{' '}
                    <span className="text-accent-primary relative inline-block">
                      výkonný
                      <motion.div 
                        className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </span>
                    <br />
                    VPS server?
                  </>
                ) : (
                  <>
                    Ready for a{' '}
                    <span className="text-accent-primary relative inline-block">
                      powerful
                      <motion.div 
                        className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </span>
                    <br />
                    VPS server?
                  </>
                )}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {lang === 'cs'
                  ? 'Získejte svůj VPS server během 15 minut. Plná kontrola, rychlé SSD úložiště a 24/7 podpora. Začněte ještě dnes!'
                  : 'Get your VPS server within 15 minutes. Full control, fast SSD storage and 24/7 support. Start today!'
                }
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0, 255, 127, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-accent-primary text-bg-primary font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-dark to-accent-primary"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center">
                    {lang === 'cs' ? 'Objednat VPS' : 'Order VPS'}
                    <motion.div
                      className="ml-3"
                      animate={{
                        x: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </span>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(0, 255, 127, 0.6)',
                    color: '#00FF7F',
                    boxShadow: '0 0 30px rgba(0, 255, 127, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-transparent border-2 border-accent-primary/30 text-text-primary font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-accent-primary/10 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10">
                    {lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}
                  </span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                  <span>{lang === 'cs' ? 'Setup za 15 minut' : '15-minute setup'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>{lang === 'cs' ? 'Rychlé SSD úložiště' : 'Fast SSD storage'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>{lang === 'cs' ? '24/7 podpora' : '24/7 support'}</span>
                </div>
              </motion.div>
            </div>

            {/* Corner Accent Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-br-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/20 to-transparent rounded-tl-3xl" />
          </motion.div>

          {/* External Glow Effect */}
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-2xl"
            animate={{
              opacity: isHovered ? 0.8 : 0.4,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-center"
        />
      </div>
    </section>
  );
}
