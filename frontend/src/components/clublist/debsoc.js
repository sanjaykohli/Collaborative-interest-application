import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './debsocClub.css';
import debsocimg from './imagess/debsoc.jpeg';

function DebSocClub() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="debsoc-club-container">
      <Navbar />
      <div className="debsoc-club-content">
        <div className="debsoc-club-image">
          <img src={debsocimg} alt="DebSoc Club" />
        </div>
        <div className="debsoc-club-description">
          <h2>DebSoc Club</h2>
          <p>
            The DebSoc Club is a platform for passionate debaters and public speakers to hone their skills, engage in meaningful discussions, and participate in debates and competitions. Whether you're interested in persuasive speaking, parliamentary debating, or model United Nations, our club offers opportunities for intellectual growth and debate.
          </p>
          <p>
            Join us for weekly debates, workshops, and mock sessions where you can improve your speaking abilities and critical thinking skills. Connect with fellow members who share your enthusiasm for discourse and make your voice heard on important issues.
          </p>
          <p>Let's engage in thoughtful discussions and shape the future together!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Join the Club'}
          </button>
        </div>
      </div>
      {showForm && (
        <div className="debsoc-club-form">
          <h2>Join the DebSoc Club</h2>
          <ClubForm />
        </div>
      )}
    </div>
  );
}

export default DebSocClub;