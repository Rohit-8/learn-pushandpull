import React from 'react';
import '../css/home.css';
import ManufacturingImage from '../assets/SCT_7317_22341 2.png';
import WhatSetsUsApartImage from '../assets/SCT_7317_22341 1.png';

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

      <div className="sets-apart-section">
        <div className="sets-apart-wrapper">
          <div className="sets-apart-left">
            <div className="sets-apart-image">
              <img src={WhatSetsUsApartImage} alt="What Sets Us Apart" />
            </div>
            <div className="sets-apart-overlay">
              <h2>WHAT SET</h2>
              <h2>US APART</h2>
            </div>
          </div>
          
          <div className="sets-apart-right">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon customer-centric"></div>
                <h3>CUSTOMER-CENTRIC APPROACH</h3>
                <p>Expand your market reach and improve your user experience by developing mobile apps for Android, iOS, & windows.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon continuous-improvement"></div>
                <h3>CONTINUOUS IMPROVEMENT</h3>
                <p>We are committed to continuous improvement through regular team training and lean systems.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon solid-rock"></div>
                <h3>SOLID ROCK TECHNOLOGY</h3>
                <p>Our Own proprietary "Solid Rock Technology" that ensures maximum strength and thermal stability, resulting in blemish-free wire surfaces, good lustre, maximum number of reduts.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon smp-dies"></div>
                <h3>SMP DIES</h3>
                <p>Mikro's "SMP Dies" revolutionize hard and dry wire drawing with unmatched performance. Mikro's PCD Dies: Customized for efficient, multi-industry wire drawing with enhanced performance.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon reconditioning"></div>
                <h3>RECONDITION & REPOLISHING SERVICES FOR ANY MAKE</h3>
                <p>Mikro rigorously refurbishes each used Die, including laser profiling, to restore it to like-new condition. We do recut dies a near New Die</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon one-stop"></div>
                <h3>ONE STOP SHOP</h3>
                <p>Mikro provides an all-in-one wire drawing Die solution, including consumables, diamond powders, inspection, polishing equipment, and expert support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
