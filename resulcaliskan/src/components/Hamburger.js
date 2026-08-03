// components/Hamburger.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const mobileTabs = [
  { path: '/', hash: '', label: '</Home>', id: 'home-mobile-tab', className: 'home' },
  { path: '/blog', hash: '', label: '</Blog>', id: 'blog-mobile-tab', className: 'blog' },
];

const Hamburger = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    document.body.classList.remove('stopscrolling');
    document.getElementById('mobiletogglemenu')?.classList.remove('show-toggle-menu');
    document.getElementById('hamburger-button')?.classList.remove('hamburger-open');
    document.getElementById('burger-bar1')?.classList.remove('hamburger-animation1');
    document.getElementById('burger-bar2')?.classList.remove('hamburger-animation2');
    document.getElementById('burger-bar3')?.classList.remove('hamburger-animation3');
  };

  const handleNav = (event, tab) => {
    event.preventDefault();
    closeMenu();

    if (tab.path === '/blog') {
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className="hamburger" id="hamburger" data-aos="fade">
        <div className="hamburgerbase">
          <button id="hamburger-button" tabIndex="0" aria-label="Menu Button">
            <span className="burger-bar" id="burger-bar1"></span>
            <span className="burger-bar" id="burger-bar2"></span>
            <span className="burger-bar" id="burger-bar3"></span>
          </button>
        </div>
      </div>
      <div className="mobiletogglemenu" id="mobiletogglemenu">
        <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
          {mobileTabs.map((tab) => (
            <li key={tab.id} id={tab.id} className={`mobile-navbar-tabs-li ${tab.className}`}>
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
    </>
  );
};

export default Hamburger;
