'use client';

import { Suspense } from 'react';
import Hero from './Hero';
import PartnersSection from './PartnersSection';
import Stats from './Stats';
import Services from './Services';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import type { Locale } from '@/lib/getDictionary';

interface HomeClientProps {
  dict: any;
  lang: Locale;
}

export default function HomeClient({ dict, lang }: HomeClientProps) {
  return (
    <>
      {/* Hero sekce */}
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <Hero dict={dict} lang={lang} />
      </Suspense>

      {/* Partners sekce */}
      <Suspense fallback={<div className="h-32 bg-bg-primary" />}>
        <PartnersSection dict={dict} lang={lang} />
      </Suspense>

      {/* Stats sekce */}
      <Suspense fallback={<div className="h-64 bg-bg-primary" />}>
        <Stats dict={dict} lang={lang} />
      </Suspense>

      {/* Services sekce */}
      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <Services dict={dict} lang={lang} />
      </Suspense>

      {/* Testimonials sekce */}
      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <Testimonials dict={dict} lang={lang} />
      </Suspense>

      {/* Final CTA sekce */}
      <Suspense fallback={<div className="h-64 bg-bg-primary" />}>
        <FinalCTA dict={dict} lang={lang} />
      </Suspense>
    </>
  );
}
