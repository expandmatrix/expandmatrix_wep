'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Code, Brain, Database, Zap, Globe, Shield, Star, Cpu, Network, Youtube, Instagram, Twitter } from 'lucide-react';
import { stableRandom } from '@/lib/stableRandom';
import { useRef, useState, useCallback } from 'react';

interface AboutTeamProps {
  dict: any;
  lang: 'cs' | 'en';
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specializations: Array<{
    name: string;
    level: number;
    icon: any;
  }>;
  image: string;
  linkedin: string;
  email: string;
  youtube?: string;
  instagram?: string;
  twitter?: string;
  gradient: string;
  accentColor: string;
}

export default function AboutTeam({ dict, lang }: AboutTeamProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Matěj Venclík',
      role: lang === 'cs' ? 'Jednatel & AI Architekt' : 'Founder & AI Architect',
      bio: lang === 'cs' 
        ? 'Specializuju se na návrh a implementaci AI systémů, automatizací a inteligentních agentů. Zajímám se o nejmodernější technologie, open-source nástroje a budování efektivních AI ekosystémů.'
        : 'Specialist in designing and implementing advanced AI systems with 8+ years of experience.',
      specializations: [
        { name: 'AI agenti', level: 96, icon: Brain },
        { name: 'Strategie automatizace', level: 94, icon: Network },
        { name: 'Architektura systémů', level: 91, icon: Star }
      ],
      image: '/about/Keclik.png',
      linkedin: 'https://www.linkedin.com/in/mat%C4%9Bj-vencl%C3%ADk/',
      youtube: 'https://www.youtube.com/@MatejVenclikAI',
      instagram: 'https://www.instagram.com/mvenclik.ai/',
      twitter: 'https://x.com/matejvenclikai',
      email: 'info@expandmatrix.com',
      gradient: 'from-blue-500 to-purple-600',
      accentColor: '#3B82F6'
    },
    {
      name: 'Matěj Štipčák',
      role: lang === 'cs' ? 'Jednatel & Systémový inženýr' : 'Founder & System Engineer',
      bio: lang === 'cs'
        ? 'Odpovídám za návrh systémových řešení a technickou implementaci našich AI produktů. Zaměřuji se na vývoj, integrace a optimalizaci kódu pro maximální efektivitu.'
        : 'I am responsible for designing system solutions and handling the technical implementation of our AI products. I focus on custom development, integrations, and optimization for maximum efficiency.',
      specializations: [
        { name: 'Systémová integrace', level: 95, icon: Database },
        { name: 'Custom vývoj', level: 92, icon: Code },
        { name: 'Optimalizace procesů', level: 89, icon: Cpu }
      ],
      image: '/about/Matty.png',
      linkedin: 'https://www.linkedin.com/in/mightymatty/',
      instagram: 'https://www.instagram.com/mightymatty/',
      twitter: 'https://x.com/mightymattys',
      email: 'info@expandmatrix.com',
      gradient: 'from-green-500 to-teal-600',
      accentColor: '#10B981'
    },
    {
      name: 'Expandee',
      role: lang === 'cs' ? 'AI Jádrový Architekt' : 'AI Core Architect',
      bio: lang === 'cs'
        ? 'Nikdy nespí, nikdy neodpočívá a nikdy se neunaví. Zpracovává gigantické objemy dat, navrhuje dokonalé workflow a dělá rozhodnutí rychleji než mrknutí oka. Zatímco lidé spí, Expandee už optimalizuje další generaci našich AI systémů.'
        : 'Specialist in business process automation and AI solution integration into existing systems.',
      specializations: [
        { name: 'Reálné zpracování dat', level: 100, icon: Zap },
        { name: 'Prediktivní inteligence', level: 100, icon: Globe },
        { name: 'Nekonečné možnosti růstu', level: 100, icon: Shield }
      ],
      image: '/about/Expandee.png',
      linkedin: 'https://www.linkedin.com/company/expand-matrix',
      instagram: 'https://www.instagram.com/expand.matrix/',
      twitter: 'https://x.com/ExpandMatrix',
      email: 'marcus@expandmatrix.com',
      gradient: 'from-orange-500 to-red-600',
      accentColor: '#F59E0B'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-bg-primary to-bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 80%, rgba(0,255,127,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 20%, rgba(0,255,127,0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => {
          const left = `${stableRandom(i + 1) * 100}%`;
          const top = `${stableRandom(i + 21) * 100}%`;
          const duration = 8 + stableRandom(i + 41) * 4;
          const delay = stableRandom(i + 61) * 5;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-primary/40 rounded-full"
              style={{ left, top }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8 backdrop-blur-sm">
            <Cpu className="w-5 h-5 text-accent-primary mr-2" />
            <span className="text-accent-primary font-medium">
              {lang === 'cs' ? 'AI Experti' : 'AI Experts'}
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-6">
            {lang === 'cs' ? (
              <>
                Náš{' '}
                <span className="text-accent-primary relative">
                  Tým
                  <motion.div 
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </>
            ) : (
              <>
                Our{' '}
                <span className="text-accent-primary relative">
                  Team
                  <motion.div 
                    className="absolute -inset-2 bg-accent-primary/20 blur-2xl rounded-lg"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </>
            )}
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {lang === 'cs'
              ? 'Poznejte experty, kteří stojí za našimi inovativními AI řešeními'
              : 'Meet the experts behind our innovative AI solutions'
            }
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              isActive={activeCard === index}
              onHover={setActiveCard}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
  lang: 'cs' | 'en';
}

function TeamCard({ member, index, isActive, onHover, lang }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="relative h-full">
        <div className="relative bg-gradient-to-br from-bg-secondary/80 to-bg-secondary/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl p-8 h-full flex flex-col overflow-hidden">
          {/* Holographic overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-primary/10 rounded-3xl opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Avatar */}
            <div className="relative mb-8 flex justify-center">
              <motion.div
                className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${member.gradient} p-1`}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  boxShadow: isActive 
                    ? `0 0 40px ${member.accentColor}60` 
                    : '0 0 0 transparent'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-bg-secondary rounded-xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>


            </div>

            {/* Member Info */}
            <div className="text-center mb-8 flex-grow">
              <motion.h3 
                className="text-2xl font-bold text-text-primary mb-3"
                animate={{
                  color: isActive ? member.accentColor : '#FFFFFF'
                }}
                transition={{ duration: 0.3 }}
              >
                {member.name}
              </motion.h3>
              
              <div className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4">
                <p className="text-accent-primary font-semibold text-sm">
                  {member.role}
                </p>
              </div>
              
              <p className="text-text-secondary leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-4 mb-6">
              {member.specializations.map((spec, specIndex) => (
                <motion.div key={spec.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <spec.icon className="w-4 h-4 mr-2" style={{ color: member.accentColor }} />
                      <span className="text-text-primary text-sm font-medium">{spec.name}</span>
                    </div>
                    <span className="text-text-secondary text-xs">{spec.level}%</span>
                  </div>
                  
                  <div className="relative w-full bg-bg-tertiary/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${member.accentColor}, ${member.accentColor}80)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${spec.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: specIndex * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          boxShadow: isActive ? `0 0 10px ${member.accentColor}80` : 'none'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex justify-center space-x-4">
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              {member.youtube && (
                <motion.a
                  href={member.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              )}
              {member.instagram && (
                <motion.a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              )}
              {member.twitter && (
                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${member.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
