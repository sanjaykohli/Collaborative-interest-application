// KavishalaClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './kavishalaClub.css';
import kavishalaimg from './imagess/kavishalaclub.jpeg';

function KavishalaClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="kavishala-club-container">
      <Navbar />
      <div className="kavishala-club-content">
        <div className="kavishala-club-image">
          <img src={kavishalaimg} alt="Kavishala Club" />
        </div>
        <div className="kavishala-club-details">
          <div className="kavishala-club-description">
            <h2>Kavishala Club</h2>
            <p>
              The Kavishala Club is a sanctuary for poets, writers, and lovers of literature. Here, we celebrate the power of words and the art of storytelling. Whether you're a seasoned wordsmith or a budding writer, our club is the perfect place to unleash your creativity and share your literary masterpieces.
            </p>
            <p>
              Join us for poetry readings, writing workshops, and literary discussions. Immerse yourself in a world of captivating narratives and thought-provoking ideas. Let's inspire each other and leave our mark on the world of literature!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="kavishala-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KavishalaClub;

