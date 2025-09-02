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
  name: string;
  authors: {
    data: {
      id: number;
      attributes: StrapiAuthor;
    }[] | null;
  };
  article_i_18_ns: {
    data: {
      id: number;
      attributes: StrapiArticleI18n;
    }[] | null;
  };
  categories: {
    data: {
      id: number;
      attributes: StrapiCategory;
    }[] | null;
  };
}

export interface StrapiArticleI18n extends StrapiAttributes {
  lang: 'cs' | 'en';
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image?: {
    data: StrapiMedia | null;
  };
  meta_title?: string;
  meta_description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: {
    data: StrapiMedia | null;
  };
  article: {
    data: {
      id: number;
      attributes: StrapiArticle;
    } | null;
  };
}

export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

// Transformed types for our application
export interface Article {
  id: number;
  name: string;
  authors: {
    id: number;
    name: string;
    email: string;
    bio?: string;
    avatar?: string;
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
    description?: string;
    color?: string;
  }[];
  i18n: {
    [key in 'cs' | 'en']: {
      title: string;
      slug: string;
      excerpt?: string;
      content: string;
      coverImage?: {
        url: string;
        alt?: string;
        width: number;
        height: number;
      };
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        url: string;
        alt?: string;
        width: number;
        height: number;
      };
    };
  };
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