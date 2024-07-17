// AudacityEvent.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import './audacityEvent.css';
import audacityimg from './imagess/audacity.jpeg';

function AudacityEvent() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="audacity-event-container">
      <Navbar />
      <div className="audacity-event-content">
        <div className="audacity-event-image">
          <img src={audacityimg} alt="Audacity Dance Event" />
        </div>
        <div className="audacity-event-description">
          <h2>Audacity Dance Event</h2>
          <p>
            The Audacity Dance Event is a celebration of movement, rhythm, and artistic expression. Join us for an electrifying evening filled with captivating performances, high-energy choreography, and a vibrant atmosphere.
          </p>
          <p>
            Witness the talents of our skilled dancers as they take the stage, showcasing their passion and dedication through a variety of dance styles. From contemporary to classical, from hip-hop to folk, Audacity promises to leave you in awe.
          </p>
          <p>Let's come together and immerse ourselves in the art of dance!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Get Tickets'}
          </button>
        </div>
        {showForm && (
          <div className="audacity-event-form">
           Forms will open during the time of the event

          </div>
        )}
      </div>
    </div>
  );
}

export default AudacityEvent;