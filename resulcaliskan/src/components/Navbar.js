import React, { useState } from 'react';
import avatar from "../png/avatar.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "</Home>", delay: 100 },
    { id: "about", label: "</AboutMe>", delay: 100 },
    { id: "skills", label: "</Skills>", delay: 100 },
    { id: "projects", label: "</Projects>", delay: 100 },
  ];

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
              className={`${tab.id} navbar-tabs-li ${activeTab === tab.id ? "activeThistab" : ""}`}
              data-aos="fade-down"
              data-aos-delay={tab.delay}
              onClick={() => setActiveTab(tab.id)}
            >
              <a href={`#${tab.id}`} tabIndex="0" aria-label={`${tab.id} menu button`}>
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
