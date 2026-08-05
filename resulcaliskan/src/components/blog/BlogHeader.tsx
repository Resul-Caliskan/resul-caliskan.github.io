import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BlogPostMeta } from '../../types/blogTypes';
import { profileData } from '../../data/profileData';

interface BlogHeaderProps {
  post: BlogPostMeta;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ post }) => {
  const { t } = useTranslation();

  return (
    <header className="blog-detail-header">
      <Link to="/blog" className="blog-back-link">
        <span className="blog-back-arrow">←</span> {t('back_to_blog')}
      </Link>

      <h1 className="blog-detail-title">{post.title}</h1>

      {post.description && <p className="blog-detail-desc">{post.description}</p>}

      <div className="blog-detail-meta-row">
        <div className="blog-author-info">
          <img
            src={profileData.avatar.src}
            alt={post.author}
            className="blog-author-avatar"
          />
          <span className="blog-author-name">{post.author}</span>
        </div>

        <div className="blog-meta-divider">•</div>

        <time className="blog-meta-date" dateTime={post.date}>
          {post.date}
        </time>

        <div className="blog-meta-divider">•</div>

        <span className="blog-reading-time">{post.readingTime}</span>
      </div>
    </header>
  );
};
