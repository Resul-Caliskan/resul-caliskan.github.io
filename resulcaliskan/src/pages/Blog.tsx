import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogRepository } from '../services/blogRepository';

export const Blog: React.FC = () => {
  const { t } = useTranslation();
  const posts = blogRepository.getAllPosts();

  return (
    <main className="steven-main-layout">
      <div className="steven-content-wrapper">
        <header className="blog-list-header">
          <h1 className="profile-headline">{t('blog_title')}</h1>
          <p className="profile-bio-paragraph">
            {t('blog_desc')}
          </p>
        </header>

        <section className="blog-posts-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-meta">
                  <time className="blog-card-date" dateTime={post.date}>
                    {post.date}
                  </time>
                  <span className="blog-card-reading-time">• {post.readingTime}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-desc">{post.description}</p>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};
