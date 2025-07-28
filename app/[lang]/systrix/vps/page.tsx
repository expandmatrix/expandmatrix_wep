import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import { VPSContent } from '@/components/vps/VPSContent';

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
  const currentUrl = `${baseUrl}/systrix/vps`;

  return {
    title: dict.vps?.metadata?.title || 'VPS Hosting - High-Performance Servers | Expand Matrix',
    description: dict.vps?.metadata?.description || 'High-performance VPS servers for your AI applications and web projects.',
    alternates: {
      canonical: currentUrl,
      languages: {
        cs: `${baseUrl}/cs/systrix/vps`,
        en: `${baseUrl}/en/systrix/vps`,
      },
    },
    openGraph: {
      title: dict.vps?.metadata?.title || 'VPS Hosting - High-Performance Servers',
      description: dict.vps?.metadata?.description || 'High-performance VPS servers for your AI applications and web projects.',
      url: currentUrl,
      siteName: 'Expand Matrix',
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

  return <VPSContent lang={locale} dict={dict} />;
}
