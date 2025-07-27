'use client';

import { Suspense, lazy } from 'react';
import type { Locale } from '@/lib/getDictionary';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load components for better performance
const Hero = lazy(() => import('./Hero'));
const PartnersSection = lazy(() => import('./PartnersSection'));
const Stats = lazy(() => import('./Stats'));
const Services = lazy(() => import('./Services'));
const Testimonials = lazy(() => import('./Testimonials'));
const FinalCTA = lazy(() => import('./FinalCTA'));

interface HomeClientProps {
  dict: any;
  lang: Locale;
}

// Optimized loading fallback component
function SectionFallback({ height = "h-64" }: { height?: string }) {
  return (
    <div className={`${height} bg-bg-primary flex items-center justify-center`}>
      <LoadingSpinner />
    </div>
  );
}

export default function HomeClient({ dict, lang }: HomeClientProps) {
  return (
    <main role="main" aria-label={dict.home?.title || "Home page content"}>
      {/* Hero Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-screen" />}>
        <Suspense fallback={<SectionFallback height="h-screen" />}>
          <Hero dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Partners Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-32" />}>
        <Suspense fallback={<SectionFallback height="h-32" />}>
          <PartnersSection dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Stats Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-64" />}>
        <Suspense fallback={<SectionFallback height="h-64" />}>
          <Stats dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Services Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-96" />}>
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <Services dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Testimonials Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-96" />}>
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <Testimonials dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>

      {/* Final CTA Section */}
      <ErrorBoundary fallback={<SectionFallback height="h-64" />}>
        <Suspense fallback={<SectionFallback height="h-64" />}>
          <FinalCTA dict={dict} lang={lang} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
