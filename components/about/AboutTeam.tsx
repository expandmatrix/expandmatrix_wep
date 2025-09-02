'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
  gradient: string;
  accentColor: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const AboutTeam: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 'matty',
      name: 'Matty',
      role: 'AI Architect & Founder',
      bio: 'Průkopník v oblasti umělé inteligence s více než 8 lety zkušeností. Specializuje se na vývoj pokročilých AI systémů a strojového učení.',
      image: '/about/Matty.png',
      skills: [
        { name: 'Machine Learning', level: 95 },
        { name: 'Deep Learning', level: 90 },
        { name: 'Python/TensorFlow', level: 92 },
        { name: 'AI Strategy', level: 88 }
      ],
      gradient: 'from-purple-500 to-pink-600',
      accentColor: '#8B5CF6'
    },
    {
      id: 'keclik',
      name: 'Keclik',
      role: 'Lead Developer',
      bio: 'Expertní vývojář se zaměřením na full-stack development a integraci AI řešení do reálných aplikací.',
      image: '/about/Keclik.png',
      skills: [
        { name: 'Full-Stack Development', level: 93 },
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js/Python', level: 87 },
        { name: 'AI Integration', level: 85 }
      ],
      gradient: 'from-blue-500 to-cyan-600',
      accentColor: '#3B82F6'
    },
    {
      id: 'expandee',
      name: 'Expandee',
      role: 'Business Strategist',
      bio: 'Strategický myslitel s hlubokým porozuměním businessu a schopností transformovat AI technologie do praktických řešení.',
      image: '/about/Expandee.png',
      skills: [
        { name: 'Business Strategy', level: 92 },
        { name: 'Project Management', level: 88 },
        { name: 'AI Consulting', level: 85 },
        { name: 'Market Analysis', level: 90 }
      ],
      gradient: 'from-green-500 to-emerald-600',
      accentColor: '#10B981'
    }
  ];

  const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
    
    const isActive = activeCard === member.id;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setActiveCard(null);
    };

    return (
      <motion.div
        className="group relative perspective-1000"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setActiveCard(member.id)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="relative h-full"
          whileHover={{ z: 50 }}
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
                 <span className="text-accent-primary font-medium">{member.role}</span>
               </div>
               
               <p className="text-text-secondary leading-relaxed mb-6">
                 {member.bio}
               </p>
             </div>

             {/* Skills */}
             <div className="space-y-4">
               <h4 className="text-lg font-semibold text-text-primary mb-4">Klíčové dovednosti</h4>
               {member.skills.map((skill, skillIndex) => (
                 <div key={skillIndex} className="space-y-2">
                   <div className="flex justify-between items-center">
                     <span className="text-text-secondary text-sm font-medium">{skill.name}</span>
                     <span className="text-accent-primary text-sm font-bold">{skill.level}%</span>
                   </div>
                   <div className="relative h-2 bg-bg-primary/50 rounded-full overflow-hidden">
                     <motion.div
                       className={`absolute left-0 top-0 h-full bg-gradient-to-r ${member.gradient} rounded-full`}
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.level}%` }}
                       transition={{ 
                         duration: 1.2, 
                         delay: index * 0.2 + skillIndex * 0.1,
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
                 </div>
               ))}
             </div>
           </div>
         </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-accent-primary/5 via-transparent to-accent-secondary/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
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
            Náš <span className="text-accent-primary">Tým</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Poznávejte experty, kteří stojí za inovativními AI řešeními ExpandMatrix. 
            Každý člen našeho týmu přináší unikátní zkušenosti a vášeň pro technologie.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl backdrop-blur-xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Chcete se připojit k našemu týmu?
              </h3>
              <p className="text-text-secondary">
                Hledáme talentované jednotlivce, kteří chtějí měnit svět pomocí AI
              </p>
            </div>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kariéra u nás
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;