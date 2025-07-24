'use client';

import { Dictionary } from '@/lib/getDictionary';

interface HomeClientProps {
  dict: Dictionary;
  lang: string;
}

export default function HomeClient({ dict, lang }: HomeClientProps) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            {dict.home?.title || 'ExpandMatrix'}
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            {dict.home?.description || 'We specialize in web development and AI solutions'}
          </p>
          <button className="bg-accent-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors">
            {dict.home?.cta || 'Get Started'}
          </button>
        </div>
      </div>
    </div>
  );
}
