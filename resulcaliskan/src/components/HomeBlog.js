import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostList from './PostList';

const HomeBlog = () => {
  const { posts, loading } = usePosts();

  return (
    <section className="home-blog-section" id="posts">
      <div className="home-blog-inner">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex="0" aria-label="Blog posts">
            &#60;/Blog&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <p className="blog-intro" data-aos="fade-up">
          Notes on software, tech, and building things.
        </p>

        <PostList posts={posts} loading={loading} />

        {!loading && posts.length > 0 && (
          <div className="home-blog-more" data-aos="fade-up">
            <Link to="/blog" className="cta">
              <span>All posts</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBlog;
