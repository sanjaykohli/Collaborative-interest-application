// HouseElectionsEvent.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import './houseElectionsEvent.css';
import houseElectionsimg from './imagess/houseElection.jpeg';

function HouseElectionsEvent() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="house-elections-event-container">
      <Navbar />
      <div className="house-elections-event-content">
        <div className="house-elections-event-image">
          <img src={houseElectionsimg} alt="House Elections Event" />
        </div>
        <div className="house-elections-event-description">
          <h2>House Elections</h2>
          <p>
            The House Elections are a crucial event for our community, where we choose the leaders who will represent and guide us in the coming year.
          </p>
          <p>
            Engage in the democratic process, attend candidate debates, and make your voice heard. This is your opportunity to elect representatives who will champion your interests and work towards a better future for all.
          </p>
          <p>Exercise your right to vote and be a part of shaping our community!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register to Vote'}
          </button>
        </div>
        {showForm && (
          <div className="house-elections-event-form">
            Forms will open during the time of the event
          </div>
        )}
      </div>
    </div>
  );
}

export default HouseElectionsEvent;