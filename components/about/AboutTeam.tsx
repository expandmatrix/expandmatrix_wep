'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Code, Brain, Database, Zap, Globe, Shield, Star, Cpu, Network } from 'lucide-react';
import { useRef, useState, useCallback, useMemo } from 'react';

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

  const team: TeamMember[] = useMemo(() => [
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
      gradient: 'from-blue-500 via-purple-500 to-cyan-500',
      accentColor: '#3B82F6'
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
      gradient: 'from-emerald-500 via-teal-500 to-green-400',
      accentColor: '#10B981'
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
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      accentColor: '#F97316'
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
      gradient: 'from-pink-500 via-rose-500 to-purple-500',
      accentColor: '#EC4899'
    }
  ], [lang]);

  const handleCardHover = useCallback((index: number | null) => {
    setActiveCard(index);
  }, []);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary/20">
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,127,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,127,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
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
          
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mb-6 bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-clip-text">
            {lang === 'cs' ? 'Náš tým expertů' : 'Our Expert Team'}
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {lang === 'cs'
              ? 'Spojili jsme síly nejlepších AI specialistů, vývojářů a strategů pro vytvoření výjimečných řešení'
              : 'We have brought together the best AI specialists, developers, and strategists to create exceptional solutions'
            }
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              isActive={activeCard === index}
              onHover={handleCardHover}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate TeamCard component for better performance
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

  // Subtle 3D rotation
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
      className="group relative perspective-1000"
    >
      {/* Holographic Card Container */}
      <motion.div
        className="relative h-full"
        style={{
          rotateX: isActive ? rotateX : 0,
          rotateY: isActive ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Main Card */}
        <div className={`
          relative bg-gradient-to-br from-bg-secondary/40 via-bg-secondary/20 to-transparent 
          backdrop-blur-2xl border rounded-3xl overflow-hidden h-full
          transition-all duration-500 ease-out
          ${isActive 
            ? 'border-accent-primary/60 shadow-2xl shadow-accent-primary/20 scale-105' 
            : 'border-accent-primary/20 hover:border-accent-primary/40'
          }
        `}>
          
          {/* Holographic Overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 
            transition-opacity duration-500 rounded-3xl
            ${isActive ? 'opacity-10' : 'group-hover:opacity-5'}
          `} />

          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${member.accentColor}40, transparent)`,
              opacity: isActive ? 0.6 : 0,
            }}
            animate={isActive ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Content */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            
            {/* Futuristic Avatar */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                {/* Avatar Container */}
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

            {/* Skills Matrix */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-text-primary flex items-center">
                  <Network className="w-4 h-4 mr-2 text-accent-primary" />
                  {lang === 'cs' ? 'Specializace' : 'Specializations'}
                </h4>
                <Star className="w-4 h-4 text-accent-primary" />
              </div>
              
              {member.specializations.map((spec, specIndex) => (
                <motion.div 
                  key={spec.name} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: specIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <spec.icon className="w-4 h-4 text-accent-primary mr-3" />
                      <span className="text-text-secondary text-sm font-medium">
                        {spec.name}
                      </span>
                    </div>
                    <span className="text-accent-primary text-sm font-bold">
                      {spec.level}%
                    </span>
                  </div>
                  
                  <div className="relative w-full bg-bg-tertiary/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative"
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
                      {/* Animated Glow */}
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

            {/* Contact Actions */}
            <div className="flex justify-center space-x-4">
              {[
                { icon: Linkedin, href: member.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${member.email}`, label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary group/btn overflow-hidden"
                >
                  {/* Button Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent-primary/20 rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <Icon className="w-5 h-5 relative z-10 group-hover/btn:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
