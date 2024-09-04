import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Our App</h1>
        <p>Your gateway to great experiences</p>
        <Link to="/login" className="cta-button">Get Started</Link>
      </header>
    </div>
  );
};

export default LandingPage;
