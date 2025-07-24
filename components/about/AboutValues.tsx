'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, CheckCircle } from 'lucide-react';

interface AboutValuesProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutValues({ dict, lang }: AboutValuesProps) {
  const values = [
    {
      icon: Brain,
      title: lang === 'cs' ? 'AI Inovace' : 'AI Innovation',
      description: lang === 'cs'
        ? 'Neustále sledujeme nejnovější trendy v umělé inteligenci a implementujeme cutting-edge technologie pro naše klienty.'
        : 'We constantly monitor the latest trends in artificial intelligence and implement cutting-edge technologies for our clients.',
      color: 'from-accent-primary to-blue-400',
      features: [
        lang === 'cs' ? 'Nejnovější AI modely' : 'Latest AI models',
        lang === 'cs' ? 'Vlastní ML algoritmy' : 'Custom ML algorithms',
        lang === 'cs' ? 'Kontinuální výzkum' : 'Continuous research'
      ]
    },
    {
      icon: Heart,
      title: lang === 'cs' ? 'Zákaznický přístup' : 'Customer Focus',
      description: lang === 'cs'
        ? 'Každý projekt přizpůsobujeme specifickým potřebám klienta a poskytujeme dlouhodobou podporu.'
        : 'We customize each project to specific client needs and provide long-term support.',
      color: 'from-pink-400 to-red-400',
      features: [
        lang === 'cs' ? 'Individuální řešení' : 'Individual solutions',
        lang === 'cs' ? '24/7 podpora' : '24/7 support',
        lang === 'cs' ? 'Dlouhodobé partnerství' : 'Long-term partnership'
      ]
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Naše hodnoty' : 'Our Values'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Principy, které nás vedou při vytváření inovativních AI řešení pro naše klienty.'
              : 'The principles that guide us in creating innovative AI solutions for our clients.'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {value.description}
                  </p>
                  
                  <div className="space-y-3">
                    {value.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent-primary mr-3 flex-shrink-0" />
                        <span className="text-text-primary font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}