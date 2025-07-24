'use client';

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import type { Locale } from '@/lib/getDictionary';

interface TestimonialsProps {
  dict: any;
  lang: Locale;
}

interface Testimonial {
  text: string;
  author: string;
  company: string;
  position: string;
  rating: number;
  avatar: string;
  highlight: string;
}

export default function Testimonials({ dict, lang }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = lang === 'cs' ? [
    {
      text: "Expand Matrix transformovala naše procesy natolik, že jsme ušetřili 70% času na rutinních úkolech. Jejich AI řešení nám umožnilo soustředit se na strategické rozhodování a inovace.",
      author: "Jan Novák",
      company: "TechCorp s.r.o.",
      position: "CEO & Founder",
      rating: 5,
      avatar: "JN",
      highlight: "70% času ušetřeno"
    },
    {
      text: "Implementace jejich AI systémů překonala všechna naše očekávání. Proces byl hladký, tým profesionální a výsledky se dostavily okamžitě. Doporučuji každému, kdo chce být v digitální transformaci napřed.",
      author: "Marie Svobodová",
      company: "InnovateLab",
      position: "CTO",
      rating: 5,
      avatar: "MS",
      highlight: "Okamžité výsledky"
    },
    {
      text: "Profesionální přístup a cutting-edge technologie v jednom balíčku. Expand Matrix nám pomohla automatizovat komplexní procesy, které jsme si dříve ani neuměli představit.",
      author: "Petr Dvořák",
      company: "FutureWorks",
      position: "Head of Operations",
      rating: 5,
      avatar: "PD",
      highlight: "Komplexní automatizace"
    },
    {
      text: "Jejich AI řešení změnilo způsob, jakým pracujeme s daty. Analýzy, které dříve trvaly týdny, nyní máme za hodiny. ROI se vrátilo během prvních tří měsíců.",
      author: "Anna Kratochvílová",
      company: "DataDriven s.r.o.",
      position: "Data Science Lead",
      rating: 5,
      avatar: "AK",
      highlight: "ROI za 3 měsíce"
    }
  ] : [
    {
      text: "Expand Matrix transformed our processes so dramatically that we saved 70% of time on routine tasks. Their AI solutions allowed us to focus on strategic decisions and innovation.",
      author: "John Smith",
      company: "TechCorp Inc.",
      position: "CEO & Founder",
      rating: 5,
      avatar: "JS",
      highlight: "70% time saved"
    },
    {
      text: "Implementation of their AI systems exceeded all our expectations. The process was smooth, team professional, and results came immediately. I recommend to everyone who wants to be ahead in digital transformation.",
      author: "Sarah Johnson",
      company: "InnovateLab",
      position: "CTO",
      rating: 5,
      avatar: "SJ",
      highlight: "Immediate results"
    },
    {
      text: "Professional approach and cutting-edge technology in one package. Expand Matrix helped us automate complex processes we couldn't even imagine before.",
      author: "Michael Brown",
      company: "FutureWorks",
      position: "Head of Operations",
      rating: 5,
      avatar: "MB",
      highlight: "Complex automation"
    },
    {
      text: "Their AI solution changed the way we work with data. Analytics that used to take weeks, we now have in hours. ROI returned within the first three months.",
      author: "Emily Davis",
      company: "DataDriven Corp.",
      position: "Data Science Lead",
      rating: 5,
      avatar: "ED",
      highlight: "ROI in 3 months"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-text-primary">
            {lang === 'cs' ? 'Co říkají naši ' : 'What our '}
            <span className="text-accent-primary relative inline-block">
              {lang === 'cs' ? 'klienti' : 'clients say'}
              <motion.div 
                className="absolute -inset-2 bg-accent-primary/10 blur-2xl rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {lang === 'cs' 
              ? 'Skutečné příběhy transformace od našich spokojených klientů'
              : 'Real transformation stories from our satisfied clients'
            }
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative"
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-bg-secondary/80 backdrop-blur-sm border border-accent-primary/20 rounded-full flex items-center justify-center text-text-primary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300 pointer-events-auto group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-bg-secondary/80 backdrop-blur-sm border border-accent-primary/20 rounded-full flex items-center justify-center text-text-primary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300 pointer-events-auto group"
            >
              <ChevronRight className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? 'bg-accent-primary shadow-[0_0_20px_rgba(0,255,127,0.6)]' 
                  : 'bg-border-color hover:bg-accent-primary/50'
              }`} />
              
              {/* Progress Ring for Active Indicator */}
              {index === activeIndex && isAutoPlaying && (
                <motion.div
                  className="absolute inset-0 w-3 h-3 rounded-full border-2 border-accent-primary/30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Floating Mini Testimonials */}
        <div className="absolute inset-0 pointer-events-none">
          {testimonials.map((testimonial, index) => (
            index !== activeIndex && (
              <motion.div
                key={`mini-${index}`}
                className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
                style={{
                  left: `${10 + (index * 20) % 80}%`,
                  top: `${20 + (index * 15) % 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  delay: index * 2,
                }}
              >
                <div className="bg-bg-secondary/40 backdrop-blur-sm border border-accent-primary/10 rounded-lg p-3 max-w-xs">
                  <p className="text-xs text-text-secondary truncate">
                    "{testimonial.text.substring(0, 50)}..."
                  </p>
                  <p className="text-xs text-accent-primary mt-1">
                    {testimonial.author}
                  </p>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative">
      {/* Main Card */}
      <div className="bg-gradient-to-br from-bg-secondary/60 to-bg-secondary/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/5 rounded-3xl" />
        
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-6 left-6 text-accent-primary/30"
        >
          <Quote className="w-12 h-12" />
        </motion.div>

        {/* Rating Stars */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <Star className="w-6 h-6 text-accent-primary fill-current mx-1 drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Text */}
        <motion.blockquote 
          className="text-xl sm:text-2xl text-text-primary mb-8 leading-relaxed text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="font-light italic">"{testimonial.text}"</span>
        </motion.blockquote>

        {/* Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-full px-6 py-2">
            <span className="text-accent-primary font-semibold text-sm">
              {testimonial.highlight}
            </span>
          </div>
        </motion.div>

        {/* Author Info */}
        <motion.div 
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-full flex items-center justify-center border-2 border-accent-primary/30">
              <span className="text-accent-primary font-bold text-lg">
                {testimonial.avatar}
              </span>
            </div>
            <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-lg opacity-50" />
          </div>

          {/* Author Details */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-text-primary mb-1">
              {testimonial.author}
            </h4>
            <p className="text-accent-primary font-medium text-sm">
              {testimonial.position}
            </p>
            <p className="text-text-secondary text-sm">
              {testimonial.company}
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-accent-primary/40 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* External Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-primary/5 rounded-3xl blur-2xl opacity-60" />
    </div>
  );
}
