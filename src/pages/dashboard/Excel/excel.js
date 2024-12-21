import React, { useState } from 'react';
import './excel.css';

const ExcelManager = () => {
  const [file, setFile] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await fetch('https://danacareeerapi.onrender.com/hr-data/download', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'DanaGroupHRData.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://danacareeerapi.onrender.com/hr-data/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="excel-container">
      <h1 className="excel-title">HR Data Manager</h1>
      <div className="excel-buttons">
        <button className="excel-btn animated-btn" onClick={handleDownload}>
          Download Excel File
        </button>
        <div className="file-upload-container">
          <input type="file" className="file-input" onChange={handleFileChange} />
          <button className="excel-btn animated-btn" onClick={handleUpload}>
            Upload Updated File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcelManager;
