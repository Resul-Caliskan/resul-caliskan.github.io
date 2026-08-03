// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import { posts as postIndex } from '../posts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      postIndex.map((postInfo) =>
        fetch(postInfo.path)
          .then((response) => response.text())
          .then((text) => {
            const { data } = matter(text);
            return {
              title: data.title || postInfo.slug,
              date: data.date || '',
              author: data.author || '',
              description: data.description || '',
              slug: postInfo.slug,
            };
          })
      )
    )
      .then((allPosts) => {
        allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(allPosts);
      })
      .finally(() => setLoading(false));
  }, []);

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

        {loading ? (
          <p className="blog-status">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="blog-status">No posts yet.</p>
        ) : (
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
                      {new Date(post.date).toLocaleDateString('tr-TR', {
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
                <Link to={`/blog/${post.slug}`} className="cta blog-read-cta" aria-label={`Read ${post.title}`}>
                  <span>Read</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
