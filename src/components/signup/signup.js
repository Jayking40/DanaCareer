import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const baseUrl = 'https://danacareeerapi.onrender.com'; 
const endpoint = "/auth/register";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: ""
      });
      const [isLoading, setIsLoading] = useState(false);
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      

      const handleSignup = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`${baseUrl}${endpoint}`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json(); 
      
          if (response.ok) {
            console.log("Signup successful:", data);
            alert("Account created successfully!");
          } else {
            alert(data.message || "Failed to create an account. Please try again.");
          }
        } catch (error) {
          console.error("Error during signup:", error);
          alert("Failed to create an account. Please try again.");
        } finally {
          setIsLoading(false); 
        }
      };
      
  return (
    <div className="container">
      {/* Header Logo */}
      <div className="header">
        <img
          src="https://career.danagroup.com/WebApp/HR/career/DGC-logo.png"
          alt="Dana Logo"
          className="logo"
        />
      </div>

      {/* Signup Section */}
      <div className="signup-section">
        <h2 className="portal-header">Create an Account</h2>
        <div className="form-container">
        <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="input-field"
            value={formData.fullName}
            onChange={handleChange}
            />
            <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            />
            <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="input-field"
            value={formData.phoneNumber}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
        />

            <button className="signup-btn" onClick={handleSignup} disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
        </div>
      </div>

      {/* Already have an account? */}
      <div className="create-account">
        <p>Already have an account?</p>
        <Link to='/login'>
            <button className="login-btn">
            Log In
            </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>2024 &copy; Dana Group - HR Career Portal</p>
      </div>

      {/* Popup for Log In
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Log In</h3>
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
      )} */}
    </div>
  );
};

export default Signup;
