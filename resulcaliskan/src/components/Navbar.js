import React, { useEffect, useState } from 'react';
import avatar from '../png/avatar.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { path: '/', hash: '', label: '</Home>', delay: 100 },
  { path: '/#projects', hash: 'projects', label: '</Projeler>', delay: 150 },
  { path: '/blog', hash: '', label: '</Blog>', delay: 200 },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (location.pathname.startsWith('/blog')) {
      setActiveTab('/blog');
    } else if (location.hash === '#projects') {
      setActiveTab('projects');
    } else {
      setActiveTab('home');
    }
  }, [location.pathname, location.hash]);

  const isActive = (tab) => {
    if (tab.path === '/blog') return activeTab === '/blog';
    if (tab.hash === 'projects') return activeTab === 'projects';
    return activeTab === 'home';
  };

  const handleNav = (event, tab) => {
    event.preventDefault();

    if (tab.path === '/blog') {
      setActiveTab('/blog');
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab.hash === 'projects') {
      setActiveTab('projects');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const elem = document.getElementById('projects');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const elem = document.getElementById('projects');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setActiveTab('home');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="navbar" id="navbar">
      <div className="hey">Hey!</div>
      <Link
        to="/"
        className="logo"
        tabIndex="0"
        aria-label="home logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="logo-top">
          <img src={avatar} alt="animation-head" id="nav-avatar" />
        </div>
      </Link>
      <div className="navbar-tabs" id="navbar-tabs">
        <ul className="navbar-tabs-ul">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              className={`navbar-tabs-li ${isActive(tab) ? 'activeThistab' : ''}`}
              data-aos="fade-down"
              data-aos-delay={tab.delay}
            >
              <a
                href={tab.path}
                tabIndex="0"
                aria-label={`${tab.label} menu button`}
                onClick={(event) => handleNav(event, tab)}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
