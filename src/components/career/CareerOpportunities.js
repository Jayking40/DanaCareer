import React, { useEffect, useState } from 'react';
import './CareerOpportunities.css';
import { Link } from 'react-router-dom';

const getEndpoint = "/jobs/getAllJobs"; 
const baseUrl = 'https://danacareeerapi.onrender.com';

const CareerOpportunities = () => {
  const [jobs, setJobs] = useState([]);
  const [subsidiaries, setSubsidiaries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState({
    subsidiary: 'All Subsidiaries',
    location: 'All Locations',
    sort: 'DESC',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${baseUrl}${getEndpoint}`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        setJobs(Array.isArray(data) ? data : []);
        
        const uniqueSubsidiaries = Array.isArray(data)
          ? [...new Set(data.map((job) => job.company))]
          : [];
        const uniqueLocations = Array.isArray(data)
          ? [...new Set(data.map((job) => job.location))]
          : [];
          
        setSubsidiaries(uniqueSubsidiaries);
        setLocations(uniqueLocations);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]);
      }
    };
  
    fetchJobs();
  }, []);
  

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.subsidiary === 'All Subsidiaries' || job.company === filters.subsidiary) &&
      (filters.location === 'All Locations' || job.location === filters.location)
    );
  });

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
          <select
            value={filters.subsidiary}
            onChange={(e) => handleFilterChange('subsidiary', e.target.value)}
          >
            <option>All Subsidiaries</option>
            {subsidiaries.map((subsidiary, index) => (
              <option key={index}>{subsidiary}</option>
            ))}
          </select>

          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option>All Locations</option>
            {locations.map((location, index) => (
              <option key={index}>{location}</option>
            ))}
          </select>

          <select
            value={filters.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
          >
            <option value="DESC">DESC</option>
            <option value="ASC">ASC</option>
          </select>
        </div>
        <button className="search-btn">SEARCH</button>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-item" key={job.id}>
              <div className="job-title">{job.title}</div>
              <div className="job-company">{job.company}</div>
              <div className="job-location">{job.location}</div>
              <Link to={`/job-application/${job.id}`} className="apply-button">
                VIEW / APPLY
              </Link>
            </div>
          ))
        ) : (
          <p>No jobs found matching your criteria.</p>
        )}
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
