import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import { getBlogCategories, getBlogArticles } from '@/lib/blogApi';
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
  const dict = await getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  
  return {
    title: `Blog - Expand Matrix`,
    description: dict.home?.description || 'Nejnovější články o AI a automatizaci',
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
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
  
  // Načteme data na serveru
  const [categories, articles] = await Promise.all([
    getBlogCategories(locale),
    getBlogArticles()
  ]);

  return (
    <BlogContent 
      lang={locale} 
      dict={dict} 
      initialCategory={null}
      articles={articles}
      categories={categories}
    />
  );
}
