import React from 'react';
import './CareerOpportunities.css';

const CareerOpportunities = () => {
  return (
    <div className="career-container">
      {/* Header Section */}
      <div className="career-header">
        <h1>Career Opportunities</h1>
        <p>Explore our open positions at one of our industry-leading subsidiaries.</p>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <span>Filter by:</span>
        <div className="filter-options">
          <span>All Subsidiaries <hr/></span>
          <span>All Locations <hr/></span>
          <span>DESC </span>
        </div>
        <button className="search-btn">SEARCH</button>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        <div className="job-item">
          <div className="job-title">IT Officer- Full Stack Developer</div>
          <div className="job-company">	Dana Group of Companies</div>
          <div className="job-location">Lagos</div>
          <button>VIEW / APPLY</button>
        </div>
        <div className="job-item">
          <div className="job-title">IT Officer- Full Stack Developer</div>
          <div className="job-company">	Dana Group of Companies</div>
          <div className="job-location">Lagos</div>
          <button>VIEW / APPLY</button>
        </div>
        <div className="job-item">
          <div className="job-title">IT Officer- Full Stack Developer</div>
          <div className="job-company">	Dana Group of Companies</div>
          <div className="job-location">Lagos</div>
          <button>VIEW / APPLY</button>
        </div>
        <div className="job-item">
          <div className="job-title">IT Officer- Full Stack Developer</div>
          <div className="job-company">	Dana Group of Companies</div>
          <div className="job-location">Lagos</div>
          <button>VIEW / APPLY</button>
        </div>
        <div className="job-item">
          <div className="job-title">IT Officer- Full Stack Developer</div>
          <div className="job-company">	Dana Group of Companies</div>
          <div className="job-location">Lagos</div>
          <button>VIEW / APPLY</button>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="join-team">
        <div className="header-container">
            <h2>Join Our Team</h2>
            <button className="join-btn">Join Our Talent Community</button>
        </div>
        <p>
            If you're eager to join our team but haven't discovered an opening in your desired area, 
            we'd love to keep you informed when a suitable position becomes available.
        </p>
        <p>
            Simply submit your CV, along with your interests and skills, and we'll reach out to you as soon as possible.
        </p>
      </div>

    </div>
  );
};

export default CareerOpportunities;
