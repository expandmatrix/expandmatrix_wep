'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-accent-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-2">
            Stránka nenalezena
          </h2>
          <p className="text-text-secondary">
            Omlouváme se, ale stránka kterou hledáte neexistuje.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cs"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent-primary text-bg-primary font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Domovská stránka</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-bg-secondary/50 border border-accent-primary/20 text-text-primary font-semibold rounded-lg hover:border-accent-primary/40 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zpět</span>
          </button>
        </div>
      </div>
    </div>
  );
}
