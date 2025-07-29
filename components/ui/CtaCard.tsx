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
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Locale } from '@/lib/getDictionary';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface CtaButton {
  label: string;
  href: string;
}

interface CtaCardProps {
  heading: React.ReactNode;
  description: React.ReactNode;
  primaryButton: CtaButton;
  secondaryButton?: CtaButton;
  icon?: React.ReactNode;
  lang: Locale;
  className?: string;
}

const glowMask = {
  WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)',
  maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)'
};

export default function CtaCard({
  heading,
  description,
  primaryButton,
  secondaryButton,
  icon,
  lang,
  className = ''
}: CtaCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

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
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const rotateX = isHovered ? (mousePos.y - 200) * 0.01 : 0;
  const rotateY = isHovered ? (mousePos.x - 300) * 0.01 : 0;

  return (
    <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
          style={{ rotateX, rotateY, willChange: 'transform', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 127, 0.4)' }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl"
              style={glowMask}
              animate={{ opacity: isHovered ? 0.8 : 0.4 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl"
              style={glowMask}
              animate={prefersReducedMotion ? undefined : { x: ['-100%', '100%'] }}
              transition={prefersReducedMotion ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <div className="relative z-10 p-12 text-center">
            {icon && <div className="mb-8">{icon}</div>}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mb-6">
              {heading}
            </h2>
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href={primaryButton.href} className="btn-cta-large group inline-flex items-center">
                <span>{primaryButton.label}</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              {secondaryButton && (
                <Link href={secondaryButton.href} className="btn-cta-secondary inline-flex items-center">
                  {secondaryButton.label}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
