'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';

interface FAQAccordionProps {
  dict: any;
}

export default function FAQAccordion({ dict }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fluid-heading text-text-primary mb-6 font-bold flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20">
              <FaQuestionCircle className="text-accent-primary" />
            </div>
            {dict.community.faq.title}
          </h2>
          <p className="text-xl text-text-secondary">
            {dict.community.faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {dict.community.faq.items.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass-card glow-on-hover border border-accent-primary/20 overflow-hidden shadow-xl shadow-accent-primary/5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-all duration-300">
                    <FaLightbulb className="text-accent-primary text-sm" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary pr-4 group-hover:text-accent-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 ml-12 text-text-secondary leading-relaxed border-l-2 border-accent-primary/30 pl-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
