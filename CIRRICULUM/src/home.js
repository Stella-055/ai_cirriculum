import React from 'react';
import { FaUpload, FaSearch } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom'
function Home ()  {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>AI-Driven Curriculum Suggestions</h1>
        <p>Generate IT curricula tailored to job market trends and industry needs.</p>
        <button className="cta-button"><NavLink  className="butlink"to="/generate">Generate Curriculum Now </NavLink></button>
      </section>

      {/* Features Section */}
      <section className="features">
       
        <div className="feature-item">
          <FaUpload size={30} />
          <h3>Upload Job Market Data</h3>
          <p>Upload CSV or Excel files to provide job market insights for curriculum predictions.</p>
        </div>
        <div className="feature-item">
          <FaSearch size={30} />
          <h3>Search Job Titles</h3>
          <p>Search for job titles and let the AI suggest relevant skills for the curriculum.</p>
        </div>
      </section>

      

      

      {/* Footer */}
      <footer>
        <p>&copy; 2024 AI Curriculum Generator</p>
        <div className="social-icons">
          {/* Social media icons */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
