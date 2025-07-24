import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Target, CheckCircle } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

export default function PackagesTab() {
  const { t } = useLanguage();
  const packages = t.servicesPage.packages.items;

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
        <h2 className="text-3xl font-bold mb-4 text-[#00FF7F]">{t.servicesPage.packages.title}</h2>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          {t.servicesPage.packages.subtitle}
        </p>
      </div>

      <motion.div 
        className="grid lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(packages).map(([key, pkg], index) => (
          <motion.div 
            key={key}
            variants={itemVariants}
            className="flex"
          >
            <Card 
              className={`bg-[#1A1A1A] border-0 rounded-3xl p-8 text-center group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] flex-1 relative cursor-pointer ${
                pkg.popular ? 'ring-2 ring-[#00FF7F]' : ''
              }`}
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
              {pkg.popular && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <Badge className="bg-[#00FF7F] text-[#0A0A0A] font-semibold px-3 py-1 shadow-lg rounded-full">
                    {t.servicesPage.packages.mostPopular}
                  </Badge>
                </motion.div>
              )}

              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-[#00FF7F] mb-8 transition-all duration-300 group-hover:scale-110 group-hover:[&>svg]:drop-shadow-[0_0_25px_rgba(0,255,127,0.8)] flex justify-center">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00FF7F] transition-colors duration-300 text-white">
                  {pkg.name}
                </h3>
                
                <motion.div 
                  className="py-4 mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-4xl font-bold text-[#00FF7F]">{pkg.price}</span>
                  <span className="text-neutral-400 ml-2">/ {pkg.period}</span>
                </motion.div>
                
                <p className="text-neutral-300 mb-8 leading-relaxed text-lg flex-grow">
                  {pkg.description}
                </p>
                
                <ul className="space-y-4 text-left mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-[#00FF7F] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.div className="mt-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    className={`w-full font-semibold relative overflow-hidden rounded-full transition-all duration-300 hover:scale-105 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-[#00FF7F] to-[#00CC66] text-[#0A0A0A] hover:from-[#00CC66] hover:to-[#00AA55]' 
                        : 'bg-transparent border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] border-2'
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <span className="relative z-10">{t.servicesPage.packages.orderButton}</span>
                    <span className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Comparison Table with Glass Effect */}
      <motion.div 
        className="relative rounded-3xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Liquid glass background */}
        <div className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md border border-[#00FF7F]/30 rounded-3xl -z-10" />
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-[#00FF7F]/20 to-transparent opacity-30 rounded-3xl blur-xl -z-20"
          style={{ 
            transform: 'translate3d(calc(var(--mouse-x) * 0.3), calc(var(--mouse-y) * 0.3), 0)' 
          }}
        />
        
        <h3 className="text-xl font-bold mb-6 text-center">{t.servicesPage.packages.comparison.title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#00FF7F]/30">
                <th className="text-left py-3 text-neutral-300">{t.servicesPage.packages.comparison.feature}</th>
                <th className="text-center py-3 text-[#00FF7F]">{t.servicesPage.packages.comparison.general}</th>
                <th className="text-center py-3 text-[#00FF7F]">{t.servicesPage.packages.comparison.ecommerce}</th>
                <th className="text-center py-3 text-[#00FF7F]">{t.servicesPage.packages.comparison.realestate}</th>
              </tr>
            </thead>
            <tbody className="text-neutral-200">
              <motion.tr 
                className="border-b border-[#00FF7F]/10 hover:bg-[#00FF7F]/5 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <td className="py-3">{t.servicesPage.packages.comparison.features.chatbot}</td>
                <td className="text-center"><CheckCircle className="w-4 h-4 text-[#00FF7F] mx-auto" /></td>
                <td className="text-center"><CheckCircle className="w-4 h-4 text-[#00FF7F] mx-auto" /></td>
                <td className="text-center"><CheckCircle className="w-4 h-4 text-[#00FF7F] mx-auto" /></td>
              </motion.tr>
              <motion.tr 
                className="border-b border-[#00FF7F]/10 hover:bg-[#00FF7F]/5 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <td className="py-3">{t.servicesPage.packages.comparison.features.dashboard}</td>
                <td className="text-center text-neutral-400">{t.servicesPage.packages.comparison.basic}</td>
                <td className="text-center"><CheckCircle className="w-4 h-4 text-[#00FF7F] mx-auto" /></td>
                <td className="text-center"><CheckCircle className="w-4 h-4 text-[#00FF7F] mx-auto" /></td>
              </motion.tr>
              <motion.tr 
                className="hover:bg-[#00FF7F]/5 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <td className="py-3">{t.servicesPage.packages.comparison.features.personalization}</td>
                <td className="text-center text-neutral-500">-</td>
                <td className="text-center"><CheckCircle className="w-4 h-4 text-[#00FF7F] mx-auto" /></td>
                <td className="text-center text-neutral-500">-</td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
