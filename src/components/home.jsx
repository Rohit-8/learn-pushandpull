import React, { useEffect, useRef, useState } from "react";
import "../css/home.css";
import ManufacturingImage from "../assets/SCT_7317_22341 2.png";
import WhatSetsUsApartImage from "../assets/SCT_7317_22341 1.png";
import exports from "../assets/esports-logo.png";
import easyrewardz from "../assets/easyrewardz-logo.png";
import rooter from "../assets/rooter-logo.png";
import vidyakul from "../assets/vidyakul-logo.png";
import diamond from "../assets/diamond-dies.png";
import unplash from "../assets/unsplash.png";
import OurServicesImage from "../assets/ourServices.png";
import ArrowDown from "../assets/arrow-down.png";
import ArrowUp from "../assets/arrow-up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ClientCard = ({
  imageSrc,
  name,
  title,
  companyLogo,
  rating,
  testimonial,
}) => {
  return (
    <div className="lemhy">
      <img src={imageSrc} alt={name} className="card-image" />
      <div className="card-content">
        <p className="testimonial-text">{testimonial}</p>
        <div className="author">
          {name} <span className="rating">{rating}</span>
        </div>
        <span className="title-text">{title}</span>
      </div>
    </div>
  );
};

const StatsBanner = () => {
  return (
    <div>
      <div className="stats-banner">
        <img
          src="images/slider22.png"
          alt="Banner Background"
          className="banner-image"
        />
        <div className="stats-overlay">
          <div className="stat-item">
            <h2>30+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h2>1993</h2>
            <p>Established in</p>
          </div>
          <div className="stat-item">
            <h2>40+</h2>
            <p>Countries Covered</p>
          </div>
          <div className="stat-item">
            <h2>9001:2015</h2>
            <p>ISO Certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeService, setActiveService] = useState("manufacture");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      imageSrc: "images/slider1.png",
      name: "Lisa Smith",
      title: "Founder & CEO at xyz",
      companyLogo: "image/ab",
      rating: "★★★★★",
      testimonial:
        "The Mikro team are truly impressive and\n dedicated group of people,\n committed to what we were building.\n We had an amazing experience.",
    },
    {
      imageSrc: "images/slider1.png",
      name: "Eliana Key",
      title: "Founder and",
      companyLogo: "https://via.placeholder.com/50",
      rating: "★★★★★",
      testimonial: "The Mikro dedicate we were experience.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const totalCards = testimonials.length;
        const visibleCards = 1;
        return (prevIndex + 1) % (totalCards - visibleCards + 1);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const updateCarousel = () => {
    if (carouselRef.current) {
      const cardWidth = 736 + 20; // Card width (736px) + margin-right (20px)
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
    }
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    const totalCards = testimonials.length;
    const visibleCards = 1;
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalCards - visibleCards)
    );
  };
  const toggleService = (service) => {
    if (activeService === service) {
      setActiveService(null);
    } else {
      setActiveService(service);
    }
  };

  const blogs = [
    {
      id: 1,
      date: "13 April, 2025",
      title: "Diamond Dies for Wire Drawing: Key to Precision and Efficiency",
      description:
        "Imagine running a highly efficient wire manufacturing operation, only to have production suddenly stall due...",
      image: diamond,
    },
    {
      id: 2,
      date: "13 April, 2025",
      title:
        "Reconditioning and Repolishing of Dies: Extending the Life of Your Tools and Boosting Efficiency",
      description:
        "Imagine running a highly efficient wire manufacturing operation, only to have production suddenly stall due...",
      image: unplash,
    },
    {
      id: 3,
      date: "13 April, 2025",
      title:
        "Reconditioning and Repolishing of Dies: Extending the Life of Your Tools and Boosting Efficiency",
      description:
        "Imagine running a highly efficient wire manufacturing operation, only to have production suddenly stall due...",
      image: unplash,
    },
  ];

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

      <div className="container">
        <div className="manufacturing-section">
          <div className="manufacturing-wrapper">
            <div className="manufacturing-clip-container">
              <div className="manufacturing-left">
                <div className="manufacturing-title">
                  <h2>LEADING</h2>
                  <h2>MANUFACTURING</h2>
                  <h2>COMPANY</h2>
                </div>
                <div className="manufacturing-description">
                  <p>
                    Mikro is a leading wire drawing die and tool manufacturer
                    based in Bangalore– the Silicon Valley of India. We are a
                    reliable and strategic partner for the global wire and cable
                    industry, delivering the finest quality wire drawing dies–
                    the most crucial component to producing quality wire at the
                    lowest die cost per ton of wire drawn.
                  </p>
                </div>
              </div>
            </div>
            <div className="manufacturing-partnership">
              <p>
                Our partnership for excellence with our customers helps them
                Draw More, better, faster, and longer.
              </p>
              <button className="know-more-btn">Know More</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="manufacturing-right">
          <div className="manufacturing-image-wrapper">
            <img src={ManufacturingImage} alt="Manufacturing Process" />
          </div>
        </div>
      </div>

      <div className="container">
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
                  <p>
                    Expand your market reach and improve your user experience by
                    developing mobile apps for Android, iOS, & windows.
                  </p>
                </div>

                <div className="feature-item">
                  <div className="feature-icon continuous-improvement"></div>
                  <h3>CONTINUOUS IMPROVEMENT</h3>
                  <p>
                    We are committed to continuous improvement through regular
                    team training and lean systems.
                  </p>
                </div>

                <div className="feature-item">
                  <div className="feature-icon solid-rock"></div>
                  <h3>SOLID ROCK TECHNOLOGY</h3>
                  <p>
                    Our Own proprietary "Solid Rock Technology" that ensures
                    maximum strength and thermal stability, resulting in
                    blemish-free wire surfaces, good lustre, maximum number of
                    reduts.
                  </p>
                </div>

                <div className="feature-item">
                  <div className="feature-icon smp-dies"></div>
                  <h3>SMP DIES</h3>
                  <p>
                    Mikro's "SMP Dies" revolutionize hard and dry wire drawing
                    with unmatched performance. Mikro's PCD Dies: Customized for
                    efficient, multi-industry wire drawing with enhanced
                    performance.
                  </p>
                </div>

                <div className="feature-item">
                  <div className="feature-icon reconditioning"></div>
                  <h3>RECONDITION & REPOLISHING SERVICES FOR ANY MAKE</h3>
                  <p>
                    Mikro rigorously refurbishes each used Die, including laser
                    profiling, to restore it to like-new condition. We do recut
                    dies a near New Die
                  </p>
                </div>

                <div className="feature-item">
                  <div className="feature-icon one-stop"></div>
                  <h3>ONE STOP SHOP</h3>
                  <p>
                    Mikro provides an all-in-one wire drawing Die solution,
                    including consumables, diamond powders, inspection,
                    polishing equipment, and expert support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="our-services-section">
          <div className="our-services-wrapper">
            <div className="services-left">
              <div
                className={`service-item main-service ${
                  activeService === "manufacture" ? "active" : ""
                }`}
                onClick={() => toggleService("manufacture")}
              >
                <div className="service-header">
                  <h3>MANUFACTURE WIRE DRAWING DIES</h3>
                  <img
                    src={activeService === "manufacture" ? ArrowUp : ArrowDown}
                    alt="toggle"
                  />
                </div>
                <p>
                  Expand your market reach and improve your user experience by
                  developing mobile apps for Android, iOS, & windows.
                </p>
                {activeService === "manufacture" && (
                  <button className="know-more-btn">Know More</button>
                )}
              </div>
              <div
                className={`service-item ${
                  activeService === "reconditioning" ? "active" : ""
                }`}
                onClick={() => toggleService("reconditioning")}
              >
                <div className="service-header">
                  <h3>Reconditioning and Repolishing of the Dies</h3>
                  <img
                    src={
                      activeService === "reconditioning" ? ArrowUp : ArrowDown
                    }
                    alt="toggle"
                  />
                </div>
              </div>
              <div
                className={`service-item ${
                  activeService === "mcx" ? "active" : ""
                }`}
                onClick={() => toggleService("mcx")}
              >
                <div className="service-header">
                  <h3>Mikro Center For Excellence (MCX)</h3>
                  <img
                    src={activeService === "mcx" ? ArrowUp : ArrowDown}
                    alt="toggle"
                  />
                </div>
              </div>
              <div
                className={`service-item ${
                  activeService === "installation" ? "active" : ""
                }`}
                onClick={() => toggleService("installation")}
              >
                <div className="service-header">
                  <h3>Machine Installation and Maintenance</h3>
                  <img
                    src={activeService === "installation" ? ArrowUp : ArrowDown}
                    alt="toggle"
                  />
                </div>
              </div>
              <div
                className={`service-item ${
                  activeService === "machines1" ? "active" : ""
                }`}
                onClick={() => toggleService("machines1")}
              >
                <div className="service-header">
                  <h3>Manufacture Wire Drawing Machines for all the Sizes</h3>
                  <img
                    src={activeService === "machines1" ? ArrowUp : ArrowDown}
                    alt="toggle"
                  />
                </div>
              </div>
              <div
                className={`service-item ${
                  activeService === "machines2" ? "active" : ""
                }`}
                onClick={() => toggleService("machines2")}
              >
                <div className="service-header">
                  <h3>Manufacture Wire Drawing Machines for all the Sizes</h3>
                  <img
                    src={activeService === "machines2" ? ArrowUp : ArrowDown}
                    alt="toggle"
                  />
                </div>
              </div>
            </div>
            <div className="services-right">
              <div className="services-image">
                <img src={OurServicesImage} alt="Our Services" />
                <div className="services-overlay">
                  <h2>OUR</h2>
                  <h2>SERVICES</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <StatsBanner />
      </div>

      <div
        className="container"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <div className="row clients-row">
          <div className="col-4 clients-text">
            <small>Who Trust Our Products</small>
            <h2>
              Clients from <br /> Everywhere
            </h2>
          </div>
          <div className="col-8 clients-logos">
            <img src={exports} alt="exports" />
            <img src={vidyakul} alt="Vidyakul" />
            <img src={exports} alt="exports" />
            <img src={easyrewardz} alt="Easyrewardz" />
            <img src={rooter} alt="Rooter" />
            <img src={easyrewardz} alt="Easyrewardz" />
            <img src={rooter} alt="Rooter" />
            <img src={exports} alt="exports" />
            <img src={vidyakul} alt="Vidyakul" />
          </div>
        </div>
      </div>

      <div className="slidercontainer">
        <div className="vector-image-wrapper">
          <img
            src="images/vector1.png"
            alt="Vector Design"
            className="vector-image"
          />
        </div>
        <div className="container">
          <p className="intro-text">
            Proud to our efficient processes and expert <br />
            engineers, 80% of our clients have been with us for <br />
            more than 10+ years
          </p>
          <h2 className="title-aLong">
            A Long Lasting <br /> Relation with Clients
          </h2>
          <div className="carousel-wrapper">
            <div className="carousel-controls">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="nav-icon prev"
                onClick={handlePrev}
              />
              <span className="pagination">
                {String(currentIndex + 1).padStart(2, "0")}/
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="nav-icon next"
                onClick={handleNext}
              />
            </div>
            <div className="carousel" ref={carouselRef}>
              {testimonials.map((testimonial, index) => (
                <ClientCard
                  key={index}
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  title={testimonial.title}
                  companyLogo={testimonial.companyLogo}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="blog-section py-5 px-3 px-md-5">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
              <div>
                <h2 className="blog-heading">
                  STAY UPDATED WITH OUR <br />
                  IMPRESSIVE DIAMOND TOOLS
                </h2>
              </div>
            </div>

            <a href="#" className="text-danger fw-semibold view-all">
              View All
            </a>
          </div>

          <div className="row gy-4">
            {blogs.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div className="card blog-card h-100">
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <p className="card-date">{blog.date}</p>
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div style={{ height: "408px" }}>
        <img
          src="images/ready.png"
          alt="Banner Background"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Home;
