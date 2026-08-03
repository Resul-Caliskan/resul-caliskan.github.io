// src/pages/Blog.js
import React from 'react';
import { usePosts } from '../hooks/usePosts';
import PostList from '../components/PostList';

const Blog = () => {
  const { posts, loading } = usePosts();

  return (
    <section className="blog-section-container" id="blog">
      <div className="blog-section">
        <div className="section-heading" data-aos="fade-up">
          <h1 className="section-heading-article" tabIndex="0" aria-label="Blog heading">
            &#60;/Blog&#62;
          </h1>
          <p className="sectionHeadingP"></p>
        </div>

        <p className="blog-intro" data-aos="fade-up">
          Thoughts on software, tech, and building things.
        </p>

        <PostList posts={posts} loading={loading} />
      </div>
    </section>
  );
};

export default Blog;
