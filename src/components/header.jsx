import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MikroLogo from '../assets/MikroLogo.png';
import GlobalIcon from '../../public/images/global.png';
import '../css/header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const dropdownRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false); // Close dropdown after selection
  };

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand/logo */}
          <Link to="/" className="navbar-brand">
            <img src={MikroLogo} alt={t('Mikro Logo')} className="logo-img" />
          </Link>

          {/* Toggler/collapsible Button and Language Selector (visible on mobile) */}
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler me-2"
              type="button"
              onClick={toggleNav}
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded={isNavOpen}
              aria-label={t('Toggle navigation')}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {isMobile && (
              <div className="language-selector-container" ref={dropdownRef}>
                <button className="language-selector" onClick={toggleLangDropdown}>
                  <img src={GlobalIcon} alt={t('Language Icon')} className="globe-icon" style={{ width: '20px', height: '20px' }} />
                  <span>{i18n.language === 'es' ? 'Esp' : 'Eng'}</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                {isLangOpen && (
                  <div className="language-dropdown">
                    <button onClick={() => changeLanguage('en')}>{t('English')}</button>
                    <button onClick={() => changeLanguage('es')}>{t('Spanish')}</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navbar links and right section */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarCollapse">
            <ul className="navbar-nav ms-auto nav-links">
              <li className="nav-item">
                <Link to="/wire-cables" className="nav-link">{t('Wire & Cables')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/tools" className="nav-link">{t('Tools')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/applications" className="nav-link">{t('Applications')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">{t('Services')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">{t('About Us')}</Link>
              </li>
            </ul>
            <div className="right-section ms-3">
              {!isMobile && (
                <div className="language-selector-container" ref={dropdownRef}>
                  <button className="language-selector" onClick={toggleLangDropdown}>
                    <img src={GlobalIcon} alt={t('Language Icon')} className="globe-icon" style={{ width: '20px', height: '20px' }} />
                    <span>{i18n.language === 'es' ? 'Esp' : 'Eng'}</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {isLangOpen && (
                    <div className="language-dropdown">
                      <button onClick={() => changeLanguage('en')}>{t('English')}</button>
                      <button onClick={() => changeLanguage('es')}>{t('Spanish')}</button>
                    </div>
                  )}
                </div>
              )}
              <Link to="/contact-us" className="contact-button">{t('Contact Us')}</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;