'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface CommunityCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  link: string;
}

const FreeCommunitySection: React.FC = () => {
  const communityCards: CommunityCard[] = [
    {
      id: 'discord',
      title: 'Discord Komunita',
      description: 'Připojte se k naší aktivní Discord komunitě, kde můžete diskutovat o AI, sdílet zkušenosti a získat rychlou pomoc od expertů.',
      icon: <FaDiscord className="w-8 h-8" />,
      gradient: 'from-purple-500 to-indigo-600',
      link: 'https://discord.gg/expandmatrix'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Síť',
      description: 'Sledujte nás na LinkedIn pro nejnovější trendy v AI, případové studie a profesionální networking v oblasti umělé inteligence.',
      icon: <FaLinkedin className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-600',
      link: 'https://linkedin.com/company/expandmatrix'
    },
    {
      id: 'facebook',
      title: 'Facebook Skupina',
      description: 'Připojte se k naší Facebook skupině pro neformální diskuse, sdílení nápadů a komunitní podporu v oblasti AI technologií.',
      icon: <FaFacebook className="w-8 h-8" />,
      gradient: 'from-blue-600 to-blue-800',
      link: 'https://facebook.com/groups/expandmatrix'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Bezplatná <span className="text-accent-primary">Komunita</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Připojte se k naší rostoucí komunitě AI nadšenců, vývojářů a podnikatelů. 
            Sdílejte zkušenosti, učte se od expertů a budujte budoucnost s umělou inteligencí.
          </p>
        </motion.div>

        {/* Community Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-gradient-to-br from-bg-secondary/80 to-bg-secondary/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl p-8 h-full overflow-hidden">
                {/* Holographic overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/10 rounded-3xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} mb-6 text-white`}>
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {card.description}
                </p>

                {/* CTA Button */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${card.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 cursor-pointer relative z-20`}
                  style={{ pointerEvents: 'auto' }}
                >
                  Připojit se
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-bg-primary" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 border-2 border-bg-primary" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-bg-primary" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-2 border-bg-primary flex items-center justify-center text-white text-sm font-bold">
                +
              </div>
            </div>
            <div className="text-left">
              <p className="text-text-primary font-semibold">Připojilo se již 500+ členů</p>
              <p className="text-text-secondary text-sm">Buďte součástí AI revoluce</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeCommunitySection;