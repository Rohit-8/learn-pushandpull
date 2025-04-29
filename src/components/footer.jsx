import React from "react";
import "../css/footer.css";
import Facebook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
const Footer = () => {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container py-4 border-bottom">
        <div className="row align-items-center">
          {/* Left Side: Logo + Contact */}
          <div className="col-md-6 mb-3 mb-md-0">
            <img src="images/Mikro-logo.png" alt="Mikro Logo" className="footer-logo mb-2" />
            <div className="d-flex flex-wrap align-items-center gap-5 fw-semibold contact-info mt-4">
              <a href="mailto:info@mikro.org" className="footer-link">info@mikro.org</a>
              <span className="footer-link">+91 80 4268 8999</span>
            </div>
          </div>

          {/* Right Side: Links + Social */}
          <div className="col-md-6 text-md-end text-center">
            <ul className="nav justify-content-md-end justify-content-center mb-3 footer-links flex-wrap fw-semibold">
              <li className="nav-item"><a className="nav-link" href="#">Wire & Cables</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Tools</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Applications</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Blogs</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            </ul>

            <hr className="underline"/>

            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="#"><img src={Facebook} alt="Facebook" /></a>
              <a href="#"><img src={Instagram} alt="Instagram" /></a>
              <a href="#"><img src="images/Twitter.png" alt="Twitter" /></a>
              <a href="#"><img src="images/Linkedin.png" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center my-3 footer-middle">
        <a href="#" style={{color: "black"}}>Privacy Policy</a>
        <span className="divider">|</span>
        <a href="#"  style={{color: "black"}}>Terms & Conditions</a>
      </div>

      {/* Bottom Section */}
      <div className="text-center footer-bottom pb-2">
        <p>Copyright © 2024 Dehcept Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
