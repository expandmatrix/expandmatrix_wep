import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import { getBlogCategories, getCategoryBySlug, getBlogArticles } from '@/lib/blogApi';
import type { Metadata } from 'next';
import BlogContent from '@/components/blog/BlogContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = await getBlogCategories('cs'); // Použijeme češtinu pro generování statických parametrů
  const params = [];
  
  for (const lang of ['cs', 'en']) {
    for (const category of categories) {
      if (category.isActive) {
        params.push({ lang, category: category.slug });
      }
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
  
  const categoryData = await getCategoryBySlug(category, locale);
  if (!categoryData) {
    return {};
  }

  const categoryName = categoryData.name[locale];
  const categoryDesc = categoryData.description[locale];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';
  
  return {
    title: `${categoryName} - Blog - Expand Matrix`,
    description: categoryDesc,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/category/${category}`,
      languages: {
        'cs': `${baseUrl}/cs/blog/category/${category}`,
        'en': `${baseUrl}/en/blog/category/${category}`,
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
  
  const categoryData = await getCategoryBySlug(category, locale);
  if (!categoryData || !categoryData.isActive) {
    notFound();
  }

  // Načteme data na serveru
  const [categories, articles] = await Promise.all([
    getBlogCategories(locale),
    getBlogArticles(category)
  ]);

  return (
    <BlogContent 
      lang={locale} 
      dict={dict} 
      initialCategory={categoryData}
      articles={articles}
      categories={categories}
    />
  );
}
