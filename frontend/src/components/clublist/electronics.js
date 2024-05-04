// ElectronicsClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './ElectronicsClub.css';
import electronicsimg from './imagess/electronicsclub.jpeg';

function ElectronicsClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="electronics-club-container">
      <Navbar />
      <div className="electronics-club-content">
        <div className="electronics-club-image">
          <img src={electronicsimg} alt="Electronics Club" />
        </div>
        <div className="electronics-club-details">
          <div className="electronics-club-description">
            <h2>Electronics Club</h2>
            <p>
              The Electronics Club is a haven for innovators and tinkerers who are passionate about the world of circuits and electronics. Whether you're a hobbyist or an aspiring engineer, our club offers a dynamic environment to explore, learn, and create cutting-edge projects.
            </p>
            <p>
              Join us for workshops, competitions, and hands-on projects that will challenge your skills and expand your knowledge. Work with like-minded individuals, collaborate on exciting ideas, and bring your electronic creations to life. Let's push the boundaries of innovation together!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="electronics-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElectronicsClub;