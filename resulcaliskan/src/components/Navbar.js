import React, { useState } from 'react';
import avatar from "../png/avatar.png";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const tabs = [
    { id: "/", label: "</Home>", delay: 100, type: 'anchor' },
    { id: "#about", label: "</AboutMe>", delay: 100, type: 'anchor' },
    { id: "#skills", label: "</Skills>", delay: 100, type: 'anchor' },
    { id: "#projects", label: "</Projects>", delay: 100, type: 'anchor' },
    { id: "/blog", label: "</Blog>", delay: 100, type: 'link' },
  ];

  const handleTabClick = (id, type) => {
    if (type === 'link') {
      setActiveTab(id);
    }
  };

  return (
    <div className="navbar" id="navbar">
      <div className="hey">Hey!</div>
      <div className="logo" tabIndex="0" aria-label="vinod jangid logo">
        <div className="logo-top">
          <img src={avatar} alt="animation-head" id="nav-avatar" />
        </div>
      </div>
      <div className="navbar-tabs" id="navbar-tabs">
        <ul className="navbar-tabs-ul">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`navbar-tabs-li ${activeTab === tab.id ? "activeThistab" : ""}`}
              data-aos="fade-down"
              data-aos-delay={tab.delay}
              onClick={() => handleTabClick(tab.id, tab.type)}
            >
              {tab.type === 'link' ? (
                <Link to={tab.id} tabIndex="0" aria-label={`${tab.label} menu button`}>
                  {tab.label}
                </Link>
              ) : (
                <a href={tab.id} tabIndex="0" aria-label={`${tab.label} menu button`}>
                  {tab.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
