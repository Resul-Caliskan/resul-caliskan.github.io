// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollHandler from './components/ScrollHandler';
import Projects from './pages/Projects.js';
import Blog from './pages/Blog.js';
import Post from './pages/Post.js';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="body">
      <Head />
      {isLoading ? <Preloader /> : (
        <Router>
          <ScrollHandler />
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
