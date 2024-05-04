import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './rangmanchClub.css';
import rangmanchimg from './imagess/rangmanch.jpeg';

function RangmanchClub() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="rangmanch-club-container">
      <Navbar />
      <div className="rangmanch-club-content">
        <div className="rangmanch-club-image">
          <img src={rangmanchimg} alt="Rangmanch Club" />
        </div>
        <div className="rangmanch-club-description">
          <h2>Rangmanch Club</h2>
          <p>
            The Rangmanch Club is a platform for aspiring actors and theater enthusiasts to explore the world of drama and performance. Whether you're interested in acting, directing, or stage design, our club offers opportunities for creative expression and collaboration.
          </p>
          <p>
            Join us for script readings, rehearsals, and performances as we bring stories to life on stage. Experience the thrill of theater and connect with fellow members who share your passion for the performing arts.
          </p>
          <p>Let's create unforgettable moments together on stage!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Join the Club'}
          </button>
        </div>
        {showForm && (
          <div className="rangmanch-club-form">
            <h2>Join the Rangmanch Club</h2>
            <ClubForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default RangmanchClub;