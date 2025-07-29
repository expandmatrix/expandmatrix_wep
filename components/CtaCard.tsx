'use client';

import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';

export interface CtaButton {
  key: string;
  element: React.ReactNode;
}

export interface FloatingIcons {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}

interface CtaCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttons: CtaButton[];
  icons?: FloatingIcons;
  trustIndicators?: React.ReactNode;
  className?: string;
}

export default function CtaCard({ title, description, buttons, icons, trustIndicators, className }: CtaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section className={"py-32 bg-bg-primary relative overflow-hidden " + (className ?? '')}>
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage: 'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)',
          maskImage: 'radial-gradient(75% 75% at 50% 50%, black 60%, transparent)',
        }}
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(0,255,127,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,127,0.05) 0%, transparent 50%)',
                  ],
                }
          }
          className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden"
          style={{
            WebkitMaskImage: 'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)',
            maskImage: 'radial-gradient(90% 90% at 50% 50%, black 60%, transparent)',
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-accent-primary/20 rounded-full blur-sm pointer-events-none"
            style={{ left: `${15 + (i * 12) % 70}%`, top: `${20 + (i * 8) % 60}%` }}
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -40, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }
            }
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0.4, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: '-100px' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="relative bg-gradient-to-br from-bg-secondary/80 via-bg-secondary/60 to-bg-secondary/40 backdrop-blur-2xl border border-accent-primary/20 rounded-3xl overflow-hidden"
          style={{ rotateX, rotateY, willChange: 'transform', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.01, borderColor: 'rgba(0, 255, 127, 0.4)' }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl pointer-events-none overflow-hidden"
              style={{ WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)', maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)' }}
              animate={{ opacity: isHovered ? 0.8 : 0.4 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rounded-3xl pointer-events-none overflow-hidden"
              style={{ WebkitMaskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)', maskImage: 'radial-gradient(100% 100% at 50% 50%, black 70%, transparent)' }}
              animate={prefersReducedMotion ? undefined : { x: ['-100%', '100%'] }}
              transition={prefersReducedMotion ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            {icons && (
              <div className="absolute inset-0 pointer-events-none">
                {icons.left && (
                  <motion.div
                    className="absolute top-8 left-8 text-accent-primary/30"
                    animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.2, 1] }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                          }
                    }
                  >
                    {icons.left}
                  </motion.div>
                )}
                {icons.right && (
                  <motion.div
                    className="absolute top-8 right-8 text-accent-primary/30"
                    animate={prefersReducedMotion ? undefined : { rotate: -360, y: [0, -10, 0] }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                          }
                    }
                  >
                    {icons.right}
                  </motion.div>
                )}
                {icons.bottom && (
                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-primary/20"
                    animate={prefersReducedMotion ? undefined : { y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {icons.bottom}
                  </motion.div>
                )}
              </div>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0.3, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {buttons.map((btn) => (
                <span key={btn.key}>{btn.element}</span>
              ))}
            </motion.div>

            {trustIndicators && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
              >
                {trustIndicators}
              </motion.div>
            )}
          </div>

          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-br-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/20 to-transparent rounded-tl-3xl" />
        </motion.div>

        <motion.div
          className="absolute -inset-4 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-2xl"
          animate={{ opacity: isHovered ? 0.8 : 0.4, scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
    </section>
  );
}

