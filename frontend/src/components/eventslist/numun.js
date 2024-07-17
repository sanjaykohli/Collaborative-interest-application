import React, { useState } from 'react';
import Navbar from '../Navbar';
import './numunEvent.css';
import numunimg from './imagess/numun.png';

function NUMUNEvent() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="numun-event-container">
      <Navbar />
      <div className="numun-event-content">
        <div className="numun-event-image">
          <img src={numunimg} alt="NUMUN Event" />
        </div>
        <div className="numun-event-description">
          <h2>NUMUN Event</h2>
          <p>
            The NUMUN Event is a Model United Nations conference where participants simulate UN committees and debate global issues. It's an opportunity for students to develop diplomatic skills, engage in diplomacy, and work towards finding solutions to real-world problems.
          </p>
          <p>
            Join us for a challenging and enriching experience. Whether you're new to Model UN or an experienced delegate, there's something for everyone at NUMUN. Prepare to immerse yourself in international affairs and diplomacy.
          </p>
          <p>Let's work together to create a better world!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register Now'}
          </button>
        </div>
        {showForm && (
          <div className="numun-event-form">
            Forms will open during the time of the event
          </div>
        )}
      </div>
    </div>
  );
}

export default NUMUNEvent;