import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const baseUrl = 'https://danacareeerapi.onrender.com';
const loginEndpoint = "/auth/login"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true); 

    try {
      const response = await fetch(`${baseUrl}${loginEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        localStorage.setItem("authToken", data.access_token);

        alert("Login successful!");

        navigate("/dashboard"); 
      } else {
        setError(data.message || "Failed to log in. Please try again.");
      }
    } catch (err) {

      setError("An error occurred. Please check your connection.");
      console.error("Error:", err);
    } finally {
      setLoading(false); 
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

      {/* HR Career Portal */}
      <div className="login-section">
        <h2 className="portal-header">HR Career Portal</h2>
        <div className="form-container">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>

      {/* Create Account Section */}
      <div className="create-account">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <button className="create-btn">Create Account</button>
        </Link>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>2024 &copy; Dana Group - HR Career Portal</p>
      </div>
    </div>
  );
};

export default Login;
