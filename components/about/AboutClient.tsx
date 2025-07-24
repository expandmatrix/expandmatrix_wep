'use client';

import { Suspense } from 'react';
import AboutHero from './AboutHero';
import AboutStats from './AboutStats';
import AboutStory from './AboutStory';
import AboutTeam from './AboutTeam';
import AboutValues from './AboutValues';
import AboutCTA from './AboutCTA';

interface AboutClientProps {
  dict: any;
  lang: 'cs' | 'en';
}

export default function AboutClient({ dict, lang }: AboutClientProps) {
  return (
    <div className="relative overflow-hidden">
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <AboutHero dict={dict} lang={lang} />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-bg-primary" />}>
        <AboutStats dict={dict} lang={lang} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <AboutStory dict={dict} lang={lang} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <AboutTeam dict={dict} lang={lang} />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <AboutValues dict={dict} lang={lang} />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-bg-primary" />}>
        <AboutCTA dict={dict} lang={lang} />
      </Suspense>
    </div>
  );
}
