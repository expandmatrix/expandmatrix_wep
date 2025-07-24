import React from "react";
import { motion } from "framer-motion";
import PackageCard from './PackageCard';
import { useLanguage } from '@/components/LanguageProvider';

const getVPSPackages = (language) => [
  {
    id: 'mini',
    name: 'Mini',
    specs: {
      cpu: language === 'cs' ? '2 vCPU jádra' : '2 vCPU cores',
      ram: language === 'cs' ? '4 GB RAM' : '4 GB RAM',
      storage: language === 'cs' ? '60 GB rychlé SSD' : '60 GB fast SSD'
    },
    basePrice: {
      linux: 180,
      windows: 650
    },
    features: [
      language === 'cs' ? 'Vysoký výkon' : 'High performance',
      language === 'cs' ? 'SSD úložiště' : 'SSD storage',
      language === 'cs' ? '24/7 monitoring' : '24/7 monitoring',
      language === 'cs' ? 'Plná root kontrola' : 'Full root access'
    ]
  },
  {
    id: 'plus',
    name: 'Plus',
    specs: {
      cpu: language === 'cs' ? '4 vCPU jádra' : '4 vCPU cores',
      ram: language === 'cs' ? '8 GB RAM' : '8 GB RAM',
      storage: language === 'cs' ? '150 GB' : '150 GB (extremely fast SSD)'
    },
    basePrice: {
      linux: 350,
      windows: 900
    },
    features: [
      language === 'cs' ? 'Vyšší výkon' : 'Higher performance',
      language === 'cs' ? 'Rychlé SSD' : 'Fast SSD',
      language === 'cs' ? 'Prioritní podpora' : 'Priority support',
      language === 'cs' ? 'Více RAM pro aplikace' : 'More RAM for apps'
    ],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    specs: {
      cpu: language === 'cs' ? '6 vCPU jáder' : '6 vCPU cores',
      ram: language === 'cs' ? '16 GB RAM' : '16 GB RAM',
      storage: language === 'cs' ? '400 GB' : '400 GB'
    },
    basePrice: {
      linux: 500,
      windows: 1400
    },
    features: [
      language === 'cs' ? 'Profesionální výkon' : 'Professional performance',
      language === 'cs' ? 'NVMe úložiště' : 'NVMe storage',
      language === 'cs' ? 'Dedikovaná podpora' : 'Dedicated support',
      language === 'cs' ? 'Enterprise funkcionalita' : 'Enterprise features'
    ]
  },
  {
    id: 'max',
    name: 'Max',
    specs: {
      cpu: language === 'cs' ? '8 vCPU jáder' : '8 vCPU cores',
      ram: language === 'cs' ? '32 GB RAM' : '32 GB RAM',
      storage: language === 'cs' ? '500 GB' : '500 GB'
    },
    basePrice: {
      linux: 650,
      windows: 2200
    },
    features: [
      language === 'cs' ? 'Maximální výkon' : 'Maximum performance',
      language === 'cs' ? 'Nejrychlejší NVMe' : 'Fastest NVMe',
      language === 'cs' ? 'VIP podpora' : 'VIP support',
      language === 'cs' ? 'Neomezené možnosti' : 'Unlimited possibilities'
    ]
  }
];

const ToggleSwitch = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
      checked ? 'bg-[#00FF7F]' : 'bg-neutral-600'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

export default function VPSPackages({ withBackup, onBackupChange }) {
  const { t, language } = useLanguage();
  const packages = getVPSPackages(language);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-8">
        {t.vpsPage.packages.title && (
          <h2 className="text-3xl font-bold mb-4 text-[#00FF7F]">
            {t.vpsPage.packages.title}
          </h2>
        )}
        {t.vpsPage.packages.subtitle && (
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            {t.vpsPage.packages.subtitle}
          </p>
        )}
      </div>

      {/* Enhanced Apple Liquid Glass Backup Toggle */}
      <div className="flex justify-center mb-12">
        <motion.div 
          className="relative group max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Multiple glass layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/95 via-[#1A1A1A]/85 to-[#1A1A1A]/95 backdrop-blur-2xl rounded-2xl border border-white/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F]/8 via-transparent to-[#00CC66]/8 rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-white/[0.08] to-white/[0.03] rounded-2xl"></div>
          
          {/* Animated border glow */}
          <motion.div 
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FF7F]/40 via-[#00CC66]/30 to-[#00FF7F]/40 p-[1px] opacity-60"
            animate={{
              background: [
                'linear-gradient(90deg, rgba(0,255,127,0.4) 0%, rgba(0,204,102,0.3) 50%, rgba(0,255,127,0.4) 100%)',
                'linear-gradient(180deg, rgba(0,255,127,0.4) 0%, rgba(0,204,102,0.3) 50%, rgba(0,255,127,0.4) 100%)',
                'linear-gradient(270deg, rgba(0,255,127,0.4) 0%, rgba(0,204,102,0.3) 50%, rgba(0,255,127,0.4) 100%)',
                'linear-gradient(360deg, rgba(0,255,127,0.4) 0%, rgba(0,204,102,0.3) 50%, rgba(0,255,127,0.4) 100%)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-[#0A0A0A]/60 backdrop-blur-xl rounded-2xl"></div>
          </motion.div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00FF7F]/40 rounded-full"
                animate={{
                  x: [Math.random() * 300, Math.random() * 300],
                  y: [Math.random() * 80, Math.random() * 80],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Text content */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-[#00FF7F] rounded-full animate-pulse"></div>
                  <span className="text-[#00FF7F] font-semibold text-sm uppercase tracking-wide">
                    {language === 'cs' ? 'Bezpečnost dat' : 'Data Security'}
                  </span>
                </div>
                <p className="text-white font-medium text-base leading-relaxed">
                  {language === 'cs' 
                    ? 'Denní automatické zálohování vašich dat' 
                    : 'Daily automatic backup of your data'
                  }
                </p>
              </div>
              
              {/* Enhanced Toggle Switch */}
              <div className="flex-shrink-0">
                <motion.button
                  onClick={() => onBackupChange(!withBackup)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FF7F]/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] ${
                    withBackup 
                      ? 'bg-gradient-to-r from-[#00FF7F] to-[#00CC66] shadow-lg shadow-[#00FF7F]/30' 
                      : 'bg-gradient-to-r from-neutral-700 to-neutral-600 shadow-inner'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={language === 'cs' ? 'Přepnout denní zálohování' : 'Toggle daily backup'}
                  role="switch"
                  aria-checked={withBackup}
                >
                  {/* Background glow when active */}
                  {withBackup && (
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FF7F]/20 to-[#00CC66]/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  {/* Toggle circle */}
                  <motion.div
                    className={`absolute top-1 w-6 h-6 rounded-full shadow-lg ${
                      withBackup 
                        ? 'bg-white shadow-[0_0_15px_rgba(0,255,127,0.5)]' 
                        : 'bg-white shadow-md'
                    }`}
                    animate={{ x: withBackup ? 36 : 4 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                  >
                    {/* Inner glow */}
                    <motion.div
                      className={`absolute inset-1 rounded-full ${
                        withBackup 
                          ? 'bg-gradient-to-br from-[#00FF7F]/30 to-transparent' 
                          : 'bg-gradient-to-br from-neutral-400/20 to-transparent'
                      }`}
                      animate={{
                        opacity: withBackup ? [0.3, 0.7, 0.3] : [0.1, 0.3, 0.1],
                        scale: withBackup ? [1, 1.1, 1] : [1, 1.05, 1]
                      }}
                      transition={{
                        duration: withBackup ? 1.5 : 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Center dot */}
                    <motion.div
                      className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
                        withBackup ? 'bg-[#00FF7F]' : 'bg-neutral-400'
                      }`}
                      animate={{
                        scale: withBackup ? [1, 1.3, 1] : [1, 0.9, 1],
                        opacity: withBackup ? [0.7, 1, 0.7] : [0.5, 0.7, 0.5]
                      }}
                      transition={{
                        duration: withBackup ? 1.2 : 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            withBackup={withBackup}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export { getVPSPackages };
