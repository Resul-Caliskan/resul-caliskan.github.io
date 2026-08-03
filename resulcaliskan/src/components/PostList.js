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
          className={`blog-post-item${index === 0 ? ' blog-post-item--featured' : ''}`}
        >
          <Link to={`/blog/${post.slug}`} className="blog-post-link">
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
              {post.readMinutes && (
                <>
                  <span className="blog-post-dot" aria-hidden="true">·</span>
                  <span>{post.readMinutes} min read</span>
                </>
              )}
            </div>

            <h2 className="blog-post-title">{post.title}</h2>

            {post.description && (
              <p className="blog-post-description">{post.description}</p>
            )}

            <span className="blog-read-link">
              Read
              <svg viewBox="0 0 13 10" height="10" width="14" aria-hidden="true">
                <path d="M1,5 L11,5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <polyline points="8 1 12 5 8 9" stroke="currentColor" fill="none" strokeWidth="1.5" />
              </svg>
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostList;
