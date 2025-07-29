'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

export interface CtaCardProps {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  primary: ButtonProps;
  secondary: ButtonProps;
  children?: ReactNode;
}

export default function CtaCard({
  icon,
  title,
  description,
  primary,
  secondary,
  children,
}: CtaCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const rotateX = isHovered ? (mousePosition.y - 200) * 0.01 : 0;
  const rotateY = isHovered ? (mousePosition.x - 300) * 0.01 : 0;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 127, 0.4)' }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl"
            style={{
              WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
              maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
            }}
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl"
            style={{
              WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
              maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {icon}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href={primary.href} className="btn-cta-large group inline-flex items-center">
              <span>{primary.label}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link href={secondary.href} className="btn-cta-secondary inline-flex items-center">
              {secondary.label}
            </Link>
          </motion.div>

          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
