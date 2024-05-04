// ProgrammingClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './ProgrammingClub.css';
import programmingimg from './imagess/programmingclub.jpeg';

function ProgrammingClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="programming-club-container">
      <Navbar />
      <div className="programming-club-content">
        <div className="programming-club-image">
          <img src={programmingimg} alt="Programming Club" />
        </div>
        <div className="programming-club-details">
          <div className="programming-club-description">
            <h2>Programming Club</h2>
            <p>
              The Programming Club is a hub for tech enthusiasts and coding wizards. Whether you're a seasoned developer or just starting your coding journey, our club provides a supportive environment to learn, collaborate, and explore the limitless possibilities of programming.
            </p>
            <p>
              Join us for coding challenges, hackathons, and workshops covering various programming languages and technologies. Share your knowledge, learn from experienced mentors, and work on exciting projects together. Let's code our way to a brighter future!
            </p>
            <button className="join-button" onClick={toggleForm}>
              {showForm ? 'Close Form' : 'Join the Club'}
            </button>
          </div>
          {showForm && (
            <div className="programming-club-form-container">
              <ClubForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgrammingClub;

