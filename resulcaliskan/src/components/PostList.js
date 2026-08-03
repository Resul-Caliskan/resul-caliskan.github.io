import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, loading }) => {
  if (loading) {
    return <p className="blog-status">Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p className="blog-status">No posts yet.</p>;
  }

  return (
    <div className="blog-posts-list">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className={`blog-post-card${index === 0 ? ' blog-post-card--featured' : ''}`}
          data-aos="fade-up"
          data-aos-delay={index * 80}
        >
          <div className="blog-post-index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="blog-post-body">
            <div className="blog-post-meta">
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              )}
              {post.author && <span className="blog-post-author">{post.author}</span>}
            </div>
            <h2 className="blog-post-title">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.description && (
              <p className="blog-post-description">{post.description}</p>
            )}
            <Link
              to={`/blog/${post.slug}`}
              className="blog-read-link"
              aria-label={`Read ${post.title}`}
            >
              Read article
              <svg viewBox="0 0 13 10" height="10" width="14" aria-hidden="true">
                <path d="M1,5 L11,5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <polyline points="8 1 12 5 8 9" stroke="currentColor" fill="none" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostList;
