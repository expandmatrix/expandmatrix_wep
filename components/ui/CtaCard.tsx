'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CtaCardProps {
  children: ReactNode;
  rotateX?: number;
  rotateY?: number;
  isHovered?: boolean;
  shimmer?: boolean;
  glowClassName?: string;
  hoverBorderColor?: string;
  className?: string;
}

export default function CtaCard({
  children,
  rotateX = 0,
  rotateY = 0,
  isHovered = false,
  shimmer = true,
  glowClassName = 'from-accent-primary/10 via-transparent to-accent-primary/5',
  hoverBorderColor = 'rgba(0, 255, 127, 0.4)',
  className = '',
}: CtaCardProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden ${className}`}
      style={{
        rotateX,
        rotateY,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.01,
        borderColor: hoverBorderColor,
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${glowClassName} rounded-3xl pointer-events-none overflow-hidden`}
          style={{
            WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
            maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
          }}
          animate={{ opacity: isHovered ? 0.8 : 0.4 }}
          transition={{ duration: 0.5 }}
        />
        {shimmer && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl pointer-events-none overflow-hidden"
            style={{
              WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
              maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
            }}
            animate={prefersReducedMotion ? undefined : { x: ['-100%', '100%'] }}
            transition={prefersReducedMotion ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>
      {children}
    </motion.div>
  );
}
