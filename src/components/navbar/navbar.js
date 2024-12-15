import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isSubsidiariesOpen, setIsSubsidiariesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleSubsidiariesEnter = () => setIsSubsidiariesOpen(true);
  const handleSubsidiariesLeave = () => setIsSubsidiariesOpen(false);

  const handleAboutEnter = () => setIsAboutOpen(true);
  const handleAboutLeave = () => setIsAboutOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://career.danagroup.com/WebApp/HR/career/DGC-logo.png" alt="Dana Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li
          onMouseEnter={handleSubsidiariesEnter}
          onMouseLeave={handleSubsidiariesLeave}
        >
          <a href="/Our-subsidiaries">Our Subsidiaries</a>
          {isSubsidiariesOpen && (
            <div className="dropdown-menu horizontal">
              <ul>
                <li><a href="/air">Dana Air</a></li>
                <li><a href="/kia">Kia Nigeria</a></li>
                <li><a href="/plastics">Dana Plastics</a></li>
                <li><a href="/pharma">Dana Pharma</a></li>
                <li><a href="/dfm">DFM Nigeria</a></li>
                <li><a href="/dlc">DLC Africa</a></li>
              </ul>
            </div>
          )}
        </li>
        <li
          onMouseEnter={handleAboutEnter}
          onMouseLeave={handleAboutLeave}
        >
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
