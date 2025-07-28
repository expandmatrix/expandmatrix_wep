'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface VPSFinalCTAProps {
  lang: Locale;
}

export default function VPSFinalCTA({ lang }: VPSFinalCTAProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const rotateX = isHovered ? (mousePosition.y - 200) * 0.01 : 0;
  const rotateY = isHovered ? (mousePosition.x - 300) * 0.01 : 0;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(0,255,127,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(0,255,127,0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Energy Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-primary/30 rounded-full blur-sm"
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${30 + (i * 10) % 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
          style={{ perspective: 1000 }}
        >
          {/* Main CTA Container with 3D Effect */}
          <motion.div
            className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
            style={{
              rotateX,
              rotateY,
            }}
            whileHover={{
              scale: 1.01,
              borderColor: 'rgba(0, 255, 127, 0.4)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/5 rounded-3xl"
              animate={{
                opacity: isHovered ? 0.8 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10 p-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <MessageCircle className="w-16 h-16 text-accent-primary mx-auto" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-text-primary mb-6"
              >
                {lang === 'cs' 
                  ? 'Nevíte si rady? Poradíme vám' 
                  : 'Need help choosing? We\'ll help you'
                }
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                {lang === 'cs'
                  ? 'Naši VPS experti vám pomohou vybrat nejlepší server pro vaše potřeby. Váš VPS bude připraven během 15 minut.'
                  : 'Our VPS experts will help you choose the best server for your needs. Your VPS will be ready within 15 minutes.'
                }
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`}
                  className="group inline-flex items-center px-10 py-5 bg-accent-primary text-bg-primary font-bold text-lg rounded-full transition-all duration-500 hover:bg-accent-primary/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,127,0.4)]"
                >
                  <span>{lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
                  className="inline-flex items-center px-10 py-5 bg-transparent text-accent-primary font-bold text-lg rounded-full border-2 border-accent-primary hover:bg-accent-primary hover:text-bg-primary transition-all duration-500 hover:scale-105"
                >
                  {lang === 'cs' ? 'Všechny služby' : 'All Services'}
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                  <span>{lang === 'cs' ? 'Připraven za 15 minut' : 'Ready in 15 minutes'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>{lang === 'cs' ? 'České servery' : 'Czech servers'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>{lang === 'cs' ? '24/7 podpora' : '24/7 support'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
