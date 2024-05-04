import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './DanceClub.css';
import danceimg from './imagess/danceclub.jpeg';

function DanceClub() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="dance-club-container">
      <Navbar />
      <div className="dance-club-content">
        <div className="dance-club-image">
          <img src={danceimg} alt="Dance Club" />
        </div>
        <div className="dance-club-details">
          <div className="dance-club-description">
            <h2>Dance Club</h2>
            <p>
              The Dance Club is a place for passionate dancers to express themselves, learn new styles, and showcase their talents. Whether you're a beginner or an experienced dancer, our club offers a supportive environment where you can grow and thrive.
            </p>
            <p>
              Join us for weekly dance sessions, workshops, and performances. Experience the joy of movement and connect with fellow dancers who share your passion.
            </p>
            <p>Let's dance together and create unforgettable memories!</p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="dance-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DanceClub;