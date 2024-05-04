import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './MusicClub.css';
import musicimg from './imagess/musicclub.jpeg';

function MusicClub() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="music-club-container">
      <Navbar />
      <div className="music-club-content">
        <div className="music-club-image">
          <img src={musicimg} alt="Music Club" />
        </div>
        <div className="music-club-description">
          <h2>Music Club</h2>
          <p>
            The Music Club is a vibrant community of music enthusiasts who come together to explore and share their musical talents. From learning new instruments to collaborating on performances, our club offers a diverse range of opportunities for members to grow and express their creativity.
          </p>
          <p>
            Whether you're a seasoned musician or just starting your musical journey, the Music Club welcomes you with open arms. Join us for weekly practice sessions, jam sessions, and performances where you can showcase your skills and learn from your peers.
          </p>
          <p>
            Experience the joy of making music together and become a part of a supportive and inspiring community of music lovers.
          </p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Join the Club'}
          </button>
        </div>
        {showForm && (
          <div className="music-club-form">
            <h2>Join the Music Club</h2>
            <ClubForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default MusicClub;