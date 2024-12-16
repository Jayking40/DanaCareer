import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CareerOpportunities from './components/career/CareerOpportunities';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import JobApplicationForm from './components/jobApplication/JobApplicationForm';
import HRDashboard from './pages/dashboard/dashboard';
import Signup from './components/signup/signup';
import ProtectedRoute from './components/protectedRoute';
import JobCreation from './components/jobCreation/jobcreation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CareerOpportunities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<HRDashboard />} />}
          />
          <Route path="/job-application/:id" element={<JobApplicationForm />} />
          <Route path="/job-creation" element={<JobCreation />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
