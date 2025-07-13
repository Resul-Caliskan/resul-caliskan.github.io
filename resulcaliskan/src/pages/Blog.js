// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import { posts as postIndex } from '../posts'; // Yazı index'ini import et

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all(
      postIndex.map(postInfo =>
        fetch(postInfo.path)
          .then(response => response.text())
          .then(text => {
            const { data } = matter(text);
            return { ...data, slug: postInfo.slug }; // slug'ı da ekle
          })
      )
    ).then(allPosts => {
      // Yazıları tarihe göre sırala (en yeni en üstte)
      allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(allPosts);
    });
  }, []);

  return (
    <div style={{ padding: '50px', color: 'white' }}>
      <h1>Blog</h1>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.slug} style={{ marginBottom: '20px', borderBottom: '1px solid #555', paddingBottom: '20px' }}>
            <h2>
              <Link to={`/blog/${post.slug}`} style={{ color: '#61dafb', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <small>{new Date(post.date).toLocaleDateString()} - {post.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
