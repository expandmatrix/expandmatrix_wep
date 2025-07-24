import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from '@/components/LanguageProvider';
import VPSPackages from '@/components/vps/VPSPackages';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Server, 
  ArrowRight, 
  MessageCircle
} from "lucide-react";

export default function VPS() {
  const { language } = useLanguage();
  const [withBackup, setWithBackup] = useState(true);
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
    <div ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
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
            <div className="flex items-center justify-center mb-6">
              <div className="text-[#00FF7F] mr-4">
                <Server className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                VPS{" "}
                <motion.span 
                  className="text-[#00FF7F] neon-text inline-block"
                  animate={{ 
                    textShadow: ["0 0 8px rgba(0, 255, 127, 0.4)", "0 0 16px rgba(0, 255, 127, 0.6)", "0 0 8px rgba(0, 255, 127, 0.4)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Hosting
                </motion.span>
              </h1>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {language === 'cs' 
              ? 'Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty. Rychlé SSD úložiště, plná kontrola a špičková bezpečnost. Všechny servery jsou připraveny během 15 minut.'
              : 'High-performance VPS servers for your AI applications and web projects. Fast SSD storage, full control and top-tier security. All servers are ready within 15 minutes.'
            }
          </motion.p>
        </div>

        {/* VPS Packages with integrated toggle */}
        <VPSPackages 
          withBackup={withBackup}
          onBackupChange={setWithBackup}
        />

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-[#00FF7F]/10 to-[#00CC66]/10 rounded-3xl p-12 border border-[#00FF7F]/30 hover:border-[#00FF7F]/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'cs' 
                ? 'Potřebujete pomoc s výběrem?' 
                : 'Need help choosing?'
              }
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              {language === 'cs' 
                ? 'Naši experti vám pomohou vybrat ideální VPS konfiguraci pro vaše potřeby. Kontaktujte nás zdarma.'
                : 'Our experts will help you choose the ideal VPS configuration for your needs. Contact us for free.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] group font-semibold rounded-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {language === 'cs' ? 'Bezplatná konzultace' : 'Free Consultation'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] border-2 font-semibold rounded-full">
                  {language === 'cs' ? 'Cenový kalkulátor' : 'Price Calculator'}
                </Button>
              </motion.div>
            </div>
            
            {/* Additional info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-[#00FF7F] font-bold text-2xl mb-2">15 min</div>
                <div className="text-neutral-400 text-sm">
                  {language === 'cs' ? 'Doba aktivace' : 'Activation time'}
                </div>
              </div>
              <div>
                <div className="text-[#00FF7F] font-bold text-2xl mb-2">24/7</div>
                <div className="text-neutral-400 text-sm">
                  {language === 'cs' ? 'Technická podpora' : 'Technical support'}
                </div>
              </div>
              <div>
                <div className="text-[#00FF7F] font-bold text-2xl mb-2">99.9%</div>
                <div className="text-neutral-400 text-sm">
                  {language === 'cs' ? 'Dostupnost' : 'Uptime guarantee'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
