'use client';

import { Dictionary } from '@/lib/getDictionary';

interface VPSClientProps {
  dict: Dictionary;
  lang: string;
}

export default function VPSClient({ dict, lang }: VPSClientProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {dict.vps?.title || 'VPS Servers'}
        </h1>
        <p className="text-xl text-text-secondary text-center">
          {dict.vps?.description || 'Powerful VPS solutions'}
        </p>
      </div>
    </div>
  );
}
