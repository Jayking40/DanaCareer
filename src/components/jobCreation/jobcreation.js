import React, { useState } from 'react';
import './jobCreation.css';

const jobEndpoint = "/jobs/createJob"; 
const baseUrl = 'https://danacareeerapi.onrender.com';

const JobCreation = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    applicationDeadline: '',
    jobSummary: '',
    responsibilities: '',
    requiredSkills: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const payload = {
      ...formData,
      responsibilities: formData.responsibilities.split('.'),
      requiredSkills: formData.requiredSkills.split('.'),
    };

    try {
      const response = await fetch(`${baseUrl}${jobEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage('Job created successfully!');
        setFormData({
          title: '',
          company: '',
          location: '',
          applicationDeadline: '',
          jobSummary: '',
          responsibilities: '',
          requiredSkills: '',
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to create job.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while creating the job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-creation-container">
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit} className="job-creation-form">
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="applicationDeadline">Application Deadline</label>
          <input
            type="date"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobSummary">Job Summary</label>
          <textarea
            id="jobSummary"
            name="jobSummary"
            value={formData.jobSummary}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="responsibilities">Responsibilities (dot-separated)</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="requiredSkills">Required Skills (dot-separated)</label>
          <textarea
            id="requiredSkills"
            name="requiredSkills"
            value={formData.requiredSkills}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Create Job'}
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default JobCreation;
