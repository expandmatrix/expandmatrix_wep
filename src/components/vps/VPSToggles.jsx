import React, { useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

// Memoizovaný ToggleSwitch pro prevenci re-renderů
const ToggleSwitch = React.memo(({ enabled, onChange, label, tooltip, ariaLabel }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [wasEnabledOnClick, setWasEnabledOnClick] = useState(false);

  const handleToggleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setWasEnabledOnClick(enabled);
    setIsAnimating(true);
    onChange(!enabled);
    
    setTimeout(() => setIsAnimating(false), 400);
  }, [enabled, onChange]);

  const handleTooltipEnter = useCallback(() => {
    setIsTooltipVisible(true);
  }, []);

  const handleTooltipLeave = useCallback(() => {
    setIsTooltipVisible(false);
  }, []);

  const handleButtonEnter = useCallback(() => {
    setIsButtonHovered(true);
  }, []);

  const handleButtonLeave = useCallback(() => {
    setIsButtonHovered(false);
  }, []);

  // Memoizované animace pro prevenci zbytečných re-renderů
  const backgroundGlowAnimation = useMemo(() => ({
    background: [
      'radial-gradient(circle, rgba(0,255,127,0.1) 0%, rgba(0,204,102,0.1) 100%)',
      'radial-gradient(circle, rgba(0,255,127,0.2) 0%, rgba(0,204,102,0.2) 100%)',
      'radial-gradient(circle, rgba(0,255,127,0.1) 0%, rgba(0,204,102,0.1) 100%)'
    ]
  }), []);

  const innerGlowAnimation = useMemo(() => 
    enabled ? {
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.1, 1]
    } : { 
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.05, 1]
    }
  , [enabled]);

  const centerDotAnimation = useMemo(() => 
    enabled ? {
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7]
    } : {
      scale: [1, 0.9, 1],
      opacity: [0.5, 0.7, 0.5]
    }
  , [enabled]);

  const rippleBackground = useMemo(() => 
    !wasEnabledOnClick 
      ? 'radial-gradient(circle, rgba(0,255,127,0.4) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)'
  , [wasEnabledOnClick]);

  return (
    <div className="flex flex-col items-center space-y-4 relative">
      {/* Label and Info */}
      <div className="flex items-center justify-center space-x-2 relative">
        <span className="text-sm text-neutral-200 font-medium tracking-wide select-none">
          {label}
        </span>
        {tooltip && (
          <div 
            className="relative inline-block cursor-help"
            onMouseEnter={handleTooltipEnter}
            onMouseLeave={handleTooltipLeave}
          >
            <Info className="w-4 h-4 text-neutral-400 hover:text-[#00FF7F] transition-colors duration-200" />
            
            {/* Simple tooltip */}
            <AnimatePresence>
              {isTooltipVisible && (
                <motion.div
                  className="absolute px-4 py-3 text-sm text-white bg-black/95 backdrop-blur-sm rounded-lg border border-[#00FF7F]/30 shadow-lg pointer-events-none z-50"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    bottom: '100%',
                    left: '50%',
                    marginBottom: '8px',
                    transform: 'translateX(-50%)',
                    minWidth: '200px',
                    maxWidth: '300px',
                    whiteSpace: 'normal',
                    textAlign: 'center'
                  }}
                >
                  {tooltip}
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-black/95"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      
      {/* Toggle Button */}
      <div className="relative">
        <motion.button
          className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none overflow-hidden ${
            enabled 
              ? 'bg-gradient-to-r from-[#00FF7F] to-[#00CC66] shadow-lg shadow-[#00FF7F]/30' 
              : 'bg-gradient-to-r from-neutral-700 to-neutral-600 shadow-inner'
          }`}
          onClick={handleToggleClick}
          onMouseEnter={handleButtonEnter}
          onMouseLeave={handleButtonLeave}
          aria-label={ariaLabel}
          role="switch"
          aria-checked={enabled}
          animate={{ scale: isButtonHovered ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          disabled={isAnimating}
        >
          {/* Background glow */}
          {enabled && (
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={backgroundGlowAnimation}
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
              enabled 
                ? 'bg-white shadow-[0_0_15px_rgba(0,255,127,0.5)]' 
                : 'bg-white shadow-md'
            }`}
            animate={{ x: enabled ? 36 : 4 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            {/* Inner glow */}
            <motion.div
              className={`absolute inset-1 rounded-full ${
                enabled 
                  ? 'bg-gradient-to-br from-[#00FF7F]/20 to-transparent' 
                  : 'bg-gradient-to-br from-neutral-400/10 to-transparent'
              }`}
              animate={innerGlowAnimation}
              transition={{
                duration: enabled ? 1.5 : 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Center dot */}
            <motion.div
              className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
                enabled ? 'bg-[#00FF7F]' : 'bg-neutral-400'
              }`}
              animate={centerDotAnimation}
              transition={{
                duration: enabled ? 1.2 : 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Click ripple effect */}
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0, opacity: 0.4 }}
                animate={{ scale: 1.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ background: rippleBackground }}
              />
            )}
          </AnimatePresence>
          
          {/* Particles */}
          <AnimatePresence>
            {enabled && (
              <>
                <motion.div
                  className="absolute w-1 h-1 bg-[#00FF7F] rounded-full"
                  key="particle1"
                  animate={{
                    x: [8, 48, 8],
                    y: [12, 20, 12],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-0.5 h-0.5 bg-[#00CC66] rounded-full"
                  key="particle2"
                  animate={{
                    x: [48, 8, 48],
                    y: [20, 12, 20],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
});

ToggleSwitch.displayName = 'ToggleSwitch';

export default function VPSToggles({ withBackup, onBackupChange }) {
  const { t, language } = useLanguage();

  const backupToggleProps = useMemo(() => ({
    enabled: withBackup,
    onChange: onBackupChange,
    label: t.vpsPage.toggles.withBackup,
    tooltip: t.vpsPage.toggles.backupTooltip,
    ariaLabel: language === 'cs' ? 'Přepnout denní zálohování' : 'Toggle daily backup'
  }), [withBackup, onBackupChange, t.vpsPage.toggles.withBackup, t.vpsPage.toggles.backupTooltip, language]);

  const LiquidGlassToggle = ({ children, delay = 0 }) => (
    <motion.div 
      className="flex justify-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative group w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1A1A1A]/90 backdrop-blur-xl rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F]/5 via-transparent to-[#00CC66]/5 rounded-2xl"></div>
        
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FF7F]/30 via-[#00CC66]/20 to-[#00FF7F]/30 p-[1px]"
          animate={{
            background: [
              'linear-gradient(90deg, rgba(0,255,127,0.3) 0%, rgba(0,204,102,0.2) 50%, rgba(0,255,127,0.3) 100%)',
              'linear-gradient(180deg, rgba(0,255,127,0.3) 0%, rgba(0,204,102,0.2) 50%, rgba(0,255,127,0.3) 100%)',
              'linear-gradient(270deg, rgba(0,255,127,0.3) 0%, rgba(0,204,102,0.2) 50%, rgba(0,255,127,0.3) 100%)',
              'linear-gradient(360deg, rgba(0,255,127,0.3) 0%, rgba(0,204,102,0.2) 50%, rgba(0,255,127,0.3) 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-[#0A0A0A]/50 backdrop-blur-xl rounded-2xl"></div>
        </motion.div>
        
        <div className="relative z-10 p-6">
          {children}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* Prázdný prostor pro první a druhou kartu */}
      <div></div>
      <div></div>
      
      {/* Záloha toggle nad třetí kartu */}
      <LiquidGlassToggle delay={0.4}>
        <ToggleSwitch {...backupToggleProps} />
      </LiquidGlassToggle>
      
      {/* Prázdný prostor pro čtvrtou kartu */}
      <div></div>
    </div>
  );
}
