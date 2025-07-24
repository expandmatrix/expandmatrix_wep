'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Linkedin, Mail, Code, Brain, Database, Zap, Globe, Shield } from 'lucide-react';
import { useRef, useState } from 'react';

interface AboutTeamProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutTeam({ dict, lang }: AboutTeamProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: 'Martin Novák',
      role: lang === 'cs' ? 'CEO & AI Stratég' : 'CEO & AI Strategist',
      bio: lang === 'cs' 
        ? 'Více než 10 let zkušeností v oblasti AI a strojového učení. Vedl týmy v Google a Microsoft.'
        : 'Over 10 years of experience in AI and machine learning. Led teams at Google and Microsoft.',
      specializations: [
        { name: 'AI Strategy', level: 95, icon: Brain },
        { name: 'Leadership', level: 90, icon: Globe },
        { name: 'Innovation', level: 88, icon: Zap }
      ],
      image: '/team/martin.jpg',
      linkedin: '#',
      email: 'martin@expandmatrix.com',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Jana Svobodová',
      role: lang === 'cs' ? 'CTO & Lead Developer' : 'CTO & Lead Developer',
      bio: lang === 'cs'
        ? 'Expertka na deep learning a neural networks. Absolventka MIT s fokusem na AI research.'
        : 'Expert in deep learning and neural networks. MIT graduate with focus on AI research.',
      specializations: [
        { name: 'Deep Learning', level: 98, icon: Brain },
        { name: 'Python/TensorFlow', level: 95, icon: Code },
        { name: 'Architecture', level: 92, icon: Database }
      ],
      image: '/team/jana.jpg',
      linkedin: '#',
      email: 'jana@expandmatrix.com',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Tomáš Procházka',
      role: lang === 'cs' ? 'Senior AI Engineer' : 'Senior AI Engineer',
      bio: lang === 'cs'
        ? 'Specialista na computer vision a NLP. Autor několika patentů v oblasti AI.'
        : 'Specialist in computer vision and NLP. Author of several AI patents.',
      specializations: [
        { name: 'Computer Vision', level: 94, icon: Brain },
        { name: 'NLP', level: 91, icon: Code },
        { name: 'Research', level: 89, icon: Zap }
      ],
      image: '/team/tomas.jpg',
      linkedin: '#',
      email: 'tomas@expandmatrix.com',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Petra Nováková',
      role: lang === 'cs' ? 'AI Security Expert' : 'AI Security Expert',
      bio: lang === 'cs'
        ? 'Zabezpečuje etické a bezpečné nasazení AI řešení. Certifikovaná v AI governance.'
        : 'Ensures ethical and secure deployment of AI solutions. Certified in AI governance.',
      specializations: [
        { name: 'AI Security', level: 96, icon: Shield },
        { name: 'Ethics', level: 93, icon: Brain },
        { name: 'Compliance', level: 90, icon: Globe }
      ],
      image: '/team/petra.jpg',
      linkedin: '#',
      email: 'petra@expandmatrix.com',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const TeamMemberCard = ({ member, index }: { member: typeof team[0], index: number }) => {
    const isHovered = hoveredMember === index;

    return (
      <div
        onMouseEnter={() => setHoveredMember(index)}
        onMouseLeave={() => setHoveredMember(null)}
        className="group relative"
        style={{
          opacity: 1,
          transform: 'translateY(0px)',
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
      >
        <div
          className={`relative bg-bg-secondary/30 backdrop-blur-xl rounded-3xl border overflow-hidden h-full transition-all duration-300 ${
            isHovered 
              ? 'border-accent-primary/40 scale-[1.02] shadow-lg shadow-accent-primary/20' 
              : 'border-accent-primary/20'
          }`}
        >
          {/* Glow effect only on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl" />
          )}

          <div className="relative z-10 p-8">
            {/* Avatar */}
            <div className="relative mb-6">
              <div
                className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} p-1 transition-transform duration-300 ${
                  isHovered ? 'scale-105' : ''
                }`}
              >
                <div className="w-full h-full bg-bg-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>

            {/* Name & Role */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-accent-primary font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-text-secondary leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-semibold text-text-primary opacity-80">
                {lang === 'cs' ? 'Specializace' : 'Specializations'}
              </h4>
              {member.specializations.map((spec, specIndex) => (
                <div key={specIndex} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <spec.icon className="w-4 h-4 text-accent-primary mr-2" />
                      <span className="text-text-secondary text-sm">{spec.name}</span>
                    </div>
                    <span className="text-accent-primary text-sm font-semibold">
                      {spec.level}%
                    </span>
                  </div>
                  <div className="w-full bg-bg-tertiary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-dark rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${spec.level}%`,
                        transitionDelay: `${specIndex * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex justify-center space-x-4">
              <a
                href={member.linkedin}
                className="p-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary hover:bg-accent-primary hover:text-bg-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="p-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary hover:bg-accent-primary hover:text-bg-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Add CSS animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Tech Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6">
            {lang === 'cs' ? 'Náš tým expertů' : 'Our Expert Team'}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Spojili jsme síly nejlepších AI specialistů, vývojářů a strategů pro vytvoření výjimečných řešení'
              : 'We have brought together the best AI specialists, developers, and strategists to create exceptional solutions'
            }
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
