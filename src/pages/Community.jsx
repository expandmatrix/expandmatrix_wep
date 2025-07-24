
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle,
  Users,
  Crown,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Gift,
  Calendar,
  BookOpen,
  Award,
  Linkedin,
  Facebook,
  MessageSquare,
  Shield,
  Video,
  Coffee,
  Lightbulb,
  Target,
  TrendingUp
} from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

export default function Community() {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState('free');
  
  const communityPlatforms = t.communityPage.options.items;
  const benefits = t.communityPage.options.benefits;

  const communityOptions = [
    { id: 'discord-free', ...communityPlatforms[0], benefits: benefits.free, icon: <MessageCircle className="w-8 h-8" />, buttonStyle: "bg-[#5865F2] hover:bg-[#4752C4] text-white", popular: false, platform: 'Discord' },
    { id: 'linkedin', ...communityPlatforms[1], benefits: benefits.linkedin, icon: <Linkedin className="w-8 h-8" />, buttonStyle: "bg-[#0077B5] hover:bg-[#005885] text-white", popular: false, platform: 'LinkedIn' },
    { id: 'facebook', ...communityPlatforms[2], benefits: benefits.facebook, icon: <Facebook className="w-8 h-8" />, buttonStyle: "bg-[#1877F2] hover:bg-[#166FE5] text-white", popular: false, platform: 'Facebook' },
    { id: 'discord-premium', ...communityPlatforms[3], benefits: benefits.premium, icon: <Crown className="w-8 h-8" />, buttonStyle: "bg-gradient-to-r from-[#00FF7F] to-[#00CC66] hover:from-[#00CC66] hover:to-[#00FF7F] text-[#0A0A0A] font-semibold", popular: true, platform: 'Discord VIP' }
  ];

  const upcomingEvents = t.communityPage.events.items.map(event => ({
    ...event,
    attendees: Math.floor(Math.random() * 50) + 20, // Keep random for dynamic feel
    maxAttendees: Math.floor(Math.random() * 50) + 70, // Keep random for dynamic feel
    date: '15. ledna 2024', // Static date as per outline
    time: '19:00 - 20:30' // Static time as per outline
  }));

  const communityStats = t.communityPage.stats;
  const statsIcons = [<Users className="w-5 h-5" />, <Target className="w-5 h-5" />, <Award className="w-5 h-5" />, <Star className="w-5 h-5" />];

  const faqs = t.communityPage.faq.items;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.communityPage.title} <span className="text-[#00FF7F] neon-text">{t.communityPage.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.communityPage.subtitle}
          </p>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-[#00FF7F]/50 rounded-xl p-4 hover-glow">
                <div className="text-[#00FF7F] mb-2 flex justify-center">
                  {statsIcons[index]}
                </div>
                <div className="text-2xl font-bold text-[#00FF7F] mb-1 neon-text">
                  {stat.number || "0"}
                </div>
                <p className="text-neutral-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t.communityPage.options.title} <span className="text-[#00FF7F] neon-text">{t.communityPage.options.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              {t.communityPage.options.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {communityOptions.map((option) => (
              <Card 
                key={option.id}
                className={`bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow relative flex flex-col ${
                  option.popular ? 'ring-2 ring-[#00FF7F] scale-105' : ''
                }`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00FF7F] text-[#0A0A0A] font-semibold">
                    <Crown className="w-3 h-3 mr-1" />
                    {t.communityPage.options.mostPopular}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-[#00FF7F] mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl text-[#00FF7F] mb-2">{option.title}</CardTitle>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{option.price}</span>
                  </div>
                  <p className="text-neutral-300 text-sm">{option.description}</p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Users className="w-4 h-4 text-[#00FF7F]" />
                    <span className="text-sm text-[#00FF7F] font-medium">{option.memberCount}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <div className="space-y-3 flex-grow">
                    {option.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-[#00FF7F] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-neutral-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${option.buttonStyle}`}
                    size="lg"
                  >
                    {option.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t.communityPage.events.title} <span className="text-[#00FF7F] neon-text">{t.communityPage.events.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              {t.communityPage.events.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-[#00FF7F] text-[#00FF7F]">
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="border-neutral-500 text-neutral-400">
                      {event.platform}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-[#00FF7F]">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#00FF7F]" />
                      <span className="text-neutral-200">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Video className="w-4 h-4 text-[#00FF7F]" />
                      <span className="text-neutral-200">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#00FF7F]" />
                      <span className="text-neutral-200">{event.attendees}/{event.maxAttendees} {t.communityPage.events.attendees}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#00FF7F]/10 rounded-lg p-3">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-neutral-400">{t.communityPage.events.capacity}</span>
                      <span className="text-[#00FF7F] font-medium">
                        {Math.round((event.attendees / event.maxAttendees) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div 
                        className="bg-[#00FF7F] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold">
                    {t.communityPage.events.register}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] futuristic-border font-semibold">
              {t.communityPage.events.viewAll}
            </Button>
          </div>
        </div>

        {/* What You'll Get */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t.communityPage.benefits.title} <span className="text-[#00FF7F] neon-text">{t.communityPage.benefits.titleHighlight}</span> {t.communityPage.benefits.subtitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.communityPage.benefits.items.map((item, index) => {
              const icons = [<Lightbulb className="w-8 h-8 text-white" />, <Users className="w-8 h-8 text-white" />, <TrendingUp className="w-8 h-8 text-white" />];
              const gradients = ["from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"];
              return (
                <Card key={index} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow text-center">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      {icons[index]}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Community */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t.communityPage.faq.title} <span className="text-[#00FF7F] neon-text">{t.communityPage.faq.titleHighlight}</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#00FF7F]">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00FF7F]/10 to-[#00CC66]/10 rounded-3xl p-12 futuristic-border">
            <h2 className="text-3xl font-bold mb-6">
              {t.communityPage.finalCta.title}
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t.communityPage.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white group font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.communityPage.finalCta.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] futuristic-border font-semibold">
                {t.communityPage.finalCta.secondaryButton}
                <Crown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
