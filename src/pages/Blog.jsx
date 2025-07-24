
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  TrendingUp,
  BookOpen,
  Lightbulb,
  BarChart3,
  Mail
} from "lucide-react";
import { useLanguage } from '@/components/LanguageProvider'; 
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231A1A1A'/%3E%3C/svg%3E";

export default function Blog() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = t.blogPage.categories.map(cat => {
      const icons = { all: BookOpen, tutorials: Lightbulb, news: TrendingUp, 'case-studies': BarChart3 };
      return { ...cat, icon: icons[cat.id] };
  });

  const articles = [
    {
      id: 1,
      title: "Jak AI chatboty změňují zákaznický servis v roce 2024",
      excerpt: "Objevte nejnovější trendy v AI chatbotech a jak mohou revolucionalizovat váš zákaznický servis. Praktické tipy a best practices.",
      category: "tutorials",
      author: "Jan Novák",
      date: "2024-01-15",
      readTime: "8 min",
      image: placeholderImage,
      tags: ["AI", "Chatbots", "Customer Service", "Automation"],
      featured: true
    },
    {
      id: 2,
      title: "ROI AI automatizace: Reálné výsledky našich klientů",
      excerpt: "Podrobná analýza návratnosti investic do AI automatizace. Skutečná čísla a case studies z našich úspěšných projektů.",
      category: "case-studies",
      author: "Marie Svobodová",
      date: "2024-01-12",
      readTime: "12 min",
      image: placeholderImage,
      tags: ["ROI", "Case Study", "Business Intelligence", "Analytics"],
      featured: true
    },
    {
      id: 3,
      title: "OpenAI GPT-4 Turbo: Co je nového a jak to využít",
      excerpt: "Kompletní přehled novinek v GPT-4 Turbo a praktické návody, jak tyto funkce implementovat do vašeho business.",
      category: "news",
      author: "Petr Dvořák",
      date: "2024-01-10",
      readTime: "6 min",
      image: placeholderImage,
      tags: ["OpenAI", "GPT-4", "AI Models", "Innovation"],
      featured: false
    },
    {
      id: 4,
      title: "Krok za krokem: Vytvoření AI asistenta pro e-shop",
      excerpt: "Detailní tutoriál, jak postavit AI asistenta pro váš e-shop. Od konceptu až po deployment s praktickými ukázkami kódu.",
      category: "tutorials",
      author: "Anna Nováková",
      date: "2024-01-08",
      readTime: "15 min",
      image: placeholderImage,
      tags: ["Tutorial", "E-commerce", "AI Assistant", "Development"],
      featured: false
    },
    {
      id: 5,
      title: "Prediktivní analytics v praxi: Případ Fashion Online",
      excerpt: "Jak jsme pomocí AI predikce zvýšili tržby o 45% a snížili náklady na skladování o 30%. Kompletní case study.",
      category: "case-studies",
      author: "Tomáš Procházka",
      date: "2024-01-05",
      readTime: "10 min",
      image: placeholderImage,
      tags: ["Predictive Analytics", "Fashion", "E-commerce", "Machine Learning"],
      featured: true
    },
    {
      id: 6,
      title: "Microsoft představil Copilot Pro: Co to znamená pro business",
      excerpt: "Analýza nového Copilot Pro a jak může změnit produktivitu ve firmách. Srovnání s konkurencí a doporučení.",
      category: "news",
      author: "Lucie Kratochvílová",
      date: "2024-01-03",
      readTime: "7 min",
      image: placeholderImage,
      tags: ["Microsoft", "Copilot", "Productivity", "Business"],
      featured: false
    }
  ];

  const topArticles = articles.filter(article => article.featured).slice(0, 5);

  const allTags = [...new Set(articles.flatMap(article => article.tags))];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = activeCategory === 'all' || article.category === activeCategory;
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.blogPage.title} <span className="text-[#00FF7F] neon-text">{t.blogPage.titleHighlight}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            {t.blogPage.subtitle}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={t.blogPage.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-[#1A1A1A] border-[#00FF7F]/50 text-white placeholder-neutral-400 focus:border-[#00FF7F]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#00FF7F] text-[#0A0A0A] font-semibold'
                    : 'bg-[#1A1A1A] text-neutral-300 hover:text-[#00FF7F] border border-[#00FF7F]/50 hover:border-[#00FF7F]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            {featuredArticle && activeCategory === 'all' && (
              <Card className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="bg-[#00FF7F] text-[#0A0A0A] mb-4 font-semibold">{t.blogPage.featuredBadge}</Badge>
                    <h2 className="text-2xl font-bold mb-4 hover:text-[#00FF7F] transition-colors cursor-pointer">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-neutral-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center text-sm text-neutral-400 mb-6 gap-x-4 gap-y-2">
                      <span className="flex items-center"><User className="w-4 h-4 mr-2" />{featuredArticle.author}</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(featuredArticle.date).toLocaleDateString(t.language)}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />{featuredArticle.readTime}</span>
                    </div>
                    <Button className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] group font-semibold">
                      {t.blogPage.readButton}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="bg-[#1A1A1A] border-[#00FF7F]/50 hover-glow group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className="absolute top-4 left-4 bg-[#00FF7F]/90 text-[#0A0A0A] font-semibold"
                    >
                      {categories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FF7F] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center text-xs text-neutral-400 mb-4 gap-x-3 gap-y-1">
                      <span className="flex items-center"><User className="w-3 h-3 mr-1" />{article.author}</span>
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{new Date(article.date).toLocaleDateString(t.language)}</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{article.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-[#00FF7F]/50 text-[#00FF7F]">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs border-neutral-500 text-neutral-400">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#00FF7F] hover:text-[#0A0A0A] hover:bg-[#00FF7F] group p-0 font-semibold">
                      {t.blogPage.readMore}
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0A0A0A] futuristic-border font-semibold">
                {t.blogPage.loadMore}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup - Sticky CTA */}
            <Card className="bg-gradient-to-br from-[#00FF7F]/10 to-[#00CC66]/5 border-[#00FF7F]/50 sticky top-24">
              <CardHeader className="text-center">
                <CardTitle className="text-[#00FF7F] flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.blogPage.sidebar.newsletter.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-neutral-300 text-center">
                  {t.blogPage.sidebar.newsletter.prompt}
                </p>
                <Input
                  type="email"
                  placeholder={t.blogPage.sidebar.newsletter.placeholder}
                  className="bg-[#1A1A1A] border-[#00FF7F]/50 text-white placeholder-neutral-400"
                />
                <Button className="w-full bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold">
                  {t.blogPage.sidebar.newsletter.button}
                </Button>
                <p className="text-xs text-neutral-500 text-center">
                  {t.blogPage.sidebar.newsletter.disclaimer}
                </p>
              </CardContent>
            </Card>

            {/* Top Articles */}
            <Card className="bg-[#1A1A1A] border-[#00FF7F]/50">
              <CardHeader>
                <CardTitle className="text-[#00FF7F] flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {t.blogPage.sidebar.topArticles.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topArticles.map((article, index) => (
                  <div key={article.id} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-8 h-8 bg-[#00FF7F]/20 text-[#00FF7F] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white group-hover:text-[#00FF7F] transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1">{article.readTime}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tag Cloud */}
            <Card className="bg-[#1A1A1A] border-[#00FF7F]/50">
              <CardHeader>
                <CardTitle className="text-[#00FF7F] flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  {t.blogPage.sidebar.tags.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-[#00FF7F]/50 text-[#00FF7F] hover:bg-[#00FF7F]/20 cursor-pointer transition-colors"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-[#1A1A1A] border-[#00FF7F]/50">
              <CardHeader>
                <CardTitle className="text-[#00FF7F]">{t.blogPage.sidebar.categories.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.slice(1).map((category) => {
                  const Icon = category.icon;
                  const count = articles.filter(article => article.category === category.id).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-[#00FF7F]/10 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-[#00FF7F]" />
                        <span className="text-sm text-white">{category.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-[#00FF7F]/50 text-[#00FF7F]">
                        {count}
                      </Badge>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
