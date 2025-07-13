// src/pages/Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });

  useEffect(() => {
    try {
      // Dinamik olarak ilgili markdown dosyasını import et
      const file = require(`../posts/${slug}.md`);
      
      // Markdown dosyasının içeriğini fetch et
      fetch(file.default)
        .then(response => response.text())
        .then(text => {
          const { content, data } = matter(text);
          setPost({ content, data });
        });
    } catch (error) {
      console.error("Post not found:", error);
      // İsteğe bağlı: 404 sayfasına yönlendirme yapabilirsiniz.
      setPost({ content: '# 404 - Yazı Bulunamadı', data: {} });
    }
  }, [slug]);

  return (
    <div style={{ padding: '50px', color: 'white', lineHeight: '1.6' }}>
      <h1>{post.data.title}</h1>
      <small>{post.data.date ? new Date(post.data.date).toLocaleDateString() : ''} - {post.data.author}</small>
      <hr style={{ margin: '20px 0' }} />
      <ReactMarkdown children={post.content} />
    </div>
  );
};

export default Post;
