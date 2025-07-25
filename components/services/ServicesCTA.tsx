'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { type Locale } from '@/lib/getDictionary';

interface ServicesCTAProps {
  dict: any;
  lang: Locale;
}

export default function ServicesCTA({ dict, lang }: ServicesCTAProps) {
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
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div 
          className="absolute inset-0 opacity-30"
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
            className="absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm"
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
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
            transition={{ duration: 0.4 }}
          >
            {/* Animated Background Layers */}
            <div className="absolute inset-0">
              {/* Primary Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl"
                animate={{
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Animated Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

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
                <Sparkles className="w-16 h-16 text-accent-primary mx-auto" />
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
                  ? 'Připraveni začít vaši AI transformaci?' 
                  : 'Ready to start your AI transformation?'
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
                  ? 'Kontaktujte nás ještě dnes a zjistěte, jak můžeme automatizovat vaše procesy a zvýšit efektivitu vašeho podnikání pomocí pokročilých AI technologií.'
                  : 'Contact us today to discover how we can automate your processes and increase your business efficiency using advanced AI technologies.'
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
                  href={`/${lang}/kontakt`}
                  className="btn-cta-large group inline-flex items-center"
                >
                  <span>{lang === 'cs' ? 'Kontaktujte nás' : 'Contact Us'}</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  href={`/${lang}/${lang === 'cs' ? 'sluzby/ai-skoleni' : 'services/ai-training'}`}
                  className="btn-cta-secondary inline-flex items-center"
                >
                  {lang === 'cs' ? 'AI Školení' : 'AI Training'}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
