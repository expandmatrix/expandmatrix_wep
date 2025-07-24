

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Zap,
  ArrowRight,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider';

const AppLayout = ({ children, currentPageName }) => {
  const { language, switchLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: t.layout.nav.home, url: createPageUrl('Home') },
    { name: t.layout.nav.services, url: createPageUrl('Services') },
    { name: t.layout.nav.portfolio, url: createPageUrl('Portfolio') },
    { name: t.layout.nav.blog, url: createPageUrl('Blog') },
    { name: t.layout.nav.about, url: createPageUrl('About') },
    ...(language === 'cs' ? [{ name: t.layout.nav.community, url: createPageUrl('Community') }] : []),
    { name: t.layout.nav.vps, url: createPageUrl('VPS') }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF7F] selection:text-[#0A0A0A]">
      <style>
        {`
          :root {
            --neon-green: #00FF7F;
            --dark-bg: #0A0A0A;
            --text-white: #FFFFFF;
            --text-neutral-300: #d4d4d4;
            --text-neutral-400: #a3a3a3;
          }
          .neon-glow {
            box-shadow: 0 0 20px rgba(0, 255, 127, 0.3);
          }
          .neon-text {
            text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
          }
          .hover-glow:hover {
            box-shadow: 0 0 30px rgba(0, 255, 127, 0.4);
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }
          .futuristic-border {
            border: 1px solid rgba(0, 255, 127, 0.5);
            position: relative;
          }
          *:focus-visible {
            outline: 2px solid var(--neon-green) !important;
            outline-offset: 2px;
          }
        `}
      </style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-lg py-3 border-b border-[#00FF7F]/30' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center space-x-2 hover-glow rounded-lg p-2 transition-transform duration-200">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00FF7F] to-[#00CC66] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#0A0A0A]" />
              </div>
              <span className="text-xl font-bold neon-text">Expand Matrix</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to={createPageUrl('Home')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'Home' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                {t.layout.nav.home}
              </Link>
              <Link to={createPageUrl('Services')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'Services' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                {t.layout.nav.services}
              </Link>
              <Link to={createPageUrl('Portfolio')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'Portfolio' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                {t.layout.nav.portfolio}
              </Link>
              <Link to={createPageUrl('Blog')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'Blog' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                {t.layout.nav.blog}
              </Link>
              <Link to={createPageUrl('About')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'About' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                {t.layout.nav.about}
              </Link>
              {language === 'cs' && (
                <Link to={createPageUrl('Community')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'Community' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                  {t.layout.nav.community}
                </Link>
              )}
              <Link to={createPageUrl('VPS')} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${currentPageName === 'VPS' ? 'text-[#00FF7F]' : 'text-white hover:text-[#00FF7F]'}`}>
                {t.layout.nav.vps}
              </Link>
            </nav>

            {/* Language & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Simple Language Toggle */}
              <button
                onClick={() => switchLanguage(language === 'cs' ? 'en' : 'cs')}
                className="px-3 py-1 text-sm font-medium text-white hover:text-[#00FF7F] transition-colors duration-200 border border-[#00FF7F]/50 rounded-full hover:border-[#00FF7F]"
                aria-label={`Switch to ${language === 'cs' ? 'English' : 'Čeština'}`}
              >
                {language === 'cs' ? 'CS' : 'EN'}
              </button>

              <Button className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold hover-glow rounded-full">
                {t.layout.ctaButton}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#00FF7F]/10 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-[#00FF7F]/50 bg-[#0A0A0A]">
              <nav className="flex flex-col space-y-3 mt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                      location.pathname === item.url 
                        ? 'text-[#00FF7F] bg-[#00FF7F]/10' 
                        : 'text-white hover:text-[#00FF7F] hover:bg-[#00FF7F]/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[#00FF7F]/50 space-y-3">
                  <button
                    onClick={() => switchLanguage(language === 'cs' ? 'en' : 'cs')}
                    className="w-full text-center py-2 px-4 text-white hover:text-[#00FF7F] border border-[#00FF7F]/50 rounded-lg hover:border-[#00FF7F] transition-colors duration-200"
                  >
                    {language === 'cs' ? 'Switch to English' : 'Přepnout na češtinu'}
                  </button>

                  <Button className="w-full bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] font-semibold text-base py-3 rounded-full">
                    {t.layout.ctaButton}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#00FF7F]/50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00FF7F] to-[#00CC66] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#0A0A0A]" />
                </div>
                <span className="text-xl font-bold neon-text">Expand Matrix</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {t.layout.footer.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] font-semibold">{t.layout.footer.quickLinks}</h3>
              <div className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-neutral-300 hover:text-[#00FF7F] text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] font-semibold">{t.layout.footer.services}</h3>
              <div className="space-y-2">
                {Object.values(t.layout.footer.serviceLinks).map((serviceName, index) => (
                  <Link key={index} to={createPageUrl('Services')} className="block text-neutral-300 hover:text-[#00FF7F] text-sm transition-colors duration-200">
                    {serviceName}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] font-semibold">{t.layout.footer.newsletter}</h3>
              <p className="text-neutral-300 text-sm">
                {t.layout.footer.newsletterPrompt}
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={t.layout.footer.emailPlaceholder}
                  className="flex-1 bg-[#1A1A1A] border border-[#00FF7F]/50 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#00FF7F]"
                  aria-label="Email for newsletter"
                />
                <Button size="sm" className="bg-[#00FF7F] text-[#0A0A0A] hover:bg-[#00CC66] rounded-full" aria-label="Subscribe to newsletter">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-[#00FF7F]/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-neutral-400 hover:text-[#00FF7F] transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#00FF7F] transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#00FF7F] transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#00FF7F] transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-neutral-400 text-sm">
              {t.layout.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <AppLayout currentPageName={currentPageName}>{children}</AppLayout>
    </LanguageProvider>
  );
}

