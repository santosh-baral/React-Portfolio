import React from 'react';
// import './Header.css'; // Make sure to create a separate CSS file or include styles
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="bar">
      <ul>
        <li><a href="#detail">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
      </nav>
  );
}

export default Header;