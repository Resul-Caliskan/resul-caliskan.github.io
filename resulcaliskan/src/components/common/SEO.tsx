import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedDate?: string;
  authorName?: string;
  lang?: string;
  schemaData?: Record<string, any>;
}

const SITE_NAME = 'Resul Çalışkan';
const BASE_URL = 'https://resul-caliskan.github.io';
const DEFAULT_IMAGE = `${BASE_URL}/me.png`;
const DEFAULT_DESC = 'Resul Çalışkan - Software Developer, Builder, Tech Enthusiast. Personal website, projects, and articles on software engineering & conceptual design.';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESC,
  keywords = ['Resul Çalışkan', 'Software Developer', 'Yazılım Geliştirici', 'React', 'TypeScript', 'Blog'],
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  publishedDate,
  authorName = SITE_NAME,
  lang = 'tr',
  schemaData,
}) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Software Developer`;
  const fullUrl = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;

  return (
    <Helmet>
      {/* Basic HTML Metadata */}
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={authorName} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate Language Tags */}
      <link rel="alternate" hrefLang="tr" href={fullUrl} />
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'tr_TR'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article Specific Metadata */}
      {ogType === 'article' && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {ogType === 'article' && authorName && (
        <meta property="article:author" content={authorName} />
      )}

      {/* JSON-LD Structured Data for Google Rich Snippets */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};
