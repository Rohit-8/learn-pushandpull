import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about-us';
import Contactus from './components/contact-us';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
        {/* <Route path="/wire-cables" element={<div>Wire & Cables Page</div>} />
        <Route path="/applications" element={<div>Applications Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/tools" element={<div>Tools Page</div>} />
        <Route path="/blogs" element={<div>Blogs Page</div>} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/privacy-policy" element={<div>Privacy Policy</div>} />
        <Route path="/terms" element={<div>Terms & Conditions</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;