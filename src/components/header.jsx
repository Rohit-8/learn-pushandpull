import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import MikroLogo from '../assets/MikroLogo.png';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <header className="header">
            <div className="logo">
                <img
                    src={MikroLogo}
                    alt="Default Logo"
                    className="logo-img"
                />
            </div>

            <nav className="nav">
                <Link to="/wire-cable" className="nav-link wire-cable">Wire & Cables</Link>
                <Link to="/tools" className="nav-link tools">Tools</Link>
                <Link to="/applications" className="nav-link applications">Applications</Link>
                <Link to="/services" className="nav-link services">Services</Link>
                <Link to="/about-us" className="nav-link about-us">About Us</Link>

                {/* Eng Language Button with Dropdown */}
                <div className="nav-link lang-selector" onClick={toggleDropdown}>
                    🌐 Eng ▼
                    {showDropdown && (
                        <div className="dropdown">
                            <div className="dropdown-item">🇪🇸 Spanish</div>
                        </div>
                    )}
                </div>
                <Link to="/contact-us" className="nav-link contact-us">Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;
