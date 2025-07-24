
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  ExternalLink,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  Target,
  Zap,
  BarChart3,
  ShoppingCart,
  Home,
  Briefcase
} from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider';

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231A1A1A'/%3E%3C/svg%3E";
const placeholderAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%231A1A1A'/%3E%3C/svg%3E";


export default function Portfolio() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = t.portfolioPage.filters.map(filter => {
      const icons = { all: Target, automation: Zap, ecommerce: ShoppingCart, realestate: Home, business: BarChart3 };
      return { ...filter, icon: icons[filter.id] };
  });

  const projects = [
    {
      id: 1,
      title: "AI Chatbot pro TechCorp",
      category: "automation",
      image: placeholderImage,
      description: "Implementace inteligentního chatbota, který automatizoval 85% zákaznických dotazů",
      results: {
        timeReduction: "75%",
        costSavings: "180 000 Kč/rok",
        satisfaction: "94%"
      },
      technologies: ["OpenAI GPT", "Node.js", "React", "MongoDB"],
      client: "TechCorp s.r.o.",
      duration: "6 týdnů",
      featured: true
    },
    {
      id: 2,
      title: "Prediktivní analytics pro E-shop Plus",
      category: "ecommerce",
      image: placeholderImage,
      description: "AI systém pro predikci poptávky a optimalizaci skladu",
      results: {
        inventoryReduction: "35%",
        salesIncrease: "22%",
        accuracy: "87%"
      },
      technologies: ["Python", "TensorFlow", "PostgreSQL", "React"],
      client: "E-shop Plus",
      duration: "10 týdnů",
      featured: false
    },
    {
      id: 3,
      title: "Automatizace realitních procesů",
      category: "realestate",
      image: placeholderImage,
      description: "Kompletní automatizace od lead generování po uzavření smluv",
      results: {
        leadIncrease: "45%",
        processTime: "60% rychleji",
        conversion: "28% vyšší"
      },
      technologies: ["Zapier", "Airtable", "OpenAI", "Calendly API"],
      client: "Reality Pro",
      duration: "8 týdnů",
      featured: true
    },
    {
      id: 4,
      title: "Business Intelligence Dashboard",
      category: "business",
      image: placeholderImage,
      description: "Real-time BI dashboard s AI insights pro management",
      results: {
        decisionSpeed: "3x rychlejší",
        accuracy: "92%",
        efficiency: "40% vyšší"
      },
      technologies: ["Power BI", "Azure ML", "SQL Server", "Python"],
      client: "Manufacturing Corp",
      duration: "12 týdnů",
      featured: false
    },
    {
      id: 5,
      title: "Personalizační engine",
      category: "ecommerce",
      image: placeholderImage,
      description: "AI engine pro personalizované produktové doporučení",
      results: {
        conversionRate: "+65%",
        avgOrderValue: "+35%",
        customerSatisfaction: "96%"
      },
      technologies: ["Collaborative Filtering", "AWS", "React", "Redis"],
      client: "Fashion Online",
      duration: "14 týdnů",
      featured: true
    },
    {
      id: 6,
      title: "Workflow automatizace HR",
      category: "automation",
      image: placeholderImage,
      description: "Automatizace HR procesů od recruitingu po onboarding",
      results: {
        timeReduction: "80%",
        candidateExperience: "+90%",
        costSavings: "250 000 Kč/rok"
      },
      technologies: ["Microsoft Power Automate", "SharePoint", "Teams API"],
      client: "HR Solutions",
      duration: "7 týdnů",
      featured: false
    }
  ];

  const testimonials = [
    {
      name: "Jan Novák",
      role: "CEO, TechCorp",
      text: "Expand Matrix úplně změnila způsob, jakým komunikujeme se zákazníky. AI chatbot řeší 85% dotazů automaticky.",
      rating: 5,
      avatar: placeholderAvatar
    },
    {
      name: "Marie Svobodová",
      role: "Marketing Director, E-shop Plus",
      text: "Prediktivní analytics nám pomohla snížit náklady na sklad o 35% a zvýšit tržby o 22%. ROI bylo jasné už po 3 měsících.",
      rating: 5,
      avatar: placeholderAvatar
    },
    {
      name: "Petr Dvořák",
      role: "Founder, Reality Pro",
      text: "Automatizace realitních procesů nám ušetřila obrovské množství času. Generujeme o 45% více kvalitních leadů.",
      rating: 5,
      avatar: placeholderAvatar
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.portfolioPage.title} <span className="text-[#00FF7F] neon-text">{t.portfolioPage.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12">
            {t.portfolioPage.subtitle}
          </p>
          <Button size="lg" className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] group font-semibold">
            {t.portfolioPage.mainButton}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#00FF7F] text-[#0A0A0A] font-semibold'
                    : 'bg-[#1A1A1A] text-neutral-300 hover:text-[#00FF7F] border border-[#00FF7F]/50 hover:border-[#00FF7F]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{filter.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Projects */}
        {activeFilter === 'all' && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t.portfolioPage.featuredTitle} <span className="text-[#00FF7F]">{t.portfolioPage.projectsTitle}</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#00FF7F] text-[#0A0A0A] font-semibold">
                      {t.portfolioPage.featured}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FF7F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">{t.portfolioPage.clientLabel}</span>
                        <p className="text-[#00FF7F] font-medium">{project.client}</p>
                      </div>
                      <div>
                        <span className="text-neutral-400">{t.portfolioPage.durationLabel}</span>
                        <p className="text-white font-medium">{project.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {activeFilter === 'all' ? t.portfolioPage.allProjects : filters.find(f => f.id === activeFilter)?.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow group cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-[#00FF7F] text-[#00FF7F] text-xs">
                      {filters.find(f => f.id === project.category)?.name}
                    </Badge>
                    {project.featured && (
                      <Star className="w-4 h-4 text-[#00FF7F] fill-current" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FF7F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="text-xs text-neutral-400">
                    <span>{project.client}</span> • <span>{project.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t.portfolioPage.testimonialsTitle} <span className="text-[#00FF7F] neon-text">{t.portfolioPage.testimonialsTitleHighlight}</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#00FF7F] fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-200 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#00FF7F]">{testimonial.name}</p>
                      <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00FF7F]/10 to-[#00CC66]/10 rounded-3xl p-12 futuristic-border">
            <h2 className="text-3xl font-bold mb-6">
              {t.portfolioPage.finalCta.title}
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t.portfolioPage.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] group font-semibold">
                {t.portfolioPage.finalCta.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] futuristic-border font-semibold">
                {t.portfolioPage.finalCta.secondaryButton}
              </Button>
            </div>
          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#1A1A1A] rounded-3xl border border-[#00FF7F]/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-[#0A0A0A]/80 rounded-full flex items-center justify-center text-white hover:bg-[#00FF7F] hover:text-[#0A0A0A] transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-[#00FF7F]">{selectedProject.title}</h2>
                <p className="text-neutral-300 text-lg mb-8 leading-relaxed">{selectedProject.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#00FF7F]">{t.portfolioPage.modal.resultsTitle}</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.results).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-neutral-400 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                          <span className="text-[#00FF7F] font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#00FF7F]">{t.portfolioPage.modal.techTitle}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="border-[#00FF7F]/50 text-[#00FF7F]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">{t.portfolioPage.clientLabel}</span>
                        <span className="text-white font-medium">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">{t.portfolioPage.durationLabel}</span>
                        <span className="text-white font-medium">{selectedProject.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold">
                    {t.portfolioPage.modal.ctaButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
