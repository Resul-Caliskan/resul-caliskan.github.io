// components/Header.js
import React from 'react';
import Cursor from './Cursor';
import Navbar from './Navbar';
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <header>
      <Cursor />
      <Navbar />
      <Hamburger />
    </header>
  );
};

export default Header;