import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-8xl font-black text-accent-primary mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-dark mx-auto rounded-full" />
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Stránka nebyla nalezena
        </h2>
        <p className="text-text-secondary mb-8">
          Omlouváme se, ale stránka kterou hledáte neexistuje nebo byla přesunuta.
        </p>

        {/* Action Buttons */}
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

        {/* Help Text */}
        <p className="text-sm text-text-secondary mt-8">
          Pokud si myslíte, že se jedná o chybu, kontaktujte nás prosím.
        </p>
      </div>
    </div>
  );
}