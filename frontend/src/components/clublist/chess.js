// ChessClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './ChessClub.css';
import chessimg from './imagess/chessclub.jpeg';

function ChessClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="chess-club-container">
      <Navbar />
      <div className="chess-club-content">
        <div className="chess-club-image">
          <img src={chessimg} alt="Chess Club" />
        </div>
        <div className="chess-club-details">
          <div className="chess-club-description">
            <h2>Chess Club</h2>
            <p>
              The Chess Club is a gathering of strategic minds, where players of all levels come together to explore the depths of this timeless game. Whether you're a grandmaster or just starting out, our club offers a welcoming environment to sharpen your skills and challenge your intellect.
            </p>
            <p>
              Join us for weekly tournaments, training sessions, and friendly matches. Immerse yourself in the world of chess and forge lasting connections with fellow enthusiasts. Let's move our pieces and conquer the board together!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="chess-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChessClub;

