import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Info } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Custom SVG Icons for each tier
const TierIcons = {
  mini: () => (
    <svg width="56" height="56" viewBox="0 0 100 100" className="w-14 h-14">
      {/* Single server unit */}
      <rect x="25" y="30" width="50" height="35" rx="4" fill="currentColor" stroke="currentColor" strokeWidth="2" fillOpacity="0.1"/>
      {/* Power indicator */}
      <circle cx="32" cy="42" r="3" fill="currentColor"/>
      {/* Storage slots */}
      <rect x="40" y="38" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.6"/>
      <rect x="40" y="45" width="25" height="4" rx="2" fill="currentColor" fillOpacity="0.4"/>
      <rect x="40" y="52" width="20" height="4" rx="2" fill="currentColor" fillOpacity="0.3"/>
      {/* Ventilation */}
      <circle cx="65" cy="42" r="1.5" fill="currentColor" fillOpacity="0.5"/>
      <circle cx="68" cy="42" r="1.5" fill="currentColor" fillOpacity="0.5"/>
    </svg>
  ),
  plus: () => (
    <svg width="56" height="56" viewBox="0 0 100 100" className="w-14 h-14">
      {/* Main server unit */}
      <rect x="20" y="25" width="55" height="40" rx="4" fill="currentColor" stroke="currentColor" strokeWidth="2" fillOpacity="0.1"/>
      {/* Additional storage module */}
      <rect x="75" y="32" width="15" height="26" rx="3" fill="currentColor" fillOpacity="0.15"/>
      {/* Power indicators */}
      <circle cx="27" cy="37" r="3" fill="currentColor"/>
      <circle cx="27" cy="53" r="3" fill="currentColor"/>
      {/* Storage arrays */}
      <rect x="35" y="33" width="32" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="35" y="39" width="32" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="35" y="45" width="32" height="3" rx="1.5" fill="currentColor" fillOpacity="0.5"/>
      <rect x="35" y="51" width="32" height="3" rx="1.5" fill="currentColor" fillOpacity="0.5"/>
      <rect x="35" y="57" width="32" height="3" rx="1.5" fill="currentColor" fillOpacity="0.3"/>
      {/* External storage indicator */}
      <rect x="78" y="38" width="9" height="3" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
      <rect x="78" y="44" width="9" height="3" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
    </svg>
  ),
  pro: () => (
    <svg width="56" height="56" viewBox="0 0 100 100" className="w-14 h-14">
      {/* Triple server rack */}
      <rect x="15" y="20" width="70" height="16" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
      <rect x="15" y="40" width="70" height="16" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
      <rect x="15" y="60" width="70" height="16" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
      
      {/* Power indicators for each unit */}
      <circle cx="22" cy="28" r="2" fill="currentColor"/>
      <circle cx="22" cy="48" r="2" fill="currentColor"/>
      <circle cx="22" cy="68" r="2" fill="currentColor"/>
      
      {/* Storage drives */}
      <rect x="30" y="24" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="30" y="30" width="40" height="3" rx="1.5" fill="currentColor" fillOpacity="0.5"/>
      
      <rect x="30" y="44" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="30" y="50" width="40" height="3" rx="1.5" fill="currentColor" fillOpacity="0.5"/>
      
      <rect x="30" y="64" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="30" y="70" width="40" height="3" rx="1.5" fill="currentColor" fillOpacity="0.5"/>
      
      {/* Network connections */}
      <line x1="85" y1="28" x2="93" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="85" y1="48" x2="93" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="85" y1="68" x2="93" y2="76" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="93" cy="20" r="2" fill="currentColor"/>
      <circle cx="93" cy="48" r="2" fill="currentColor"/>
      <circle cx="93" cy="76" r="2" fill="currentColor"/>
    </svg>
  ),
  max: () => (
    <svg width="56" height="56" viewBox="0 0 100 100" className="w-14 h-14">
      {/* Large enterprise server */}
      <rect x="10" y="15" width="80" height="60" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" fillOpacity="0.1"/>
      
      {/* Multiple power indicators */}
      <circle cx="18" cy="27" r="2.5" fill="currentColor"/>
      <circle cx="18" cy="40" r="2.5" fill="currentColor"/>
      <circle cx="18" cy="53" r="2.5" fill="currentColor"/>
      <circle cx="18" cy="66" r="2.5" fill="currentColor"/>
      
      {/* High-density storage arrays */}
      <rect x="28" y="21" width="55" height="3" rx="1.5" fill="currentColor" fillOpacity="0.8"/>
      <rect x="28" y="27" width="55" height="3" rx="1.5" fill="currentColor" fillOpacity="0.8"/>
      <rect x="28" y="33" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="28" y="39" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="28" y="45" width="55" height="3" rx="1.5" fill="currentColor" fillOpacity="0.8"/>
      <rect x="28" y="51" width="55" height="3" rx="1.5" fill="currentColor" fillOpacity="0.8"/>
      <rect x="28" y="57" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="28" y="63" width="50" height="3" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
      <rect x="28" y="69" width="45" height="3" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
      
      {/* Performance/capacity bars */}
      <rect x="75" y="65" width="4" height="12" fill="currentColor"/>
      <rect x="80" y="58" width="4" height="19" fill="currentColor"/>
      <rect x="85" y="51" width="4" height="26" fill="currentColor"/>
      <rect x="90" y="44" width="4" height="33" fill="currentColor"/>
      
      {/* High-performance indicator */}
      <line x1="50" y1="80" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <polyline points="45,25 50,20 55,25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
};

export default function PackageCard({ package: pkg, withBackup, index }) {
  const { language } = useLanguage();
  const [selectedOS, setSelectedOS] = useState('linux');
  
  // Backup multiplier - easily configurable
  const BACKUP_MULTIPLIER = 2;

  // Get the appropriate icon based on package name
  const getPackageIcon = (packageName) => {
    const name = packageName.toLowerCase();
    if (TierIcons[name]) {
      return TierIcons[name]();
    }
    // Fallback to default server icon if no match
    return TierIcons.mini();
  };

  // Calculate base price without tax (daily)
  const calculateBasePriceDaily = () => {
    let monthlyPrice = pkg.basePrice[selectedOS];
    
    // Convert to daily price (monthly / 30)
    return Math.round(monthlyPrice / 30);
  };

  // Calculate price with VAT (daily)
  const calculatePriceWithVATDaily = () => {
    let priceWithVAT = Math.round(calculateBasePriceDaily() * 1.21);
    
    // Apply backup multiplier to final price with VAT
    if (withBackup) {
      priceWithVAT *= BACKUP_MULTIPLIER;
    }
    
    return priceWithVAT;
  };

  // Calculate base price with backup for display (without VAT)
  const calculateBasePriceWithBackupDaily = () => {
    let basePrice = calculateBasePriceDaily();
    
    if (withBackup) {
      basePrice *= BACKUP_MULTIPLIER;
    }
    
    return basePrice;
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    }
  };

  const OSToggle = ({ os, label, isActive, onClick }) => (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'bg-[#00FF7F] text-[#0A0A0A] shadow-[0_0_15px_rgba(0,255,127,0.4)]'
          : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
      }`}
      onClick={() => onClick(os)}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );

  const SpecItem = ({ icon, label, value, tooltip }) => (
    <li className="flex items-start">
      <CheckCircle className="w-4 h-4 text-[#00FF7F] mr-2 mt-0.5 flex-shrink-0" />
      <div className="flex items-center gap-1 flex-1">
        <span className="text-neutral-300">{label}: {value}</span>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3 h-3 text-neutral-400 hover:text-[#00FF7F] cursor-help transition-colors" />
              </TooltipTrigger>
              <TooltipContent side="right" className="max-w-xs">
                <p className="text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </li>
  );

  const getSpecTooltips = () => ({
    cpu: language === 'cs' 
      ? 'Virtuální procesory pro výpočetní výkon. Více jader = rychlejší zpracování úloh.'
      : 'Virtual processors for computational power. More cores = faster task processing.',
    ram: language === 'cs'
      ? 'Operační paměť pro běžící aplikace. Více RAM = více aplikací současně bez zpomalení.'
      : 'Operating memory for running applications. More RAM = more apps simultaneously without slowdown.',
    storage: language === 'cs'
      ? 'Rychlé SSD/NVMe úložiště pro data a aplikace. Vyšší rychlost čtení/zápisu než tradiční HDD.'
      : 'Fast SSD/NVMe storage for data and applications. Higher read/write speeds than traditional HDD.'
  });

  return (
    <motion.div variants={itemVariants}>
      <Card 
        className={`bg-[#1A1A1A] border-0 rounded-3xl p-8 text-center group transition-all duration-500 hover:scale-102 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] h-full flex flex-col cursor-pointer relative ${
          pkg.popular ? 'ring-2 ring-[#00FF7F]' : ''
        }`}
      >
        {pkg.popular && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
          >
            <Badge className="bg-[#00FF7F] text-[#0A0A0A] font-semibold px-3 py-1 shadow-lg rounded-full">
              {language === 'cs' ? 'Nejpopulárnější' : 'Most Popular'}
            </Badge>
          </motion.div>
        )}

        <CardContent className="p-0 flex flex-col h-full">
          {/* Icon */}
          <div className="text-[#00FF7F] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:[&>svg]:drop-shadow-[0_0_25px_rgba(0,255,127,0.8)] flex justify-center">
            {getPackageIcon(pkg.name)}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold mb-6 group-hover:text-[#00FF7F] transition-colors duration-300 text-white">
            {pkg.name}
          </h3>
          
          {/* Price Display */}
          <motion.div 
            className="py-4 mb-6"
            key={`${selectedOS}-${withBackup}`}
            animate={{ 
              scale: [1, 1.1, 1],
              textShadow: [
                "0 0 0px rgba(0, 255, 127, 0)",
                "0 0 20px rgba(0, 255, 127, 0.6)",
                "0 0 0px rgba(0, 255, 127, 0)"
              ]
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Hlavní cena s DPH */}
            <div className="mb-2">
              <span className="text-3xl font-bold text-[#00FF7F]">
                {calculatePriceWithVATDaily()} {language === 'cs' ? 'Kč' : 'CZK'}
              </span>
              <span className="text-neutral-400 ml-2 text-sm">
                {language === 'cs' ? '/ den s DPH' : '/ day with VAT'}
              </span>
            </div>
            
            {/* Vedlejší cena bez DPH */}
            <div className="text-sm text-neutral-500">
              {language === 'cs' ? 'bez DPH: ' : 'without VAT: '}{calculateBasePriceDaily()} {language === 'cs' ? 'Kč' : 'CZK'}
            </div>
          </motion.div>

          {/* OS Toggle */}
          <div className="flex justify-center space-x-2 mb-6">
            <OSToggle
              os="linux"
              label="Linux"
              isActive={selectedOS === 'linux'}
              onClick={setSelectedOS}
            />
            <OSToggle
              os="windows"
              label="Windows"
              isActive={selectedOS === 'windows'}
              onClick={setSelectedOS}
            />
          </div>

          {/* Specifications */}
          <div className="text-left mb-8 flex-grow">
            <h4 className="text-[#00FF7F] font-semibold mb-4 text-center">
              {language === 'cs' ? 'Specifikace:' : 'Specifications:'}
            </h4>
            <ul className="space-y-4 text-sm">
              <SpecItem 
                label={language === 'cs' ? 'CPU' : 'CPU'}
                value={pkg.specs.cpu}
                tooltip={getSpecTooltips().cpu}
              />
              <SpecItem 
                label={language === 'cs' ? 'RAM' : 'RAM'}
                value={pkg.specs.ram}
                tooltip={getSpecTooltips().ram}
              />
              <SpecItem 
                label={language === 'cs' ? 'Úložiště' : 'Storage'}
                value={pkg.specs.storage}
                tooltip={getSpecTooltips().storage}
              />
            </ul>
          </div>
          
          {/* CTA Button */}
          <motion.div className="mt-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button 
              className={`w-full font-semibold relative overflow-hidden rounded-full transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'bg-gradient-to-r from-[#00FF7F] to-[#00CC66] text-[#0A0A0A] hover:from-[#00CC66] hover:to-[#00AA55]' 
                  : 'bg-transparent border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] border-2'
              }`}
              variant={pkg.popular ? "default" : "outline"}
            >
              <span className="relative z-10">
                {language === 'cs' ? 'Objednat' : 'Order Now'}
              </span>
              <span className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
