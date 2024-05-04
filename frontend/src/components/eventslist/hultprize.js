// HultPrizeEvent.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import './hultPrizeEvent.css';
import hultPrizeimg from './imagess/hultPrize.jpeg';

function HultPrizeEvent() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="hult-prize-event-container">
      <Navbar />
      <div className="hult-prize-event-content">
        <div className="hult-prize-event-image">
          <img src={hultPrizeimg} alt="Hult Prize Event" />
        </div>
        <div className="hult-prize-event-description">
          <h2>Hult Prize Competition</h2>
          <p>
            The Hult Prize Competition is a global challenge that brings together the brightest minds from around the world to tackle some of the most pressing social and environmental issues of our time.
          </p>
          <p>
            Participate in this prestigious event and pitch your innovative solutions to a panel of esteemed judges. Collaborate with like-minded individuals, gain valuable mentorship, and have the opportunity to make a real impact on a global scale.
          </p>
          <p>Join us and be part of a movement that drives positive change!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register Now'}
          </button>
        </div>
        {showForm && (
          <div className="hult-prize-event-form">
       
          </div>
        )}
      </div>
    </div>
  );
}

export default HultPrizeEvent;