import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavbarProps } from '../../types';
import { profileData } from '../../data/profileData';

/**
 * StevenNavbar Component
 * Floating pill navbar, language switcher (TR/EN), and mobile drawer.
 */
export const StevenNavbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { label: t('nav_projects'), path: '/projeler' },
    { label: t('nav_blog'), path: '/blog' },
  ];

  return (
    <header className="steven-navbar-header">
      <nav className="steven-navbar-container">
        {/* Left Slot: Avatar on non-home pages */}
        <div className="navbar-left-avatar-container">
          {!isHomePage && (
            <Link to="/" className="navbar-avatar-link" aria-label="Home page link">
              <img
                src={profileData.avatar.src}
                alt={profileData.avatar.alt}
                className="navbar-avatar-img"
              />
            </Link>
          )}
        </div>

        {/* Desktop Navigation Pill */}
        <div className="steven-nav-pill-wrapper">
          <ul className="steven-nav-pill">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`steven-nav-item ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="lang-switcher">
            <button
              onClick={() => changeLanguage('tr')}
              className={`lang-btn ${i18n.language === 'tr' ? 'active' : ''}`}
            >
              TR
            </button>
            <span className="lang-divider">/</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-nav-toggle-wrapper">
          <button
            onClick={toggleMenu}
            className="mobile-hamburger-btn"
            aria-label="Toggle navigation menu"
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <path
                fill="transparent"
                strokeWidth="2"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
              />
              <path
                fill="transparent"
                strokeWidth="2"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                opacity={isOpen ? "0" : "1"}
              />
              <path
                fill="transparent"
                strokeWidth="2"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="mobile-menu-overlay">
            <ul className="mobile-menu-list">
              {navItems.map((item) => (
                <li key={item.path} className="mobile-menu-item">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="mobile-menu-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-menu-item lang-switcher-mobile">
                <button
                  onClick={() => { changeLanguage('tr'); setIsOpen(false); }}
                  className={`lang-btn ${i18n.language === 'tr' ? 'active' : ''}`}
                >
                  TR
                </button>
                <span>/</span>
                <button
                  onClick={() => { changeLanguage('en'); setIsOpen(false); }}
                  className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                >
                  EN
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
