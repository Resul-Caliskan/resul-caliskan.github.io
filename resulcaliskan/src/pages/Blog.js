// src/pages/Blog.js
import React from 'react';
import { usePosts } from '../hooks/usePosts';
import PostList from '../components/PostList';

const Blog = () => {
  const { posts, loading } = usePosts();

  return (
    <section className="blog-section-container" id="blog">
      <div className="blog-section">
        <div className="blog-header">
          <p className="blog-kicker">Writing</p>
          <h1 className="blog-heading">All posts</h1>
          <p className="blog-intro">
            Notes on software, tech, and building things.
          </p>
        </div>

        <PostList posts={posts} loading={loading} />
      </div>
    </section>
  );
};

export default Blog;
