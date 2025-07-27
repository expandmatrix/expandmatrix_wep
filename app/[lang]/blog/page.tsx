import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import BlogContent from '@/components/blog/BlogContent';

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
  const currentUrl = `${baseUrl}/${locale}/blog`;

  return {
    title: locale === 'cs' ? 'Blog - Expand Matrix' : 'Blog - Expand Matrix',
    description: locale === 'cs' 
      ? 'Objevte nejnovější trendy v AI, automatizaci a technologiích.'
      : 'Discover the latest trends in AI, automation, and technology.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'cs': `${baseUrl}/cs/blog`,
        'en': `${baseUrl}/en/blog`,
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);

  return <BlogContent lang={locale} dict={dict} />;
}
