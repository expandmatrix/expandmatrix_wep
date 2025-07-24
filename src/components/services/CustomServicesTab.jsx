import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

export default function CustomServicesTab() {
  const { t } = useLanguage();
  const customServices = t.servicesPage.custom.items;

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#00FF7F]">{t.servicesPage.custom.title}</h2>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          {t.servicesPage.custom.subtitle}
        </p>
      </div>

      <motion.div 
        className="grid lg:grid-cols-3 gap-10 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {customServices.map((service, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
          >
            <Card 
              className="bg-[#1A1A1A] border-0 rounded-3xl p-8 text-center group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] cursor-pointer"
              style={{
                transform: 'perspective(1000px) rotateX(0deg)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="text-[#00FF7F] mb-8 transition-all duration-300 group-hover:scale-110 group-hover:[&>svg]:drop-shadow-[0_0_25px_rgba(0,255,127,0.8)] flex justify-center">
                  <Zap className="w-12 h-12" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 group-hover:text-[#00FF7F] transition-colors duration-300 text-white">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-4 text-left mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-[#00FF7F] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Timeline a Investment info */}
                <div className="pt-4 border-t border-[#00FF7F]/20 space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Timeline:</span>
                    <span className="text-[#00FF7F] font-medium">{service.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Investice:</span>
                    <span className="text-[#00FF7F] font-medium">{service.investment}</span>
                  </div>
                </div>

                {/* Button */}
                <Button className="w-full bg-gradient-to-r from-[#00FF7F] to-[#00CC66] text-[#0A0A0A] hover:from-[#00CC66] hover:to-[#00AA55] group font-semibold relative overflow-hidden rounded-full transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    {t.servicesPage.custom.contactExpert}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
