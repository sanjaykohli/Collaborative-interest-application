// SustainabilityClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './SustainabilityClub.css';
import sustainabilityimg from './imagess/sustainabilityclub.jpeg';

function SustainabilityClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="sustainability-club-container">
      <Navbar />
      <div className="sustainability-club-content">
        <div className="sustainability-club-image">
          <img src={sustainabilityimg} alt="Sustainability Club" />
        </div>
        <div className="sustainability-club-details">
          <div className="sustainability-club-description">
            <h2>Sustainability Club</h2>
            <p>
              The Sustainability Club is a community of passionate individuals dedicated to protecting our planet and promoting eco-friendly practices. Join us in our mission to create a greener and more sustainable future for all.
            </p>
            <p>
              Participate in environmental campaigns, workshops, and sustainable living initiatives. Learn about topics like recycling, energy conservation, and reducing your carbon footprint. Together, we can make a lasting impact and inspire positive change!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="sustainability-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SustainabilityClub;

