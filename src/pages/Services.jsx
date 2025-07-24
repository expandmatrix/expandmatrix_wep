import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from '@/components/LanguageProvider';

// Import optimized components
import ServicesHero from '../components/services/ServicesHero';
import ServicesTabs from '../components/services/ServicesTabs';
import CustomServicesTab from '../components/services/CustomServicesTab';
import ProcessSection from '../components/services/ProcessSection';

// Lazy load heavy components for better performance
const PackagesTab = React.lazy(() => import('../components/services/PackagesTab'));
const TrainingTab = React.lazy(() => import('../components/services/TrainingTab'));
const ServicesCTA = React.lazy(() => import('../components/services/ServicesCTA'));

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("custom");
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
        <ServicesHero />

        {/* Custom Tabs with Enhanced Apple-style Liquid Glass Effect */}
        <ServicesTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <Tabs 
          value={activeTab}
          defaultValue="custom" 
          className="space-y-16"
          onValueChange={(value) => setActiveTab(value)}
        >
          {/* Custom AI Systems */}
          <TabsContent value="custom" className="space-y-12">
            <CustomServicesTab />
            <ProcessSection />
          </TabsContent>

          {/* AI Packages - Lazy loaded for performance */}
          <TabsContent value="packages" className="space-y-12">
            <React.Suspense fallback={
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00FF7F]"></div>
              </div>
            }>
              <PackagesTab />
            </React.Suspense>
          </TabsContent>

          {/* AI Training - Lazy loaded for performance */}
          <TabsContent value="training" className="space-y-12">
            <React.Suspense fallback={
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00FF7F]"></div>
              </div>
            }>
              <TrainingTab />
            </React.Suspense>
          </TabsContent>
        </Tabs>

        {/* CTA Section - Lazy loaded */}
        <React.Suspense fallback={null}>
          <ServicesCTA />
        </React.Suspense>
      </div>
    </div>
  );
}
