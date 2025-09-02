import { getDictionary, isValidLocale, type Locale } from '@/lib/getDictionary';
import { getArticleBySlug, getBlogArticles, getCategoryBySlug, getBlogCategories } from '@/lib/blogApi';
import type { Metadata } from 'next';
import ArticleContent from '@/components/blog/ArticleContent';
import BlogContent from '@/components/blog/BlogContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const [articles, categories] = await Promise.all([
    getBlogArticles(),
    getBlogCategories('cs'), // Použijeme češtinu pro generování statických parametrů
  ]);

  const articleParams = articles.flatMap((article) => [
    { lang: 'cs', slug: article.slug },
    { lang: 'en', slug: article.slug },
  ]);

  const categoryParams = categories
    .filter((cat) => cat.isActive)
    .flatMap((category) => [
      { lang: 'cs', slug: category.slug },
      { lang: 'en', slug: category.slug },
    ]);

  return [...articleParams, ...categoryParams];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = isValidLocale(lang) ? lang : 'cs';
  const category = await getCategoryBySlug(slug, locale);
  const article = category ? null : await getArticleBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://expandmatrix.com';

  if (category) {
    return {
      title: `${category.name[locale]} - Blog - Expand Matrix`,
      description: category.description[locale],
      alternates: {
        canonical: `${baseUrl}/${locale}/blog/${category.slug}`,
        languages: {
          cs: `${baseUrl}/cs/blog/${category.slug}`,
          en: `${baseUrl}/en/blog/${category.slug}`,
        },
      },
    };
  }

  if (!article) return {};

  return {
    title: `${article.title[locale]} - Expand Matrix`,
    description: article.excerpt[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${article.slug}`,
      languages: {
        cs: `${baseUrl}/cs/blog/${article.slug}`,
        en: `${baseUrl}/en/blog/${article.slug}`,
      },
    },
  };
}

export default async function ArticleOrCategoryPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'cs';

  const category = await getCategoryBySlug(slug, locale);
  if (category) {
    const dict = await getDictionary(locale);
    const [categories, articles] = await Promise.all([
      getBlogCategories(locale),
      getBlogArticles(category.slug),
    ]);

    return (
      <BlogContent
        lang={locale}
        dict={dict}
        initialCategory={category}
        articles={articles}
        categories={categories}
      />
    );
  }

  const article = await getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  return <ArticleContent article={article!} lang={locale} />;
}
