'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';

interface NavigationTestProps {
  lang: 'cs' | 'en';
}

export default function NavigationTest({ lang }: NavigationTestProps) {
  const pathname = usePathname();
  
  const testRoutes = [
    { path: `/${lang}`, label: lang === 'cs' ? 'Domů' : 'Home' },
    { path: `/${lang}/${lang === 'cs' ? 'sluzby' : 'services'}`, label: lang === 'cs' ? 'Služby' : 'Services' },
    { path: `/${lang}/vps`, label: 'VPS' },
    { path: `/${lang}/portfolio`, label: 'Portfolio' },
    { path: `/${lang}/${lang === 'cs' ? 'kontakt' : 'contact'}`, label: lang === 'cs' ? 'Kontakt' : 'Contact' },
  ];

  const isCurrentPage = (path: string) => {
    return pathname === path || pathname === path + '/';
  };

  const testPortfolioSpecifically = () => {
    const portfolioPath = `/${lang}/portfolio`;
    const isPortfolioActive = pathname === portfolioPath || pathname === portfolioPath + '/';
    return {
      path: portfolioPath,
      isActive: isPortfolioActive,
      status: isPortfolioActive ? 'PASS' : 'READY'
    };
  };

  const portfolioTest = testPortfolioSpecifically();

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-bg-secondary/95 backdrop-blur-md rounded-xl border border-accent-primary/20 p-4 max-w-sm">
      <h3 className="text-text-primary font-bold mb-3 flex items-center gap-2">
        <ExternalLink className="w-4 h-4" />
        Navigation Test
      </h3>
      
      <div className="space-y-2">
        {testRoutes.map((route) => (
          <div key={route.path} className="flex items-center justify-between">
            <Link
              href={route.path}
              className={`text-sm transition-colors duration-200 ${
                isCurrentPage(route.path)
                  ? 'text-accent-primary font-semibold'
                  : 'text-text-secondary hover:text-accent-primary'
              }`}
            >
              {route.label}
            </Link>
            {isCurrentPage(route.path) ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <div className="w-4 h-4 rounded-full border border-text-secondary/30" />
            )}
          </div>
        ))}
      </div>
      
      {/* Portfolio Specific Test */}
      <div className="mt-4 pt-3 border-t border-accent-primary/20">
        <div className="text-xs text-text-secondary mb-2">Portfolio Test:</div>
        <div className="flex items-center justify-between">
          <Link
            href={portfolioTest.path}
            className="text-sm text-accent-primary hover:text-accent-secondary"
          >
            Portfolio Page
          </Link>
          <div className={`text-xs px-2 py-1 rounded ${
            portfolioTest.status === 'PASS' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-blue-500/20 text-blue-400'
          }`}>
            {portfolioTest.status}
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-accent-primary/20">
        <div className="text-xs text-text-secondary">
          Current: <span className="text-accent-primary">{pathname}</span>
        </div>
        <div className="text-xs text-text-secondary mt-1">
          Lang: <span className="text-accent-primary">{lang}</span>
        </div>
      </div>
    </div>
  );
}