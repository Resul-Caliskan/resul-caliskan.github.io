// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="hey">Hey!</div>
      <div className="logo" tabIndex="0" aria-label="vinod jangid logo">
        <div className="logo-top">
          <img src="src/png/nav-avatar.png" alt="animation-head" id="nav-avatar" />
        </div>
      </div>
      <div className="navbar-tabs" id="navbar-tabs">
        <ul className="navbar-tabs-ul">
          <li className="home activeThistab navbar-tabs-li" data-aos="fade-down" data-aos-delay="100">
            <a href="#home" tabIndex="0" aria-label="Home menu button">
              &#60;/Home&#62;
            </a>
          </li>
          <li className="about navbar-tabs-li" data-aos="fade-down" data-aos-delay="300">
            <a href="#about" aria-label="about menu button">
              &#60;/AboutMe&#62;
            </a>
          </li>
          <li className="skills navbar-tabs-li" data-aos="fade-down" data-aos-delay="500">
            <a href="#skills" aria-label="skills menu button">
              &#60;/Skills&#62;
            </a>
          </li>
          <li className="projects navbar-tabs-li" data-aos="fade-down" data-aos-delay="700">
            <a href="#projects" aria-label="projects menu button">
              &#60;/Projects&#62;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;