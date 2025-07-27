import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import { blogCategories } from '@/lib/blogData';
import type { Metadata } from 'next';
import BlogContent from '@/components/blog/BlogContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = Object.keys(blogCategories.cs);
  const params = [];
  
  for (const lang of ['cs', 'en']) {
    for (const category of categories) {
      params.push({ lang, category });
    }
  }
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang, category } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  
  if (!blogCategories[locale][category as keyof typeof blogCategories[typeof locale]]) {
    return {};
  }

  const categoryName = blogCategories[locale][category as keyof typeof blogCategories[typeof locale]];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  
  return {
    title: `${categoryName} - Blog - Expand Matrix`,
    description: locale === 'cs' 
      ? `Všechny články v kategorii ${categoryName}. Praktické návody a case studies.`
      : `All articles in ${categoryName} category. Practical guides and case studies.`,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${category}`,
      languages: {
        'cs': `${baseUrl}/cs/blog/${category}`,
        'en': `${baseUrl}/en/blog/${category}`,
      },
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { lang, category } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  
  if (!blogCategories[locale][category as keyof typeof blogCategories[typeof locale]]) {
    notFound();
  }

  return <BlogContent lang={locale} dict={dict} initialCategory={category} />;
}