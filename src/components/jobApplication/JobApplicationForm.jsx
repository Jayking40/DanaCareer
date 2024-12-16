import React, { useEffect, useState } from 'react';
import './JobApplicationForm.css';
import { useParams } from 'react-router-dom';

const getEndpoint = "/jobs"; 
const baseUrl = 'http://localhost:5000';

const JobApplicationForm = () => {
  const { id } = useParams(); 
  const [jobDetails, setJobDetails] = useState(null);


  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${baseUrl}${getEndpoint}/${id}`);
        const data = await response.json();
        setJobDetails(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-application-container">
      <div className="job-header">
        <h1>{jobDetails.title}</h1>
        <h3>{jobDetails.company}</h3>
        <p className="application-deadline">
          Application Deadline: <strong>{jobDetails.applicationDeadline}</strong>
        </p>
      </div>

      <div className="job-summary">
        <h3>Job Summary</h3>
        <p>{jobDetails.jobSummary}</p>
      </div>

      <div className="job-responsibilities">
        <h3>Responsibilities:</h3>
        <ul>
          {jobDetails.responsibilities?.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          )) || <li>No responsibilities provided.</li>}
        </ul>
      </div>

      <div className="job-requirements">
        <h3>Required Skills / Experience:</h3>
        <ul>
          {jobDetails.requiredSkills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          )) || <li>No skills provided.</li>}
        </ul>
      </div>

      <div className="job-form">
        <h2>Apply for this job</h2>
        <form>
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="Enter your last name" required />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className="form-group">
            <label>Address *</label>
            <input type="text" placeholder="Enter your address" required />
          </div>

          <div className="form-group">
            <label>Educational Qualification *</label>
            <select>
              <option>Select Educational Qualification</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </div>

          <div className="form-group">
            <label>Previous Industry Experience *</label>
            <select>
              <option>Select Experience</option>
              <option>Aviation</option>
              <option>Manufacturing/Production</option>
              <option>Technology</option>
              <option>Mechanical</option>
              <option>Agriculture</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Job Location *</label>
            <select>
              <option>Select Preferred Location</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
            </select>
          </div>

          <div className="form-group">
            <label>How Long Is Your Notice Period (Days) *</label>
            <select>
              <option>Select Notice Period</option>
              <option>Immediate</option>
              <option>30 Days</option>
              <option>60 Days</option>
            </select>
          </div>

          <div className="form-group">
            <label>Years Of Experience *</label>
            <input type="number" placeholder="Enter years of experience" required />
          </div>

          <div className="form-group">
            <label>Please Indicate Your Salary Expectation In NGN (Per Annum)</label>
            <input type="number" placeholder="Enter salary expectation" />
          </div>

          <div className="form-group upload-section">
            <label>Resume / CV *</label>
            <input type="file" accept=".pdf, .doc, .docx, .rtf" required />
          </div>

          <div className="form-group upload-section">
            <label>Cover Letter *</label>
            <input type="file" accept=".pdf, .doc, .docx, .rtf" required />
          </div>

          <div className="form-submit">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
