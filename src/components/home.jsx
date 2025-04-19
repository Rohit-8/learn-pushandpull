import React from 'react';
import '../css/home.css';
import ManufacturingImage from '../assets/SCT_7317_22341 2.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>SO SIMPLE, BETTER</h1>
            <h1>WITH MIKRO</h1>
          </div>
        </div>
        <div className="company-info">
          <div className="mikro-section">
            <h2>MIKRO</h2>
            <p>Mikro is a leading wire drawing die and tool manufacture</p>
          </div>
          <div className="hardten-section">
            <h2>HARDTEN</h2>
            <p>Hardten is a leading wire drawing die and tool manufacture</p>
          </div>
        </div>
      </div>

      <div className="manufacturing-section">
        <div className="manufacturing-wrapper">
          <div className="manufacturing-left">
            <div className="manufacturing-title">
              <h2>LEADING</h2>
              <h2>MANUFACTURING</h2>
              <h2>COMPANY</h2>
            </div>
            
            <div className="manufacturing-description">
              <p>
                Mikro is a leading wire drawing die and tool manufacturer based in Bangalore– the Silicon Valley 
                of India. We are a reliable and strategic partner for the global wire and cable industry, delivering 
                the finest quality wire drawing dies– the most crucial component to producing quality wire at the 
                lowest die cost per ton of wire drawn.
              </p>
            </div>
          </div>

          <div className="manufacturing-partnership">
            <p>
              Our partnership for excellence with our customers helps them Draw More, 
              better, faster, and longer.
            </p>
            <button className="know-more-btn">Know More</button>
          </div>

          <div className="manufacturing-right">
            <div className="manufacturing-image-wrapper">
              <img src={ManufacturingImage} alt="Manufacturing Process" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
