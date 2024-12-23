import React, { useEffect, useState } from 'react';
import './JobApplicationForm.css';
import { useParams } from 'react-router-dom';

const getEndpoint = "/jobs/getJob";
const submitEndpoint = "/job-applications/apply";
const baseUrl = 'https://danacareeerapi.onrender.com';

const JobApplicationForm = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    educationalQualification: '',
    previousIndustryExperience: '',
    preferredLocation: '',
    noticePeriodDays: '',
    yearsOfExperience: '',
    salaryExpectation: '',
    source: '',
    resumeCv: null,
    coverLetter: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${baseUrl}${getEndpoint}/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details.');
        }
        const data = await response.json();
        if (data && typeof data === 'object') {
          setJobDetails(data);
        } else {
          console.error('Invalid job details received:', data);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
  
    fetchJobDetails();
  }, [id]);
  

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      const resumeBase64 = formData.resumeCv
        ? await fileToBase64(formData.resumeCv)
        : null;
      const coverBase64 = formData.coverLetter
        ? await fileToBase64(formData.coverLetter)
        : null;

      const payload = {
        ...formData,
        resumeCv: resumeBase64,
        coverLetter: coverBase64,
        jobId: id,
      };

      const response = await fetch(`${baseUrl}${submitEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage('Application submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          educationalQualification: '',
          previousIndustryExperience: '',
          preferredLocation: '',
          noticePeriodDays: '',
          yearsOfExperience: '',
          salaryExpectation: '',
          source: '',
          resumeCv: null,
          coverLetter: null,
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to submit application.');
      }
    } catch (err) {
      setError('An error occurred while submitting your application.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="job-description">
        <h2>Job Summary</h2>
        <p>{jobDetails.jobSummary}</p>

        <h2>Responsibilities</h2>
          <ul>
            {jobDetails.responsibilities?.length > 0 ? (
              jobDetails.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No responsibilities provided.</li>
            )}
          </ul>

          <h2>Required Skills / Experience</h2>
          <ul>
            {jobDetails.requiredSkills?.length > 0 ? (
              jobDetails.requiredSkills.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No requirements provided.</li>
            )}
          </ul>
      </div>

      <div className="job-form">
        <h2>Apply for this job</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Educational Qualification */}
          <div className="form-group">
            <label>Educational Qualification *</label>
            <select
              name="educationalQualification"
              value={formData.educationalQualification}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Educational Qualification</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          {/* Previous Industry Experience */}
          <div className="form-group">
            <label>Previous Industry Experience *</label>
            <select
              name="previousIndustryExperience"
              value={formData.previousIndustryExperience}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Experience</option>
              <option value="Aviation">Aviation</option>
              <option value="Manufacturing/Production">Manufacturing/Production</option>
              <option value="Technology">Technology</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Agriculture">Agriculture</option>
            </select>
          </div>

          {/* Preferred Job Location */}
          <div className="form-group">
            <label>Preferred Job Location *</label>
            <select
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Preferred Location</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
          </div>

          {/* Notice Period */}
          <div className="form-group">
            <label>Notice Period (Days) *</label>
            <select
              name="noticePeriodDays"
              value={formData.noticePeriodDays}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Notice Period</option>
              <option value="Immediate">Immediate</option>
              <option value="30 Days">30 Days</option>
              <option value="60 Days">60 Days</option>
            </select>
          </div>

          {/* Years of Experience */}
          <div className="form-group">
            <label>Years Of Experience *</label>
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleInputChange}
              placeholder="Enter years of experience"
              required
            />
          </div>

          {/* Salary Expectation */}
          <div className="form-group">
            <label>Salary Expectation (NGN per annum)</label>
            <input
              type="number"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              onChange={handleInputChange}
              placeholder="Enter salary expectation"
            />
          </div>

          {/* Referral Source */}
          <div className="form-group">
            <label>Referral Source *</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Referral Source</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Indeed">Indeed</option>
              <option value="Twitter">Twitter</option>
              <option value="Company website">Company website</option>
              <option value="Others">Others</option>
              <option value="Telegram">Telegram</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="myjobmag">myjobmag</option>
              <option value="Glassdoor">Glassdoor</option>
              <option value="Jobgurus">Jobgurus</option>
              <option value="Ngcareers">Ngcareers</option>
              <option value="GrabJobs">GrabJobs</option>
            </select>
          </div>

          {/* Resume/CV */}
          <div className="form-group upload-section">
            <label>Resume / CV *</label>
            <input
              type="file"
              name="resumeCv"
              accept=".pdf, .doc, .docx, .rtf"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Cover Letter */}
          <div className="form-group upload-section">
            <label>Cover Letter *</label>
            <input
              type="file"
              name="coverLetter"
              accept=".pdf, .doc, .docx, .rtf"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
