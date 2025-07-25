'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar, MessageCircle, Download } from 'lucide-react';

interface TrainingCTAProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function TrainingCTA({ dict, lang }: TrainingCTAProps) {
  const ctaOptions = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: lang === 'cs' ? 'Rezervovat konzultaci' : 'Book Consultation',
      description: lang === 'cs' 
        ? 'Bezplatná 30minutová konzultace o vašich potřebách'
        : 'Free 30-minute consultation about your needs',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: lang === 'cs' ? 'Živá ukázka' : 'Live Demo',
      description: lang === 'cs'
        ? 'Podívejte se na naše školící metody v akci'
        : 'See our training methods in action',
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: lang === 'cs' ? 'Stáhnout materiály' : 'Download Materials',
      description: lang === 'cs'
        ? 'Získejte přehled našich kurzů a certifikací'
        : 'Get an overview of our courses and certifications',
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background stejný jako na home */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section - stejný styl jako ServicesCTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Sparkles className="w-16 h-16 text-accent-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
            {lang === 'cs' 
              ? 'Připraveni transformovat váš tým?' 
              : 'Ready to transform your team?'
            }
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10">
            {lang === 'cs'
              ? 'Začněte svou AI cestu ještě dnes. Naši experti vám pomohou vybrat správný program a dosáhnout vašich cílů.'
              : 'Start your AI journey today. Our experts will help you choose the right program and achieve your goals.'
            }
          </p>

          {/* CTA Buttons - stejný styl jako na home */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href={`/${lang}/kontakt`}
              className="btn-cta-large group inline-flex items-center"
            >
              <span>{lang === 'cs' ? 'Začít školení' : 'Start Training'}</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              href={`/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`}
              className="btn-cta-secondary inline-flex items-center"
            >
              {lang === 'cs' ? 'Všechny služby' : 'All Services'}
            </Link>
          </div>
        </motion.div>

        {/* CTA Options Grid - stejný styl jako na services */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-bg-secondary/30 rounded-2xl border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-accent-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {option.title}
              </h3>
              <p className="text-text-secondary">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
