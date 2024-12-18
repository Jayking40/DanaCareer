import React from "react";
import CountUp from "react-countup";
import "./analytics.css";

const Analytics = () => {
  return (
    <div className="dashboard-container">
      {/* Top Boxes */}
      <div className="top-section">
        <div className="box">
          <h2>
            <CountUp start={0} end={7} duration={20} /> <br />
            <span>Open Positions</span>
          </h2>
          <ul>
            <li>IT Officer - Full Stack Developer</li>
            <li>Chief Security Officer</li>
            <li>Maintenance Officer</li>
            <li>Production Engineer</li>
            <li>Shift Production Pharmacist</li>
          </ul>
        </div>

        <div className="box">
          <h2>
            <CountUp start={0} end={112} duration={20} /> <br />
            <span>New Applications</span>
          </h2>
          <ul>
            <li>IT Officer - Full Stack Developer: 3</li>
            <li>Chief Security Officer: 13</li>
            <li>Maintenance Officer: 36</li>
            <li>Production Engineer: 21</li>
            <li>Shift Production Pharmacist: 2</li>
          </ul>
        </div>

        <div className="box">
          <h2>
            <CountUp start={0} end={144} duration={20} /> <br />
            <span>Total Applications</span>
          </h2>
          <ul>
            <li>New: 113</li>
            <li>Accepted: 0</li>
            <li>Shortlisted: 7</li>
            <li>Rejected: 14</li>
            <li>Pending: 10</li>
          </ul>
        </div>
        <div className="query-box">
          <button>Query Openings</button>
        </div>
      </div>

      {/* Referrals Section */}
      <div className="referrals-section">
        <h3>Application Referrals</h3>
        <div className="referrals">
          {[
            { name: "LinkedIn", value: 55 },
            { name: "Google", value: 9 },
            { name: "Facebook", value: 4 },
            { name: "Indeed", value: 5 },
            { name: "Company website", value: 23 },
            { name: "Others", value: 14 },
          ].map((item, index) => (
            <div key={index} className="referral-item">
              <h2>
                <CountUp start={0} end={item.value} duration={20} />
              </h2>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {["New Application", "Selected Application", "Shortlisted Application", "Rejected Application"].map(
            (activity, index) => (
              <div key={index} className="activity-item">
                <span>{activity}</span>
                <div className="progress-bar">
                  <div style={{ width: "0%" }}></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
