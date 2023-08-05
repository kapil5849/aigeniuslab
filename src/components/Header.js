import React from 'react';
import { FaHome, FaGithub } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="main">
      <div className="logo">
        <h1>AIGeniusLab</h1>
      </div>
      <div className="links">
        <a href="/" className="home">
          <FaHome />
          Home
        </a>
        <a href="https://github.com/kapil5849" className="contribution">
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
