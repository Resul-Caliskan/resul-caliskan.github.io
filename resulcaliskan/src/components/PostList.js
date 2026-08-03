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
          className="blog-post-card"
          data-aos="fade-up"
          data-aos-delay={index * 80}
        >
          <div className="blog-post-meta">
            {post.date && (
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
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
            className="cta blog-read-cta"
            aria-label={`Read ${post.title}`}
          >
            <span>Read</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostList;
