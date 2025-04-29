import React from 'react';
import missionImage from '../assets/missionImage.png';
import RectangleVector from '../assets/RectangleVector.png';
import '../css/about-us.css';
import RectangleOurVision from '../assets/RectangleOurVision.png';



const About = () => {
  const paragraphStyle = {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '156%',
    letterSpacing: '1.2%',
    color: '#4E4A45', // Added for text visibility
    padding: '10px', // Optional for better appearance
  };
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="position-relative" style={{ top: '20px', left: '120px', height: '158px' }}>

        <h1
          className="text-danger"
          style={{
            width: '918px',
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 900,
            fontSize: '72px',
            lineHeight: '110%',
            letterSpacing: '-1.5%',
            textTransform: 'uppercase',
            background: 'linear-gradient(95.28deg, #170F10 0.49%, #EC1D36 65.69%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent', // Add this line
          }}
        >
          YOUR SUCCESS<br />IS OUR PASSION
        </h1>

      </div>
      <div className="col-12 position-relative mt-5" style={{ height: '400px' }}>
        <img src="images/about.jpeg" alt="Team" className="w-100 h-100 object-fit-cover" />
      </div>
      <div className="col-12 p-3 bg-white bg-opacity-75 d-flex justify-content-end">
        <div className="w-50 p-3">
          <p
            className="mb-1"
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '110%',
              letterSpacing: '0%',
            }}
          >
            Mikro is a leading wire drawing die <br /> and tool manufacturer.
          </p>
          <p style={paragraphStyle}>
            As a leading wire drawing die manufacturer and an ISO 9001:2015 certified company, we are committed to quality and operational excellence. Using premium materials, cutting-edge technology, precision engineering, and lean systems, we ensure that our products meet the highest standards.
          </p>
          <p style={paragraphStyle}>
            We use genuine, high-quality diamonds and raw materials to manufacture our range of dies. Each product undergoes exhaustive trials and stringent inspections to achieve reliability and value for our customers.
          </p>
        </div>
      </div>

      
      <div className="vision-container">
        <img src={RectangleOurVision} alt="Mission visual" className="recsection" />
        <div className="vision-text">
          <h1 className="fw-bold me-4" style={{ color: '#BDAFAF' }}>
            OUR<br />VISION
          </h1>
        </div>
      </div>

      { <div className="mission-section container-fluid px-4 py-4">
        <div className="position-relative mb-5">
          <img src={RectangleVector} alt="decor" className="decor-vector" />
          
          <div className="d-flex tab-labels">
            <h2
              className="fw-bold me-4"
              style={{
                color: '#FF0000',
                // background: '#FF0000',
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 800,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '0%',
                textTransform: 'uppercase',
                padding: '10px'
              }}
            >
              OUR<br />MISSION
            </h2>
          </div>

        </div>
        <div className="row align-items-center">
          <div className="col-md-6 mission-text">
            <p>
              Our mission is to provide exceptional service in the diamond tools industry by
              fostering strong teamwork, pursuing excellence in craftsmanship and performance,
              and driving innovation in every solution we deliver. We are dedicated to
              supporting our customers’ success through reliable, wire drawing and
              cutting-edge tools that meet the highest standards of quality and efficiency.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={missionImage} alt="Mission visual" className="img-fluid rounded custom-img" />
          </div>
        </div>
      </div> }
    </div>

  );
};
export default About;