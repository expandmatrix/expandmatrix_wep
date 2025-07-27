'use client';

import { Suspense, lazy } from 'react';
import type { Locale } from '@/lib/getDictionary';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy loading pro lepší performance
const PortfolioHero = lazy(() => import('./PortfolioHero'));
const CaseStudies = lazy(() => import('./CaseStudies'));
const ClientShowcase = lazy(() => import('./ClientShowcase'));
const SuccessMetrics = lazy(() => import('./SuccessMetrics'));
const PortfolioCTA = lazy(() => import('./PortfolioCTA'));

interface PortfolioClientProps {
  dict: any;
  lang: Locale;
}

// Optimalizovaný loading fallback
function SectionFallback({ height = "h-64" }: { height?: string }) {
  return (
    <div className={`${height} bg-bg-primary flex items-center justify-center`}>
      <LoadingSpinner size="lg" />
    </div>
  );
}

export default function PortfolioClient({ dict, lang }: PortfolioClientProps) {
  return (
    <main className="min-h-screen bg-bg-primary" role="main" aria-label="Portfolio content">
      {/* Hero Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-screen" />}>
        <Suspense fallback={<SectionFallback height="h-screen" />}>
          <PortfolioHero dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Case Studies Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-96" />}>
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <CaseStudies dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Client Showcase Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-96" />}>
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <ClientShowcase dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Success Metrics Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-96" />}>
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <SuccessMetrics dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Portfolio CTA Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-96" />}>
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <PortfolioCTA dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
