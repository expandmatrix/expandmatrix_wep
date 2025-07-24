'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface AboutTeamProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutTeam({ dict, lang }: AboutTeamProps) {
  const team = [
    {
      name: 'Martin Novák',
      role: lang === 'cs' ? 'CEO & AI Stratég' : 'CEO & AI Strategist',
      bio: lang === 'cs' 
        ? 'Více než 10 let zkušeností v oblasti AI a strojového učení. Vedl týmy v Google a Microsoft.'
        : 'Over 10 years of experience in AI and machine learning. Led teams at Google and Microsoft.',
      image: '/team/martin.jpg',
      linkedin: '#',
      email: 'martin@expandmatrix.com'
    },
    {
      name: 'Jana Svobodová',
      role: lang === 'cs' ? 'CTO & Lead Developer' : 'CTO & Lead Developer',
      bio: lang === 'cs'
        ? 'Expertka na deep learning a neural networks. Absolventka MIT s fokusem na AI research.'
        : 'Expert in deep learning and neural networks. MIT graduate with focus on AI research.',
      image: '/team/jana.jpg',
      linkedin: '#',
      email: 'jana@expandmatrix.com'
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
            {lang === 'cs' ? 'Náš tým expertů' : 'Our Expert Team'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Spojili jsme síly nejlepších AI specialistů, vývojářů a strategů pro vytvoření výjimečných řešení.'
              : 'We have brought together the best AI specialists, developers, and strategists to create exceptional solutions.'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-dark rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-accent-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a href={member.linkedin} className="text-text-secondary hover:text-accent-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-text-secondary hover:text-accent-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
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