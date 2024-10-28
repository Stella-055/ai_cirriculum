// src/components/FileUpload.js
import React, { useState } from 'react';
  
    
    function FileUpload ({ onSubmitData })  {
      const [jobTitle, setJobTitle] = useState('');
      const [skills, setSkills] = useState('');
      const [file, setFile] = useState(null);
    
      // Handle form submission
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // If the user has uploaded a file
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
    
          // Call the submit function with the file data
          onSubmitData(formData, 'file');
        } else {
          // Otherwise, submit the job title and skills
          const manualData = {
            jobTitle: jobTitle.trim(),
            skills: skills.split(',').map(skill => skill.trim()), // Convert comma-separated string into an array
          };
    
          // Call the submit function with the manual input data
          onSubmitData(manualData, 'manual');
        }
    
        // Reset fields
        setJobTitle('');
        setSkills('');
        setFile(null);
      };
    
      return (
        <div className="job-market-input">
          <h2>Job Market Data Input</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="jobTitle">Trends</label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter Trends(e.g., Software Engineer)"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter skills (comma-separated, e.g., Python, React)"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="file">Or Upload File</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".csv, .xlsx"
              />
            </div>
    
            <button type="submit" className="submit-button">
              Submit Data
            </button>
          </form>
        </div>
      );
    };
    
    export default FileUpload;
    