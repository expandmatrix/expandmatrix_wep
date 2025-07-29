'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { useState, useRef } from 'react';

interface AboutCTAProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutCTA({ dict, lang }: AboutCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)',
          maskImage: 'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)'
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)',
            maskImage:
              'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)'
          }}
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Energy Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm pointer-events-none"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main CTA Container with 3D Effect */}
          <motion.div
            className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
            style={{
              rotateX,
              rotateY,
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(0, 255, 127, 0.4)',
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
              {/* Floating Rocket */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-primary/20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-8 h-8" />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
              >
                <Sparkles className="w-5 h-5 text-accent-primary mr-2" />
                <span className="text-accent-primary font-medium">
                  {lang === 'cs' ? 'Připraveni začít?' : 'Ready to Start?'}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight"
              >
                {lang === 'cs' ? (
                  <>
                    Připraveni{' '}
                    <span className="text-accent-primary relative inline-block">
                      revolucionalizovat
                      <motion.div 
                        className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                    <br />
                    váš byznys?
                  </>
                ) : (
                  <>
                    Ready to{' '}
                    <span className="text-accent-primary relative inline-block">
                      revolutionize
                      <motion.div 
                        className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                    <br />
                    your business?
                  </>
                )}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {lang === 'cs'
                  ? 'Získejte bezplatnou konzultaci a zjistěte, jak AI může transformovat vaše procesy. Náš tým expertů vám ukáže cestu k efektivnější budoucnosti.'
                  : 'Get a free consultation and discover how AI can transform your processes. Our team of experts will show you the path to a more efficient future.'
                }
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cta-large group inline-flex items-center"
                >

                  
                  <span className="relative z-10 flex items-center">
                    {lang === 'cs' ? 'Začít hned teď' : 'Get Started Now'}
                    <motion.div
                      className="ml-3"
                      animate={{
                        x: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </span>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cta-secondary inline-flex items-center"
                >
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-accent-primary/10 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10">
                    {lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}
                  </span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                  <span>{lang === 'cs' ? 'Bezplatná konzultace' : 'Free consultation'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>{lang === 'cs' ? 'Bez závazků' : 'No commitment'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>{lang === 'cs' ? '24/7 podpora' : '24/7 support'}</span>
                </div>
              </motion.div>
            </div>

            {/* Corner Accent Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-br-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/20 to-transparent rounded-tl-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
