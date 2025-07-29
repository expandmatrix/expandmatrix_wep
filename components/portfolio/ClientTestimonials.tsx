'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface ClientTestimonialsProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function ClientTestimonials({ dict, lang }: ClientTestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: lang === 'cs'
        ? 'Expand Matrix transformovala náš zákaznický servis. AI chatbot vyřeší většinu dotazů okamžitě a naši zákazníci jsou nadšení z rychlé odezvy.'
        : 'Expand Matrix transformed our customer service. The AI chatbot resolves most inquiries instantly and our customers love the quick response.',
      author: 'Jan Novák',
      position: 'CTO',
      company: 'TechCorp Solutions',
      rating: 5,
      results: lang === 'cs' ? '75% snížení čekacích dob' : '75% reduction in waiting times'
    },
    {
      quote: lang === 'cs'
        ? 'Díky prediktivní analýze od Expand Matrix jsme snížili nadbytečné zásoby o 40% a zvýšili tržby o 25%. Neuvěřitelné výsledky!'
        : 'Thanks to predictive analytics from Expand Matrix, we reduced excess inventory by 40% and increased sales by 25%. Incredible results!',
      author: 'Sarah Johnson',
      position: 'Operations Director',
      company: 'RetailMax',
      rating: 5,
      results: lang === 'cs' ? '40% snížení zásob, 25% nárůst tržeb' : '40% inventory reduction, 25% sales increase'
    },
    {
      quote: lang === 'cs'
        ? 'Automatizace finančních procesů nám ušetřila stovky hodin měsíčně. Přesnost je 99% a compliance je perfektní. Doporučuji všem!'
        : 'Financial process automation saved us hundreds of hours monthly. 99% accuracy and perfect compliance. I recommend to everyone!',
      author: 'Michael Chen',
      position: 'CFO',
      company: 'FinanceFlow',
      rating: 5,
      results: lang === 'cs' ? '85% snížení času zpracování' : '85% processing time reduction'
    },
    {
      quote: lang === 'cs'
        ? 'Profesionální přístup, rychlá implementace a výjimečné výsledky. Expand Matrix je skutečný partner pro digitální transformaci.'
        : 'Professional approach, fast implementation, and exceptional results. Expand Matrix is a true partner for digital transformation.',
      author: 'Anna Svobodová',
      position: 'CEO',
      company: 'HealthTech Pro',
      rating: 5,
      results: lang === 'cs' ? '300% nárůst efektivity' : '300% efficiency increase'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-text-primary to-accent-primary bg-clip-text text-transparent">
            {lang === 'cs' ? 'Co říkají naši klienti' : 'What Our Clients Say'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Přečtěte si zkušenosti našich klientů a jejich hodnocení naší práce'
              : 'Read about our clients\' experiences and their evaluation of our work'
            }
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 text-center relative"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 25px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
            }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-accent-primary hover:bg-accent-primary/10 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-accent-primary hover:bg-accent-primary/10 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <Quote className="w-12 h-12 text-accent-primary mx-auto mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed">
              {testimonials[currentTestimonial].quote}
            </blockquote>

            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent-primary rounded-full"></div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-text-secondary">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-accent-primary text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-lg p-4 inline-block">
              <div className="text-accent-primary font-semibold text-sm">
                {testimonials[currentTestimonial].results}
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-accent-primary scale-125'
                    : 'bg-accent-primary/30 hover:bg-accent-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card:hover {
          box-shadow: 
            0 20px 40px rgba(255, 255, 255, 0.1), 
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 0 30px rgba(0, 255, 127, 0.2) !important;
          border-color: rgba(0, 255, 127, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
