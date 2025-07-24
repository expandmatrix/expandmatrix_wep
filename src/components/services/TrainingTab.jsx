import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, BookOpen, Video, Award, ArrowRight } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

export default function TrainingTab() {
  const { t } = useLanguage();
  const trainings = t.servicesPage.training.items;

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
        <h2 className="text-3xl font-bold mb-4 text-[#00FF7F]">{t.servicesPage.training.title}</h2>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          {t.servicesPage.training.subtitle}
        </p>
      </div>

      <motion.div 
        className="grid lg:grid-cols-3 gap-10 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {trainings.map((training, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
          >
            <Card 
              className="bg-[#1A1A1A] border-0 rounded-3xl p-8 text-center group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] h-full flex flex-col cursor-pointer"
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
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-[#00FF7F] mb-8 transition-all duration-300 group-hover:scale-110 group-hover:[&>svg]:drop-shadow-[0_0_25px_rgba(0,255,127,0.8)] flex justify-center">
                  <Rocket className="w-12 h-12" />
                </div>
                
                <div className="flex items-center justify-center mb-6 text-center">
                  <h3 className="text-2xl font-bold group-hover:text-[#00FF7F] transition-colors duration-300 text-white">
                    {training.title}
                  </h3>
                  <Badge variant="outline" className="border-[#00FF7F] text-[#00FF7F] rounded-2xl ml-4">
                    {training.duration}
                  </Badge>
                </div>
                
                <p className="text-neutral-300 mb-8 leading-relaxed text-lg flex-grow">
                  {training.description}
                </p>
                
                <ul className="space-y-4 text-left mb-8">
                  {training.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-white">
                      <BookOpen className="w-5 h-5 text-[#00FF7F] mr-3 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#00FF7F]/20 space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">{t.servicesPage.training.priceLabel}</span>
                    <span className="text-[#00FF7F] font-bold text-lg">{training.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">{t.servicesPage.training.capacityLabel}</span>
                    <span className="text-neutral-200">{training.participants}</span>
                  </div>
                </div>

                <motion.div className="mt-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="w-full bg-gradient-to-r from-[#00FF7F] to-[#00CC66] text-[#0A0A0A] hover:from-[#00CC66] hover:to-[#00AA55] group font-semibold relative overflow-hidden rounded-full transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center justify-center">
                      {t.servicesPage.training.registerButton}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Preview Section */}
      <motion.div 
        className="relative rounded-3xl p-12 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Liquid glass background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF7F]/10 to-transparent rounded-3xl -z-10" />
        <div className="absolute inset-0 backdrop-blur-3xl -z-10" />
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-[#00FF7F]/20 to-transparent opacity-30 rounded-3xl blur-xl -z-20"
          style={{ 
            transform: 'translate3d(calc(var(--mouse-x) * 0.5), calc(var(--mouse-y) * 0.5), 0)' 
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">{t.servicesPage.training.video.title}</h3>
          <div className="aspect-video bg-[#1A1A1A] rounded-3xl border border-[#00FF7F]/50 flex items-center justify-center mb-8 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] cursor-pointer group transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00FF7F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-[#0A0A0A]" />
              </div>
              <p className="text-neutral-300">{t.servicesPage.training.video.playButton}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.servicesPage.training.video.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <Award className="w-5 h-5 text-[#00FF7F]" />
                <span className="text-sm text-neutral-200">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
