import React from "react";
import '../css/footer.css';
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Instagram from '../assets/Instagram.png'
import MikroLogo from '../assets/MikroLogo.png';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        {/* Left Side */}
        <div className="footer-left">
          <img src={MikroLogo} alt="Company Logo" className="footer-logo" />
          <div className="contact-info">
            <p className="email">info@company.com</p>
            <p className="contact">+91-9876543210</p>
          </div>
          <div className="underline"></div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <ul className="footer-links">
            <li>Wire & Cables</li>
            <li>Applications</li>
            <li>Services</li>
            <li>Tools</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>

          <div className="social-icons">
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      {/* Middle Privacy Section */}
      <div className="footer-middle">
        <span>Privacy Policy</span>
        <span className="divider">|</span>
        <span>Terms & Conditions</span>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
