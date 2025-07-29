'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/getDictionary';

interface FooterProps {
  dict: any;
  lang: Locale;
}

export default function Footer({ dict, lang }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscribe failed', error);
    }
  }

  return (
    <footer className="bg-bg-secondary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Expand Matrix</h3>
            <p className="text-text-secondary text-clean">
              {dict?.footer?.description || 'Futuristic AI agency for automating your business.'}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{lang === 'cs' ? 'Rychlé odkazy' : 'Quick links'}</h4>
            <ul className="space-y-2">
              <li>
                <a href={`/${lang}`} className="text-text-secondary hover:text-text-primary transition-colors">
                  {dict.nav.home}
                </a>
              </li>
              <li>
                <a href={lang === 'cs' ? `/${lang}/o-nas` : `/${lang}/about-us`} className="text-text-secondary hover:text-text-primary transition-colors">
                  {dict.nav.about}
                </a>
              </li>
              <li>
                <a href={`/${lang}/services`} className="text-text-secondary hover:text-text-primary transition-colors">
                  {dict.nav.services}
                </a>
              </li>
            </ul>
          </div>

          {/* Important links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{dict.footer?.important || (lang === 'cs' ? 'Důležité odkazy' : 'Important links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href={`/${lang}/blog`} className="text-text-secondary hover:text-text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                  {dict.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                  {dict.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{dict.footer.newsletterTitle}</h4>
            {subscribed ? (
              <p className="text-accent-primary">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={dict.footer.newsletterPlaceholder}
                  className="w-full px-4 py-2 bg-bg-primary border border-accent-primary/30 rounded-md placeholder-text-secondary focus:outline-none focus:border-accent-primary"
                />
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {dict.footer.newsletterCta}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-accent-primary/20 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-clean">
            {dict?.footer?.copyright || '© 2024 Expand Matrix. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
