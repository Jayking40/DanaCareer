import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./analytics.css";

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("https://danacareeerapi.onrender.com/analytics/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch analytics data");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data) {
    return <div className="error">Failed to load analytics data.</div>;
  }

  const {
    openPositions,
    applicationSummary: { totalApplications, new: newApps, shortlisted, rejected, pending },
    referrals,
  } = data;

  return (
    <div className="dashboard-container">
      {/* Top Boxes */}
      <div className="top-section">
        <div className="box">
          <h2>
            <CountUp start={0} end={openPositions.count} duration={2} /> <br />
            <span>Open Positions</span>
          </h2>
          <ul>
            {openPositions.jobs.map((job, index) => (
              <li key={index}>{job.title}</li>
            ))}
          </ul>
        </div>

        <div className="box">
          <h2>
            <CountUp start={0} end={newApps} duration={2} /> <br />
            <span>New Applications</span>
          </h2>
          <ul>
            {openPositions.jobs.map((job, index) => (
              <li key={index}>
                {job.title}: {job.applications}
              </li>
            ))}
          </ul>
        </div>

        <div className="box">
          <h2>
            <CountUp start={0} end={totalApplications} duration={2} /> <br />
            <span>Total Applications</span>
          </h2>
          <ul>
            <li>New: {newApps}</li>
            <li>Accepted: 0</li>
            <li>Shortlisted: {shortlisted}</li>
            <li>Rejected: {rejected}</li>
            <li>Pending: {pending}</li>
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
          {referrals.map((item, index) => (
            <div key={index} className="referral-item">
              <h2>
                <CountUp start={0} end={item.value} duration={2} />
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
          {[
            { name: "New Application", progress: (newApps / totalApplications) * 100, color: "#4caf50" },
            { name: "Shortlisted Application", progress: (shortlisted / totalApplications) * 100, color: "#ff9800" },
            { name: "Rejected Application", progress: (rejected / totalApplications) * 100, color: "#f44336" },
            { name: "Pending Application", progress: (pending / totalApplications) * 100, color: "#2196f3" },
          ].map((activity, index) => (
            <div key={index} className="activity-item">
              <span>{activity.name}</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${activity.progress}%`,
                    backgroundColor: activity.color,
                  }}
                ></div>
                <span className="progress-value">{Math.round(activity.progress)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
