'use client';

import { Dictionary } from '@/lib/getDictionary';

interface AboutClientProps {
  dict: Dictionary;
  lang: string;
}

export default function AboutClient({ dict, lang }: AboutClientProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {dict.about?.title || 'About Us'}
        </h1>
        <p className="text-xl text-text-secondary text-center">
          {dict.about?.description || 'We are a team of experts'}
        </p>
      </div>
    </div>
  );
}
