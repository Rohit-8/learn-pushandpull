import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MikroLogo from '../assets/MikroLogo.png';
import '../css/header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand/logo */}
          <Link to="/" className="navbar-brand">
            <img src={MikroLogo} alt="Mikro Logo" className="logo-img" />
          </Link>

          {/* Toggler/collapsible Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and right section */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarCollapse">
            <ul className="navbar-nav ms-auto nav-links">
              <li className="nav-item">
                <Link to="/wire-cables" className="nav-link">Wire & Cables</Link>
              </li>
              <li className="nav-item">
                <Link to="/tools" className="nav-link">Tools</Link>
              </li>
              <li className="nav-item">
                <Link to="/applications" className="nav-link">Applications</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">About Us</Link>
              </li>
            </ul>
            <div className="right-section ms-3">
              <button className="language-selector">
                <span className="globe-icon">🌐</span>
                <span>Eng</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <Link to="/contact" className="contact-button">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;