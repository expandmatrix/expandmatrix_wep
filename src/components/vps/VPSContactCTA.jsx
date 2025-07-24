import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

export default function VPSContactCTA() {
  const { language } = useLanguage();

  return (
    <motion.div 
      className="text-center mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div className="bg-gradient-to-r from-[#00FF7F]/10 to-[#00CC66]/10 rounded-3xl p-12 border border-[#00FF7F]/30 hover:border-[#00FF7F]/50 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6">
          {t.vpsPage.cta.title}
        </h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          {t.vpsPage.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] group font-semibold rounded-full">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.vpsPage.cta.consultationButton}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] border-2 font-semibold rounded-full">
              {t.vpsPage.cta.calculatorButton}
            </Button>
          </motion.div>
        </div>
        
        {/* Additional info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-[#00FF7F] font-bold text-2xl mb-2">15 min</div>
            <div className="text-neutral-400 text-sm">
              {t.vpsPage.cta.stats.activationTime}
            </div>
          </div>
          <div>
            <div className="text-[#00FF7F] font-bold text-2xl mb-2">24/7</div>
            <div className="text-neutral-400 text-sm">
              {t.vpsPage.cta.stats.support}
            </div>
          </div>
          <div>
            <div className="text-[#00FF7F] font-bold text-2xl mb-2">99.9%</div>
            <div className="text-neutral-400 text-sm">
              {t.vpsPage.cta.stats.uptime}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
