import React from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  return (
    <div className="job-application-container">
      <div className="job-header">
        <h1>IT Officer- Full Stack Developer</h1>
        <h3>Dana Group of Companies</h3>
        <p className="application-deadline">
          Application Deadline: <strong>Wednesday 20th of November 2024</strong>
        </p>
      </div>

      <div className="job-summary">
        <h3>Job Summary</h3>
        <p>
          The primary objective of this role is to leverage expertise in front-end and back-end technologies 
          to design, develop, and maintain robust web applications while collaborating with cross-functional 
          teams to deliver high-quality, scalable, and innovative solutions that meet business objectives and 
          user needs.
        </p>
      </div>

      <div className="job-responsibilities">
        <h3>Responsibilities:</h3>
        <ul>
          <li>Design, develop, and maintain robust and user-friendly web applications.</li>
          <li>
            Create visually appealing and intuitive user interfaces using modern frontend technologies.
          </li>
          <li>Build scalable backend systems and APIs using server-side technologies.</li>
          <li>Integrate third-party APIs and services as needed.</li>
          <li>Provide technical assistance and support to PC users within the company.</li>
          <li>Collaborate with cross-functional teams to understand their needs.</li>
        </ul>
      </div>

      <div className="job-requirements">
        <h3>Required Skills / Experience:</h3>
        <ul>
          <li>Bachelor's degree in Computer Science, Engineering, or an equivalent field.</li>
          <li>Proven experience as a Full Stack Developer or similar role.</li>
          <li>Proficiency in frontend and backend technologies.</li>
          <li>Familiarity with cloud platforms, deployment strategies, and DevOps practices.</li>
          <li>Strong communication and collaboration skills.</li>
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
            <input type="file" accept=".pdf, .doc, .docx, .rtf" />
          </div>

          <div className="form-group upload-section">
            <label>Cover Letter *</label>
            <input type="file" accept=".pdf, .doc, .docx, .rtf" />
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
