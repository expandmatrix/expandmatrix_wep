import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/components/LanguageProvider';

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="relative rounded-3xl p-12 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      {/* Enhanced liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F]/15 via-[#1A1A1A]/80 to-[#00FF7F]/5 rounded-3xl -z-10" />
      <div className="absolute inset-0 backdrop-blur-xl border border-[#00FF7F]/30 rounded-3xl -z-10" />
      <div 
        className="absolute -inset-2 bg-gradient-to-r from-[#00FF7F]/20 via-transparent to-[#00FF7F]/20 opacity-40 rounded-3xl blur-2xl -z-20"
        style={{ 
          transform: 'translate3d(calc(var(--mouse-x) * 0.5), calc(var(--mouse-y) * 0.5), 0)' 
        }}
      />
      
      <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white via-[#00FF7F] to-white bg-clip-text text-transparent">
        {t.servicesPage.custom.process.title}
      </h3>
      
      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Animated connecting line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0">
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-[#00FF7F]/60 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          />
          {/* Animated pulse effect */}
          <motion.div 
            className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent blur-sm"
            animate={{ 
              x: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: 2,
              ease: "easeInOut" 
            }}
          />
        </div>

        {t.servicesPage.custom.process.steps.map((phase, index) => (
          <motion.div 
            key={index} 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.2 + 0.5, 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Enhanced step circle with multiple layers */}
            <motion.div 
              className="relative w-20 h-20 mx-auto mb-6 group cursor-pointer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Outer glow ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-[#00FF7F]/20 blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              />
              
              {/* Middle ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#00FF7F]/30 to-[#00FF7F]/10 backdrop-blur-sm" />
              
              {/* Inner circle */}
              <motion.div 
                className="absolute inset-3 bg-[#00FF7F] rounded-full flex items-center justify-center font-bold text-lg text-[#0A0A0A] relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(0, 255, 127, 0.8)",
                  backgroundColor: "#00CC66"
                }}
              >
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.3 + 1,
                    ease: "easeInOut" 
                  }}
                />
                <span className="relative z-10">{`0${index + 1}`}</span>
              </motion.div>
              
              {/* Floating particles */}
              {[...Array(3)].map((_, particleIndex) => (
                <motion.div
                  key={particleIndex}
                  className="absolute w-1 h-1 bg-[#00FF7F] rounded-full"
                  style={{
                    top: `${20 + particleIndex * 20}%`,
                    left: `${20 + particleIndex * 20}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    x: [-5, 5, -5],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2 + particleIndex * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Content with enhanced styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.8 }}
            >
              <h4 className="font-bold mb-3 text-[#00FF7F] text-lg group-hover:text-white transition-colors">
                {phase.title}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-xs mx-auto">
                {phase.desc}
              </p>
            </motion.div>
            
            {/* Progress indicator for mobile */}
            <div className="md:hidden mt-6">
              {index < t.servicesPage.custom.process.steps.length - 1 && (
                <motion.div 
                  className="w-0.5 h-12 bg-gradient-to-b from-[#00FF7F]/60 to-[#00FF7F]/20 mx-auto"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom decorative element */}
      <motion.div 
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="relative">
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent rounded-full"
            animate={{ 
              scaleX: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-[#00FF7F] rounded-full blur-sm"
            animate={{ 
              x: [-60, 60, -60],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}