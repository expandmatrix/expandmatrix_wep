'use client';

import type { Locale } from '@/lib/getDictionary';

interface VPSFinalCTAProps {
  lang: Locale;
}

export default function VPSFinalCTA({ lang }: VPSFinalCTAProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-text-primary mb-6">
          {lang === 'cs' ? 'Připraveni začít?' : 'Ready to get started?'}
        </h2>
        <p className="text-xl text-text-secondary mb-8">
          {lang === 'cs' 
            ? 'Váš VPS server bude připraven během 15 minut.'
            : 'Your VPS server will be ready within 15 minutes.'
          }
        </p>
        <button className="bg-accent-primary text-bg-primary font-bold text-lg px-12 py-4 rounded-full">
          {lang === 'cs' ? 'Kontaktovat nás' : 'Contact Us'}
        </button>
      </div>
    </section>
  );
}