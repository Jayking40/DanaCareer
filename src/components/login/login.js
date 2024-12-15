import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="container">
      {/* Header Logo */}
      <div className="header">
         <img src="https://career.danagroup.com/WebApp/HR/career/DGC-logo.png" alt="Dana Logo" className="logo" />
      </div>

      {/* HR Career Portal */}
      <div className="login-section">
        <h2 className="portal-header">HR Career Portal</h2>
        <div className="form-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button className="login-btn">Log In</button>
        </div>
      </div>

      {/* Create Account Section */}
      <div className="create-account">
        <p>Don't have an account?</p>
        <button className="create-btn" onClick={handlePopupToggle}>
          Create Account
        </button>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>2024 &copy; Dana Group - HR Career Portal</p>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Create Account</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="popup-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="popup-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="popup-input"
            />
            <button className="popup-btn">Submit</button>
            <button className="popup-close" onClick={handlePopupToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
