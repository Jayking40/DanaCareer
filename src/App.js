import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CareerOpportunities from './components/career/CareerOpportunities';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import JobApplicationForm from './components/jobApplication/JobApplicationForm';
import HRDashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CareerOpportunities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<HRDashboard />} />
          <Route path="/job-application" element={<JobApplicationForm />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
