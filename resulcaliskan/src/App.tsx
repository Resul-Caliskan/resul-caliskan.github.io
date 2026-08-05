import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StevenNavbar } from './components/steven/StevenNavbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { profileData } from './data/profileData';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <StevenNavbar navItems={profileData.navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
