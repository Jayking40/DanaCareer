import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleAboutEnter = () => setIsAboutOpen(true);
  const handleAboutLeave = () => setIsAboutOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="https://career.danagroup.com/WebApp/HR/career/DGC-logo.png" alt="Dana Logo" />
        </Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/dashboard" className="dashboard-btn">
          Dashboard
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Our-subsidiaries">Our Subsidiaries</a>
        </li>
        <li onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
          <a href="/about">About Us</a>
          {isAboutOpen && (
            <div className="dropdown-menu vertical">
              <ul>
                <li><a href="/profile">Group's Profile</a></li>
                <li><a href="/welcome">CEO's Welcome Message</a></li>
                <li><a href="/directors">Board Of Directors</a></li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/career">Career</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
