// RunningClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './RunningClub.css';
import runningimg from './imagess/runningclub.jpeg';

function RunningClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="running-club-container">
      <Navbar />
      <div className="running-club-content">
        <div className="running-club-image">
          <img src={runningimg} alt="Running Club" />
        </div>
        <div className="running-club-details">
          <div className="running-club-description">
            <h2>Running Club</h2>
            <p>
              The Running Club is a community of fitness enthusiasts who embrace the power of movement. Whether you're a seasoned runner or just starting your journey, our club is the perfect place to challenge yourself, achieve your goals, and foster a healthy lifestyle.
            </p>
            <p>
              Join us for group runs, training sessions, and fitness challenges. Push your limits, explore new trails, and enjoy the camaraderie of fellow runners. Let's hit the ground running and conquer every mile together!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="running-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RunningClub;

