import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/components/LanguageProvider';

export default function ServicesHero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  // OPTIMIZATION: Use CSS variables for mouse tracking to avoid re-renders
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const x = (e.clientX - window.innerWidth / 2) / 25;
        const y = (e.clientY - window.innerHeight / 2) / 25;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="text-center mb-20 relative">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00FF7F]/10 blur-3xl opacity-30"
          style={{ transform: 'translate3d(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1), 0)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00FF7F]/5 blur-3xl opacity-20"
          style={{ transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t.servicesPage.title}{" "}
          <motion.span 
            className="text-[#00FF7F] neon-text inline-block"
            animate={{ 
              textShadow: ["0 0 8px rgba(0, 255, 127, 0.4)", "0 0 16px rgba(0, 255, 127, 0.6)", "0 0 8px rgba(0, 255, 127, 0.4)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t.servicesPage.titleHighlight}
          </motion.span>
        </h1>
      </motion.div>
      
      <motion.p 
        className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {t.servicesPage.subtitle}
      </motion.p>
      
      {/* Animated Decorative Element */}
      <div className="relative h-24 mb-8">
        <motion.div 
          className="absolute left-1/2 top-1/2 w-64 h-64 border border-[#00FF7F]/30 rounded-3xl"
          style={{ 
            transformOrigin: "center center",
            transform: "translate(-50%, -50%) rotate(45deg)"
          }}
          animate={{ 
            rotate: [45, 135, 225, 315, 405],
            borderColor: [
              "rgba(0, 255, 127, 0.2)",
              "rgba(0, 255, 127, 0.5)",
              "rgba(0, 255, 127, 0.2)"
            ]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute left-1/2 top-1/2 w-48 h-48 border border-[#00FF7F]/20 rounded-3xl"
          style={{ 
            transformOrigin: "center center",
            transform: "translate(-50%, -50%) rotate(45deg)"
          }}
          animate={{ 
            rotate: [45, -45, -135, -225, -315, -405],
            borderColor: [
              "rgba(0, 255, 127, 0.1)",
              "rgba(0, 255, 127, 0.3)",
              "rgba(0, 255, 127, 0.1)"
            ]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
    </div>
  );
}