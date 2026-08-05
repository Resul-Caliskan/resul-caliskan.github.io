import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogRepository } from '../services/blogRepository';
import { BlogHeader } from '../components/blog/BlogHeader';
import { TableOfContents } from '../components/blog/TableOfContents';
import { BlogContentRenderer } from '../components/blog/BlogContentRenderer';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const post = slug ? blogRepository.getPostBySlug(slug, i18n.language) : undefined;

  if (!post) {
    return (
      <main className="steven-main-layout">
        <div className="steven-content-wrapper">
          <h1 className="profile-headline">{t('post_not_found')}</h1>
          <p className="profile-bio-paragraph">
            {t('post_not_found_desc')}
          </p>
          <Link to="/blog" className="blog-back-link">
            ← {t('back_to_all_posts')}
          </Link>
        </div>
      </main>
    );
  }

  return (
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
            ← {t('back_to_all_posts')}
          </Link>
        </footer>
      </div>
    </main>
  );
};
