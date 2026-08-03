import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostList from './PostList';

const HomeBlog = () => {
  const { posts, loading } = usePosts();

  return (
    <section className="home-blog-section" id="posts">
      <div className="home-blog-inner">
        <div className="blog-header">
          <p className="blog-kicker">Writing</p>
          <h2 className="blog-heading">Latest notes</h2>
          <p className="blog-intro">
            Notes on software, tech, and building things.
          </p>
        </div>

        <PostList posts={posts} loading={loading} />

        {!loading && posts.length > 0 && (
          <div className="home-blog-more">
            <Link to="/blog" className="blog-footer-link">
              View all posts
              <svg viewBox="0 0 13 10" width="14" height="10" aria-hidden="true">
                <path d="M1,5 L11,5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <polyline points="8 1 12 5 8 9" stroke="currentColor" fill="none" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBlog;
