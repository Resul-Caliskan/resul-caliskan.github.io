// src/pages/Post.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { getPostBySlug } from '../posts';
import avatar from '../png/avatar.png';

function estimateReadMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    setProgress(0);

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

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector('.post-article');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading, post.content]);

  const formattedDate = post.data.date
    ? new Date(post.data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const readMinutes = post.content ? estimateReadMinutes(post.content) : 0;

  return (
    <div className="post-page">
      <div className="post-progress" aria-hidden="true">
        <div className="post-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="post-page-inner">
        <nav className="post-nav">
          <Link to="/blog" className="post-back">
            <svg width="16" height="16" viewBox="0 0 13 10" fill="none" aria-hidden="true">
              <path d="M12,5 L2,5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polyline points="5 1 1 5 5 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All posts
          </Link>
        </nav>

        {loading ? (
          <p className="blog-status">Loading...</p>
        ) : notFound ? (
          <div className="post-not-found">
            <h1 className="post-title">Post not found</h1>
            <p className="post-lede">This article doesn&apos;t exist or was moved.</p>
            <Link to="/blog" className="post-footer-link">Back to blog</Link>
          </div>
        ) : (
          <article className="post-article">
            <div className="post-hero">
              <div className="post-meta-row">
                {formattedDate && <time dateTime={post.data.date}>{formattedDate}</time>}
                <span aria-hidden="true">·</span>
                <span>{readMinutes} min read</span>
              </div>

              <h1 className="post-title">{post.data.title}</h1>

              {post.data.description && (
                <p className="post-lede">{post.data.description}</p>
              )}

              <div className="post-byline">
                <img src={avatar} alt="" className="post-avatar" />
                <div className="post-byline-text">
                  <span className="post-byline-name">{post.data.author || 'Resul Çalışkan'}</span>
                  <span className="post-byline-meta">Software Developer</span>
                </div>
              </div>
            </div>

            <div className="post-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <footer className="post-footer">
              <p className="post-footer-note">Thanks for reading.</p>
              <Link to="/blog" className="post-footer-link">
                More posts
                <svg viewBox="0 0 13 10" width="14" height="10" aria-hidden="true">
                  <path d="M1,5 L11,5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                  <polyline points="8 1 12 5 8 9" stroke="currentColor" fill="none" strokeWidth="1.5" />
                </svg>
              </Link>
            </footer>
          </article>
        )}
      </div>
    </div>
  );
};

export default Post;
