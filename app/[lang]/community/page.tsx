import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import CommunityHero from '@/components/community/CommunityHero';
import FreeCommunitySection from '@/components/community/FreeCommunitySection';
import PremiumCommunitySection from '@/components/community/PremiumCommunitySection';
import FAQAccordion from '@/components/community/FAQAccordion';

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
  const dict = await getDictionary(locale);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  const currentUrl = `${baseUrl}/${locale}/community`;

  return {
    title: `${dict.community.title} - Expand Matrix`,
    description: dict.community.description,
    keywords: dict.community.keywords,
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/komunita`,
        'en': `${baseUrl}/en/community`,
      },
    },
    openGraph: {
      title: `${dict.community.title} - Expand Matrix`,
      description: dict.community.description,
      url: currentUrl,
      siteName: 'Expand Matrix',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.community.title} - Expand Matrix`,
      description: dict.community.description,
    },
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  // Schema.org structured data for Community
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Expand Matrix Community",
    "url": `https://expandmatrix.com/${locale}/community`,
    "description": dict.community.description,
    "parentOrganization": {
      "@type": "Organization",
      "name": "Expand Matrix"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Discord Community",
        "url": "https://discord.gg/expandmatrix"
      },
      {
        "@type": "Organization", 
        "name": "LinkedIn Community",
        "url": "https://linkedin.com/company/expandmatrix"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <CommunityHero dict={dict} />
        <FreeCommunitySection dict={dict} />
        <PremiumCommunitySection dict={dict} />
        <FAQAccordion dict={dict} />
      </div>
    </>
  );
}