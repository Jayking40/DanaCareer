import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <p>
          We’re committed to improving people’s lives and the environment with a
          diversified and sustainable business portfolio.
        </p>
        <div className="social-icons">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="footer-section">
        <h3>Connect With Us</h3>
        <p>
          Head Office, Dana House, 116, Oshodi-Apapa Expressway, Isolo, Lagos
          State
        </p>
        <p>+234 (1) 280 9999</p>
        <p>contact@danagroup.com</p>
      </div>

      <div className="footer-section">
        <h3>Our Subsidiaries</h3>
        <ul>
          <li>Dana Airlines</li>
          <li>Kia Nigeria</li>
          <li>DFM Nigeria</li>
          <li>Dana Plastics</li>
          <li>Dana Pharmaceuticals</li>
          <li>DLC Africa</li>
          <li>Bubble Wrap Nigeria</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Request a Callback</h3>
        <div className="callback-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Your email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button>GET IN TOUCH</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
