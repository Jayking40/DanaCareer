import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './chart.css';

const HRReport = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companies, setCompanies] = useState([]);
  const [attritionData, setAttritionData] = useState({});
  const [employmentData, setEmploymentData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/hr-data/all-subsidiary-data')
      .then((response) => response.json())
      .then((data) => {
        const uniqueCompanies = [...new Set(data.map((item) => item.Subsidiary))];
        setCompanies(uniqueCompanies);

        if (uniqueCompanies.length > 0) {
          setSelectedCompany(uniqueCompanies[0]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (!selectedCompany) return;

    fetch('http://localhost:5000/hr-data/all-subsidiary-data')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.Subsidiary === selectedCompany);

        const attritionChartData = {
          labels: filteredData.map((item) => item.Month),
          datasets: [
            {
              label: 'Attrition Rate',
              data: filteredData.map((item) => item.Attrition),
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2,
              tension: 0.3,
            },
          ],
        };

        const employmentChartData = {
          labels: filteredData.map((item) => item.Month),
          datasets: [
            {
              label: 'Employment Rate',
              data: filteredData.map((item) => item.Employment),
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0.3,
            },
          ],
        };

        setAttritionData(attritionChartData);
        setEmploymentData(employmentChartData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [selectedCompany]);

  return (
    <div className="hr-report-container">
      <h1>HR REPORT 2024</h1>
      <div className="dropdown-container">
        <label htmlFor="company-select">Select Company:</label>
        <select
          id="company-select"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {attritionData.labels ? (
        <div className="chart-container">
          <h2>Attrition Rate Analysis - {selectedCompany}</h2>
          <Line data={attritionData} />
        </div>
      ) : (
        <p>Loading attrition data...</p>
      )}

      {employmentData.labels ? (
        <div className="chart-container">
          <h2>Employment Rate Analysis - {selectedCompany}</h2>
          <Line data={employmentData} />
        </div>
      ) : (
        <p>Loading employment data...</p>
      )}
    </div>
  );
};

export default HRReport;
