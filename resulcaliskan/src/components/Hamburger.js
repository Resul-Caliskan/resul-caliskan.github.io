// components/Hamburger.js
import React from 'react';

const Hamburger = () => {
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
          <li id="home-mobile-tab" className="mobile-navbar-tabs-li home activeThismobiletab">
            <a href="#home" tabIndex="0" aria-label="Home menu button">
              &#60;/Home&#62;
            </a>
          </li>
          <li id="aboutme-mobile-tab" className="mobile-navbar-tabs-li about">
            <a href="#about" tabIndex="0" aria-label="about menu button">
              &#60;/AboutMe&#62;
            </a>
          </li>
          <li id="skills-mobile-tab" className="mobile-navbar-tabs-li skills">
            <a href="#skills" tabIndex="0" aria-label="skills menu button">
              &#60;/Skills&#62;
            </a>
          </li>
          <li id="projects-mobile-tab" className="mobile-navbar-tabs-li projects">
            <a href="#projects" tabIndex="0" aria-label="projects menu button">
              &#60;/Projects&#62;
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;