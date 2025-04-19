import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import MikroLogo from '../assets/MikroLogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={MikroLogo} alt="Mikro Logo" />
        </Link>

        <nav>
          <ul className="nav-links">
            <li><Link to="/wire-cables" className="nav-link">Wire & Cables</Link></li>
            <li><Link to="/tools" className="nav-link">Tools</Link></li>
            <li><Link to="/applications" className="nav-link">Applications</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/about-us" className="nav-link">About Us</Link></li>
          </ul>
        </nav>

        <div className="right-section">
          <button className="language-selector">
            <span>🌐</span>
            <span>Eng</span>
          </button>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
