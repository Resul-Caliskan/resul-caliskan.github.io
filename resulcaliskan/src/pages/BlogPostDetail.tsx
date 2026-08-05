import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft } from 'react-icons/fi';
import { blogRepository } from '../services/blogRepository';
import { BlogHeader } from '../components/blog/BlogHeader';
import { TableOfContents } from '../components/blog/TableOfContents';
import { BlogContentRenderer } from '../components/blog/BlogContentRenderer';
import { SEO } from '../components/common/SEO';

const ArrowLeftIcon = FiArrowLeft as any;

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const post = slug ? blogRepository.getPostBySlug(slug, i18n.language) : undefined;

  if (!post) {
    return (
      <main className="steven-main-layout">
        <div className="steven-content-wrapper">
          <h1 className="profile-headline">{t('post_not_found')}</h1>
          <p className="profile-bio-paragraph">{t('post_not_found_desc')}</p>
          <Link to="/blog" className="blog-back-link">
            <ArrowLeftIcon className="blog-back-arrow-icon" /> {t('back_to_all_posts')}
          </Link>
        </div>
      </main>
    );
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://resul-caliskan.github.io',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://resul-caliskan.github.io/blog/${post.slug}`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Resul Çalışkan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://resul-caliskan.github.io/me.png',
      },
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        publishedDate={post.date}
        authorName={post.author}
        lang={i18n.language}
        schemaData={blogPostingSchema}
      />
      <main className="blog-detail-layout">
        <div className="blog-detail-container">
          <BlogHeader post={post} />

          <div className="blog-detail-body-wrapper">
            {post.toc.length > 0 && (
              <aside className="blog-sidebar-toc">
                <TableOfContents toc={post.toc} />
              </aside>
            )}

            <div className="blog-main-content-column">
              <BlogContentRenderer content={post.content} />
            </div>
          </div>

          <footer className="blog-detail-footer">
            <Link to="/blog" className="blog-back-link">
              <ArrowLeftIcon className="blog-back-arrow-icon" /> {t('back_to_all_posts')}
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
};
