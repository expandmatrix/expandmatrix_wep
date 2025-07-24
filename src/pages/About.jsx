import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Target,
  Shield,
  ArrowRight,
  Play,
  Users,
  Linkedin,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  Heart,
  Lightbulb,
  Rocket
} from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

// Safe avatar generator function
const generateAvatar = (name, index) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
    const color = colors[index % colors.length];
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='50' y='60' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`;
};

export default function About() {
  const { t } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState(null);

  const timeline = t.aboutPage.timeline.items.map(item => ({
    ...item,
    icon: {
      "2020": <Rocket className="w-6 h-6" />,
      "2021": <Zap className="w-6 h-6" />,
      "2022": <TrendingUp className="w-6 h-6" />,
      "2023": <Users className="w-6 h-6" />,
      "2024": <Award className="w-6 h-6" />,
    }[item.year]
  }));

  const team = t.aboutPage.team.members.map((member, index) => ({
      ...member,
      image: generateAvatar(member.name, index),
      linkedin: "#",
  }));

  const values = t.aboutPage.values.items.map(value => ({
    ...value,
    icon: {
      "Inovace": <Lightbulb className="w-8 h-8" />,
      "Innovation": <Lightbulb className="w-8 h-8" />,
      "Efektivita": <Target className="w-8 h-8" />,
      "Efficiency": <Target className="w-8 h-8" />,
      "Důvěra": <Heart className="w-8 h-8" />,
      "Trust": <Heart className="w-8 h-8" />,
    }[value.title],
    gradient: {
      "Inovace": "from-blue-500 to-cyan-500",
      "Innovation": "from-blue-500 to-cyan-500",
      "Efektivita": "from-green-500 to-emerald-500",
      "Efficiency": "from-green-500 to-emerald-500",
      "Důvěra": "from-pink-500 to-rose-500",
      "Trust": "from-pink-500 to-rose-500",
    }[value.title]
  }));

  const stats = [
    { number: "150+", label: t.aboutPage.stats[0].label, icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: t.aboutPage.stats[1].label, icon: <Target className="w-6 h-6" /> },
    { number: "80%", label: t.aboutPage.stats[2].label, icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: t.aboutPage.stats[3].label, icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.aboutPage.title} <span className="text-[#00FF7F] neon-text">{t.aboutPage.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.aboutPage.subtitle}
          </p>
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF7F] to-[#00CC66] rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-r from-[#00FF7F] to-[#00CC66] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 bg-[#00FF7F] rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#0A0A0A]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#1A1A1A] border-[#00FF7F]/50 rounded-2xl p-6 hover-glow">
                <div className="text-[#00FF7F] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#00FF7F] mb-2 neon-text">
                  {stat.number}
                </div>
                <p className="text-neutral-300 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.aboutPage.timeline.title} <span className="text-[#00FF7F] neon-text">{t.aboutPage.timeline.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              {t.aboutPage.timeline.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00FF7F] to-[#00CC66] h-full opacity-50" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <Card className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow">
                      <CardContent className="p-6">
                        <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <div className="text-[#00FF7F]">{item.icon}</div>
                          <span className="text-2xl font-bold text-[#00FF7F]">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-neutral-300 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative w-0 lg:w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-[#00FF7F] rounded-full border-4 border-[#0A0A0A] z-10 neon-glow" />
                  </div>
                  
                  {/* Empty div for spacing on larger screens */}
                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.aboutPage.team.title} <span className="text-[#00FF7F] neon-text">{t.aboutPage.team.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              {t.aboutPage.team.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#00FF7F] transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#00FF7F] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#00FF7F] font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-[#00FF7F]/10 text-[#00FF7F] px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00FF7F] hover:text-[#00CC66] transition-colors"
                    aria-label={`LinkedIn profil ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.aboutPage.values.title} <span className="text-[#00FF7F] neon-text">{t.aboutPage.values.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              {t.aboutPage.values.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow group text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00FF7F] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Co říkají naši <span className="text-[#00FF7F] neon-text">klienti</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.home.testimonials.items.map((video, index) => (
              <Card 
                key={index} 
                className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Přehrát video testimonial od ${video.name} z ${video.company}`}
                onClick={() => setPlayingVideo(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setPlayingVideo(index);
                  }
                }}
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#00FF7F]/20 to-[#00CC66]/10 rounded-t-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#00FF7F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#0A0A0A] ml-1" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent rounded-t-lg" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{video.name}</p>
                    <p className="text-sm opacity-80">{video.company}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-neutral-300 line-clamp-2">
                    "{video.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00FF7F]/10 to-[#00CC66]/10 rounded-3xl p-12 futuristic-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.aboutPage.finalCta.title}
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t.aboutPage.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] group font-semibold">
                {t.aboutPage.finalCta.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] futuristic-border font-semibold">
                {t.aboutPage.finalCta.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}