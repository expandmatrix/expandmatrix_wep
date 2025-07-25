import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/kontakt`;

  return {
    title: 'Kontakt - Expand Matrix',
    description: 'Kontaktujte nás pro konzultaci ohledně AI řešení pro váš business. Jsme tu pro vás.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/kontakt`,
        'en': `${baseUrl}/en/contact`,
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-bg-primary">
      <ContactHero dict={dict} lang={locale} />
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 py-16">
        <ContactForm dict={dict} lang={locale} />
        <ContactInfo dict={dict} lang={locale} />
      </div>
    </main>
  );
}