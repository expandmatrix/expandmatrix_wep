import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import VPSClient from '@/components/vps/VPSClient';

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
  const currentUrl = `${baseUrl}/${locale}/vps`;

  return {
    title: dict.vps?.metadata?.title || 'VPS Hosting - Expand Matrix',
    description: dict.vps?.metadata?.description || 'Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/vps`,
        'en': `${baseUrl}/en/vps`,
      },
    },
    openGraph: {
      title: dict.vps?.metadata?.title || 'VPS Hosting - Expand Matrix',
      description: dict.vps?.metadata?.description || 'Vysokovýkonné VPS servery pro vaše AI aplikace a web projekty.',
      url: currentUrl,
      siteName: 'Expand Matrix',
      images: [`${baseUrl}/og-vps.jpg`],
      locale: locale,
      type: 'website',
    },
  };
}

export default async function VPSPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return <VPSClient lang={locale} dict={dict} />;
}