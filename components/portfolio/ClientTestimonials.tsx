'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ClientTestimonialsProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function ClientTestimonials({ dict, lang }: ClientTestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: lang === 'cs'
        ? 'Expand Matrix transformovala naši zákaznickou podporu. AI chatbot zvládá 90% dotazů a naši zákazníci jsou spokojenější než kdy dříve.'
        : 'Expand Matrix transformed our customer support. The AI chatbot handles 90% of inquiries and our customers are happier than ever.',
      author: 'Jan Novák',
      position: lang === 'cs' ? 'CTO, RetailMax' : 'CTO, RetailMax',
      company: 'RetailMax',
      rating: 5,
      avatar: '/testimonials/jan-novak.jpg'
    },
    {
      quote: lang === 'cs'
        ? 'Díky prediktivní analýze od Expand Matrix jsme zvýšili přesnost našich prognóz na 95% a ušetřili miliony na zbytečných zásobách.'
        : 'Thanks to predictive analytics from Expand Matrix, we increased our forecast accuracy to 95% and saved millions on unnecessary inventory.',
      author: 'Sarah Johnson',
      position: lang === 'cs' ? 'Ředitelka prodeje, TechCorp' : 'Sales Director, TechCorp',
      company: 'TechCorp Solutions',
      rating: 5,
      avatar: '/testimonials/sarah-johnson.jpg'
    },
    {
      quote: lang === 'cs'
        ? 'Automatizace zpracování dokumentů nám ušetřila 80% času. Tým se teď může soustředit na strategické úkoly místo rutinní práce.'
        : 'Document processing automation saved us 80% of time. The team can now focus on strategic tasks instead of routine work.',
      author: 'Michael Weber',
      position: lang === 'cs' ? 'CFO, FinanceFlow' : 'CFO, FinanceFlow',
      company: 'FinanceFlow',
      rating: 5,
      avatar: '/testimonials/michael-weber.jpg'
    },
    {
      quote: lang === 'cs'
        ? 'Profesionalita a expertiza týmu Expand Matrix je na nejvyšší úrovni. Dodali přesně to, co jsme potřebovali, a ještě více.'
        : 'The professionalism and expertise of the Expand Matrix team is top-notch. They delivered exactly what we needed, and more.',
      author: 'Dr. Anna Svoboda',
      position: lang === 'cs' ? 'Ředitelka IT, HealthTech Pro' : 'IT Director, HealthTech Pro',
      company: 'HealthTech Pro',
      rating: 5,
      avatar: '/testimonials/anna-svoboda.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
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
              ? 'Zpětná vazba od spokojených klientů, kteří transformovali své podnikání s naší pomocí'
              : 'Feedback from satisfied clients who transformed their business with our help'
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
            className="glass-card p-8 md:p-12 text-center"
          >
            <Quote className="w-12 h-12 text-accent-primary mx-auto mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
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
          </motion.div>

          {/* Testimonial Navigation */}
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
    </section>
  );
}
