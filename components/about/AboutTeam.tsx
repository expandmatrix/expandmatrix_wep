'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Code, Brain, Database, Zap, Globe, Shield, Star, Cpu, Network } from 'lucide-react';
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
  gradient: string;
  accentColor: string;
}

export default function AboutTeam({ dict, lang }: AboutTeamProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Johnson',
      role: lang === 'cs' ? 'AI Architekt' : 'AI Architect',
      bio: lang === 'cs' 
        ? 'Specialista na návrh a implementaci pokročilých AI systémů s 8+ lety zkušeností.'
        : 'Specialist in designing and implementing advanced AI systems with 8+ years of experience.',
      specializations: [
        { name: 'Machine Learning', level: 95, icon: Brain },
        { name: 'Deep Learning', level: 90, icon: Network },
        { name: 'AI Strategy', level: 88, icon: Star }
      ],
      image: '/team/alex.jpg',
      linkedin: '#',
      email: 'alex@expandmatrix.com',
      gradient: 'from-blue-500 to-purple-600',
      accentColor: '#3B82F6'
    },
    {
      name: 'Sarah Chen',
      role: lang === 'cs' ? 'Data Scientist' : 'Data Scientist',
      bio: lang === 'cs'
        ? 'Expertka na analýzu dat a vytváření prediktivních modelů pro business intelligence.'
        : 'Expert in data analysis and creating predictive models for business intelligence.',
      specializations: [
        { name: 'Data Analysis', level: 92, icon: Database },
        { name: 'Python/R', level: 89, icon: Code },
        { name: 'Statistics', level: 87, icon: Cpu }
      ],
      image: '/team/sarah.jpg',
      linkedin: '#',
      email: 'sarah@expandmatrix.com',
      gradient: 'from-green-500 to-teal-600',
      accentColor: '#10B981'
    },
    {
      name: 'Marcus Weber',
      role: lang === 'cs' ? 'Automation Engineer' : 'Automation Engineer',
      bio: lang === 'cs'
        ? 'Specialista na automatizaci business procesů a integraci AI řešení do existujících systémů.'
        : 'Specialist in business process automation and AI solution integration into existing systems.',
      specializations: [
        { name: 'Process Automation', level: 94, icon: Zap },
        { name: 'System Integration', level: 91, icon: Globe },
        { name: 'Security', level: 85, icon: Shield }
      ],
      image: '/team/marcus.jpg',
      linkedin: '#',
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) * 0.1);
    mouseY.set((e.clientY - centerY) * 0.1);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
    mouseX.set(0);
    mouseY.set(0);
  }, [onHover, mouseX, mouseY]);

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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full"
        style={{
          rotateX: isActive ? rotateX : 0,
          rotateY: isActive ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.2 }}
      >
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
                <div className="w-full h-full bg-bg-secondary rounded-xl flex items-center justify-center text-white text-3xl font-black">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <AnimatePresence>
                {isActive && (
                  <>
                    {[0, 120, 240].map((rotation, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotate: rotation + 360
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.5,
                          rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                        style={{
                          transformOrigin: '6px 50px',
                        }}
                      >
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: member.accentColor }}
                        />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
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
      </motion.div>
    </motion.div>
  );
}
