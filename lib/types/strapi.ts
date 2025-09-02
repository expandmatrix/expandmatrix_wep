// Strapi CMS Types

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}

export interface StrapiAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiAuthor extends StrapiAttributes {
  name: string;
  email: string;
  bio?: string;
  avatar?: StrapiMedia;
}

export interface StrapiCategory extends StrapiAttributes {
  name_cat: string;
  is_active: boolean;
  sort_order: number;
  color?: string;
  category_i_18_ns?: {
    id: number;
    locale: string;
    name: string;
    slug: string;
    description?: string;
    is_active: boolean;
    meta_title?: string;
    meta_description?: string;
    og_title?: string;
    og_description?: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface StrapiCategoryI18n extends StrapiAttributes {
  name: string;
  slug: string;
  description?: string;
  locale: string;
  seo_title?: string;
  seo_description?: string;
  meta_keywords?: string;
  category?: {
    data: StrapiEntity<StrapiCategory> | null;
  };
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: StrapiMediaFormat;
      small?: StrapiMediaFormat;
      medium?: StrapiMediaFormat;
      large?: StrapiMediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

export interface StrapiArticle extends StrapiAttributes {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: {
    data: StrapiMedia | null;
  };
  author: {
    data: {
      id: number;
      attributes: StrapiAuthor;
    } | null;
  };
  category: {
    data: {
      id: number;
      attributes: StrapiCategory;
    } | null;
  };
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  reading_time?: number;
  featured?: boolean;
}

export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

// Transformed types for our application
export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: {
    url: string;
    alt?: string;
    width: number;
    height: number;
  };
  author?: {
    id: number;
    name: string;
    email: string;
    bio?: string;
    avatar?: string;
  };
  category?: {
    id: number;
    name: string;
    slug: string;
    description?: string;
    color?: string;
  };
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  readingTime?: number;
  featured?: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryI18n {
  id: number;
  name: string;
  slug: string;
  description?: string;
  locale: string;
  seo_title?: string;
  seo_description?: string;
  meta_keywords?: string;
  createdAt: string;
  updatedAt: string;
}