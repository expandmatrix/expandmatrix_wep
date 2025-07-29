'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Locale } from '@/lib/getDictionary';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Dynamically load components for better performance
const Hero = dynamic(() => import('./Hero'));
const PartnersSection = dynamic(() => import('./PartnersSection'));
const Stats = dynamic(() => import('./Stats'));
const Services = dynamic(() => import('./Services'));
const Testimonials = dynamic(() => import('./Testimonials'));
const FinalCTA = dynamic(() => import('./FinalCTA'));

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
