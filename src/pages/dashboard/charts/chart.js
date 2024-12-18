import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import "./chart.css"

const HrReport = () => {
  const [selectedCompany, setSelectedCompany] = useState('DPHL - LAGOS');

  const companies = ['DPHL - LAGOS', 'Company B', 'Company C'];

  const attritionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Attrition Rate',
        data: [0, 4, 1.5, 0, 3, 4.5],
        fill: false,
        borderColor: '#5499C7',
      },
    ],
  };

  const employmentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Employment Rate',
        data: [4.5, 0, 1.5, 4, 1, 0],
        fill: false,
        borderColor: '#5499C7',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 5,
      },
    },
  };

  return (
    <div className="hr-report">
      <h1>HR REPORT 2024</h1>
      <div className="company-selector">
        <label htmlFor="company-select">Select Company:</label>
        <select
          id="company-select"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
      <div className="chart-container">
        <div className="chart">
          <h2>Attrition Rate Analysis - {selectedCompany}</h2>
          <Line data={attritionData} options={chartOptions} />
        </div>
        <div className="chart">
          <h2>Employment Rate Analysis - {selectedCompany}</h2>
          <Line data={employmentData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default HrReport;