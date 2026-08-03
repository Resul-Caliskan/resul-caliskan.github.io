// src/pages/Post.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { getPostBySlug } from '../posts';
import avatar from '../png/avatar.png';

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

  const formattedDate = post.data.date
    ? new Date(post.data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <div className="post-page">
      <div className="post-page-glow" aria-hidden="true" />

      <div className="post-page-inner">
        <nav className="post-nav" data-aos="fade-down">
          <Link to="/blog" className="post-back">
            <svg width="18" height="18" viewBox="0 0 13 10" fill="none" aria-hidden="true">
              <path d="M12,5 L2,5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polyline points="5 1 1 5 5 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Blog</span>
          </Link>
        </nav>

        {loading ? (
          <p className="blog-status">Loading...</p>
        ) : notFound ? (
          <div className="post-not-found" data-aos="fade-up">
            <h1 className="post-title">Post not found</h1>
            <p className="post-lede">This article doesn&apos;t exist or was moved.</p>
            <Link to="/blog" className="cta">
              <span>All posts</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        ) : (
          <article className="post-article">
            <div className="post-hero" data-aos="fade-up">
              <h1 className="post-title">{post.data.title}</h1>
              {post.data.description && (
                <p className="post-lede">{post.data.description}</p>
              )}

              <div className="post-byline">
                <img src={avatar} alt="" className="post-avatar" />
                <div className="post-byline-text">
                  <span className="post-byline-name">{post.data.author || 'Resul Çalışkan'}</span>
                  <span className="post-byline-meta">
                    {formattedDate}
                    {formattedDate && ' · '}
                    Software Developer
                  </span>
                </div>
              </div>
            </div>

            <div className="post-rule" data-aos="fade-up" data-aos-delay="80" />

            <div className="post-content" data-aos="fade-up" data-aos-delay="120">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="post-footer" data-aos="fade-up">
              <div className="post-rule" />
              <p className="post-footer-note">Thanks for reading.</p>
              <Link to="/blog" className="cta">
                <span>More posts</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </Link>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default Post;
