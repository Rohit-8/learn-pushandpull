import React from 'react';
import '../css/home.css';

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
    </div>
  );
};

export default Home;
