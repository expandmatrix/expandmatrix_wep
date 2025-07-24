import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Target, Rocket } from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

export default function ServicesTabs({ activeTab, setActiveTab }) {
  const { t } = useLanguage();

  return (
    <div className="relative mb-16">
      {/* Liquid glass background */}
      <div className="absolute inset-0 -z-10 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-[#111111]/70 backdrop-blur-xl border border-[#00FF7F]/20 rounded-full" />
        <div 
          className="absolute -inset-1/2 w-full h-full bg-gradient-to-br from-[#00FF7F]/20 via-[#00FF7F]/5 to-transparent rounded-full blur-3xl opacity-30"
          style={{ 
            transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)'
          }}
        />
      </div>

      <Tabs 
        defaultValue="custom" 
        className="space-y-16"
        onValueChange={(value) => setActiveTab(value)}
      >
        <div className="relative p-2 rounded-full overflow-hidden">
          {/* Active tab indicator */}
          <div 
            className="absolute h-12 rounded-full bg-[#00FF7F] shadow-[0_0_20px_rgba(0,255,127,0.5)] transition-all duration-100 ease-out"
            style={{ 
              left: "0.5rem",
              width: "calc(33.33% - 0.75rem)",
              transform: activeTab === "custom" ? "translateX(0)" : 
                        activeTab === "packages" ? "translateX(calc(100% + 0.5rem))" : 
                        "translateX(calc(200% + 1rem))"
            }}
          />

          <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 relative z-10">
            <TabsTrigger 
              value="custom" 
              className="py-3 px-4 rounded-full data-[state=active]:text-[#0A0A0A] data-[state=active]:font-medium text-white transition-all duration-100 relative overflow-hidden group"
            >
              {/* Liquid glass with hover effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-100" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 rounded-full" />
              
              {/* Quick hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#00FF7F]/20 via-[#00FF7F]/10 to-transparent rounded-full transition-opacity duration-100" />
              
              <span className="relative z-10 flex items-center justify-center">
                <Zap className={`w-5 h-5 mr-2 transition-all duration-100 ${
                  activeTab === "custom" 
                    ? "text-[#0A0A0A]" 
                    : "text-[#00FF7F] group-hover:scale-110"
                }`} />
                <span className="text-sm md:text-base">{t.servicesPage.tabs.custom}</span>
              </span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="packages"
              className="py-3 px-4 rounded-full data-[state=active]:text-[#0A0A0A] data-[state=active]:font-medium text-white transition-all duration-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-100" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 rounded-full" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#00FF7F]/20 via-[#00FF7F]/10 to-transparent rounded-full transition-opacity duration-100" />
              
              <span className="relative z-10 flex items-center justify-center">
                <Target className={`w-5 h-5 mr-2 transition-all duration-100 ${
                  activeTab === "packages" 
                    ? "text-[#0A0A0A]" 
                    : "text-[#00FF7F] group-hover:scale-110"
                }`} />
                <span className="text-sm md:text-base">{t.servicesPage.tabs.packages}</span>
              </span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="training"
              className="py-3 px-4 rounded-full data-[state=active]:text-[#0A0A0A] data-[state=active]:font-medium text-white transition-all duration-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-100" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 rounded-full" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#00FF7F]/20 via-[#00FF7F]/10 to-transparent rounded-full transition-opacity duration-100" />
              
              <span className="relative z-10 flex items-center justify-center">
                <Rocket className={`w-5 h-5 mr-2 transition-all duration-100 ${
                  activeTab === "training" 
                    ? "text-[#0A0A0A]" 
                    : "text-[#00FF7F] group-hover:scale-110"
                }`} />
                <span className="text-sm md:text-base">{t.servicesPage.tabs.training}</span>
              </span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}