import React, { useState } from 'react';
import "../css/contact-us.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminEmailTemplate from './admin-email-template';
import UserEmailTemplate from './user-email-template';
const apiUrl = import.meta.env.VITE_API_URL;
import { fetchToken } from './fetchToken';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    if (!formData.consent) {
      alert("Please provide consent to proceed.");
      return;
    }

    try {
      const token = await fetchToken();

      const emailPayload = {
        Name: formData.name,
        Email: formData.email,
        "Phone No": formData.phone,
        "Company Name": formData.companyName,
        Message: formData.message,
      };

      const adminEmailData = {
        to: 'VITE_ADMIN_EMAILS',
        subject: "New Inquiry Submission",
        htmlContent: AdminEmailTemplate(emailPayload),
        senderName: "Mikro Pvt Ltd",
      };

      const userEmailData = {
        to: formData.email,
        subject: "Thank you for contacting us",
        htmlContent: UserEmailTemplate(emailPayload),
        senderName: "Mikro Pvt Ltd",
      };

      const adminResponse = await fetch(`${apiUrl}/api/v1/mail-service`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(adminEmailData),
      });

      const adminResult = await adminResponse.json();
      console.log('Admin Email Response:', adminResult);

      const userResponse = await fetch(`${apiUrl}/api/v1/mail-service`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userEmailData),
      });

      const userResult = await userResponse.json();
      console.log('User Email Response:', userResult);

      alert('Thank you! Your query has been sent.');

      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      });

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="reachout-container">
        <img src="/images/male.png" alt="Background" className="banner-img" />
        <img src="/images/Rectangle2.png" alt="Background" className="rectangleImg" />
        <div className="overlay-banner">
          <h1>REACH OUT TO US</h1>
        </div>
        <div className="corner-rectangle"></div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-section">
        <img src="/images/RectangleBottom.png" alt="Background" className="ContactRectangleImg" />

        <div className="container">

          <div className="contact-left">
            <h1>WE GOT <span>YOU</span> COVER!</h1>
            <p>
              Need expert advice or a custom solution? Our global team is ready to help.
              From cutting-edge tools to global support — we're your partner in precision.
              Contact us — we’ll be in touch shortly.
            </p>
            <div className="stats">
              <div className="stat-item"><strong>30+</strong><span>Years of Experience</span></div>
              <div className="stat-item"><strong>1000+</strong><span>Global Team</span></div>
              <div className="stat-item"><strong>40+</strong><span>Countries Covered</span></div>
              <div className="stat-item"><strong>9001:2015</strong><span>ISO Certification</span></div>
            </div>
          </div>

          <div className="contact-right">
            <form className='formss' onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group floating-label">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  <label className={formData.name ? 'active' : ''}>Name</label>
                </div>

                <div className="form-group floating-label">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <label className={formData.companyName ? 'active' : ''}>Company Name</label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group floating-label">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  <label className={formData.email ? 'active' : ''}>Email</label>
                </div>

                <div className="form-group floating-label">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  <label className={formData.phone ? 'active' : ''}>Phone Number </label>
                </div>
              </div>

              <div className="form-group floating-label">
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <label className={formData.message ? 'active' : ''}>Message </label>
              </div>

              <div className="consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <label>
                  I hereby agree to the storage and processing of my personal data for the purpose of my enquiry.
                </label>
              </div>

              <button type="submit" className="submit-button">Send Query</button>
            </form>
          </div>

        </div>

      </div>


      {/* Get In Touch Section */}
      <div className="getintouch-section container">
        <h1 className="getintouch-heading">Get In Touch</h1>
        <p className="getintouch-subheading">
          We value your feedback. Contact our dedicated support team or fill out the form, and we’ll respond promptly.
        </p>
        <div className="getintouch-info">
          <div className="getintouch-card">
            <div className="card-header">
              <img src="/images/ManufacturingPlant.png" alt="Manufacturing Plant" className="getintouch-icon" />
              <h3>Manufacturing Plant</h3>
            </div>
            <p>No. 8, KIADB industrial area, Chikkaballapur, 562103, Karnataka, India</p>
          </div>
          <div className="getintouch-card">
            <div className="card-header">
              <img src="/images/RegisteredOffice.png" alt="Registered Office" className="getintouch-icon" />
              <h3>Registered Office</h3>
            </div>
            <p>No. 16, 2nd Cross, Sector A, Aranuthnagar Main Road, Bengaluru 560 092, Karnataka, India</p>
          </div>
        </div>

        {/* <div className="getintouch-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1494.1231567182963!2d2.0729854!3d41.4989368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a497ed62ca80b7%3A0x4c8d60657511dbb1!2sRegus!5e0!3m2!1sen!2sin!4v1745827998438!5m2!1sen!2sin"
            width="792px"
            height="445.5px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div> */}
        <div className="container getintouch-map my-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1494.1231567182963!2d2.0729854!3d41.4989368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a497ed62ca80b7%3A0x4c8d60657511dbb1!2sRegus!5e0!3m2!1sen!2sin!4v1745827998438!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
