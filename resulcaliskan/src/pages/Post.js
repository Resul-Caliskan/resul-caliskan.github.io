// src/pages/Post.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { getPostBySlug } from '../posts';

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    const postInfo = getPostBySlug(slug);
    if (!postInfo) {
      setNotFound(true);
      setPost({ content: '', data: {} });
      setLoading(false);
      return;
    }

    fetch(postInfo.path)
      .then((response) => {
        if (!response.ok) throw new Error('Post not found');
        return response.text();
      })
      .then((text) => {
        const { content, data } = matter(text);
        setPost({ content, data });
      })
      .catch(() => {
        setNotFound(true);
        setPost({ content: '', data: {} });
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <section className="blog-section-container post-section-container">
      <div className="blog-section post-section">
        <Link to="/blog" className="blog-back-link" data-aos="fade-up">
          ← Back to Blog
        </Link>

        {loading ? (
          <p className="blog-status">Loading...</p>
        ) : notFound ? (
          <div className="post-not-found" data-aos="fade-up">
            <h1 className="section-heading-article">&#60;/404&#62;</h1>
            <p className="blog-status">This post could not be found.</p>
            <Link to="/blog" className="cta">
              <span>All posts</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        ) : (
          <article className="post-article" data-aos="fade-up">
            <header className="post-header">
              <h1 className="post-title">{post.data.title}</h1>
              <div className="blog-post-meta">
                {post.data.date && (
                  <time dateTime={post.data.date}>
                    {new Date(post.data.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}
                {post.data.author && (
                  <span className="blog-post-author">{post.data.author}</span>
                )}
              </div>
            </header>
            <hr className="post-divider" />
            <div className="post-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Post;
