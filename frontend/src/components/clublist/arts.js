// ArtsClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './ArtsClub.css';
import artsimg from './imagess/artsclub.jpeg';

function ArtsClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="arts-club-container">
      <Navbar />
      <div className="arts-club-content">
        <div className="arts-club-image">
          <img src={artsimg} alt="Arts Club" />
        </div>
        <div className="arts-club-details">
          <div className="arts-club-description">
            <h2>Arts Club</h2>
            <p>
              The Arts Club is a vibrant community that celebrates creativity in all its forms. Whether you're a painter, sculptor, photographer, or simply appreciate the beauty of art, this club is your haven to explore and express your artistic talents.
            </p>
            <p>
              Join us for workshops, exhibitions, and collaborative projects. Immerse yourself in a world of colors, textures, and shapes as we push the boundaries of artistic expression. Let's create masterpieces together and share our passion with the world!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="arts-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtsClub;

