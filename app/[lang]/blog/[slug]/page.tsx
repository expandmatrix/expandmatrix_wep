import { isValidLocale, type Locale } from '@/lib/getDictionary';
import { getArticleBySlug, getBlogArticles } from '@/lib/blogApi';
import type { Metadata } from 'next';
import ArticleContent from '@/components/blog/ArticleContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  return articles.flatMap(article => [{ lang: 'cs', slug: article.slug }, { lang: 'en', slug: article.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const article = await getArticleBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';

  if (!article) return {};

  return {
    title: `${article.title[locale]} - Expand Matrix`,
    description: article.excerpt[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${article.slug}`,
      languages: {
        'cs': `${baseUrl}/cs/blog/${article.slug}`,
        'en': `${baseUrl}/en/blog/${article.slug}`,
      },
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleContent article={article!} lang={locale} />;
}
