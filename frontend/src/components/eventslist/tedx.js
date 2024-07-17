import React, { useState } from 'react';
import Navbar from '../Navbar';
import './tedxEvent.css';
import tedimg from './imagess/tedx.jpeg';



function TEDxEvent() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="tedx-event-container">
      <Navbar />
      <div className="tedx-event-content">
        <div className="tedx-event-image">
          <img src={tedimg} alt="TEDx Event" />
        </div>
        <div className="tedx-event-description">
          <h2>TEDx Event</h2>
          <p>
            TEDx events are independently organized TED-like events that bring people together to share a TED-like experience. Our TEDx event features a lineup of inspiring speakers, thought-provoking talks, and engaging discussions on a wide range of topics.
          </p>
          <p>
            Join us for a day of inspiration, innovation, and ideas worth spreading. Whether you're a student, professional, or lifelong learner, there's something for everyone at TEDx. Get ready to be inspired and make meaningful connections with fellow attendees.
          </p>
          <p>Let's explore the power of ideas together!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register Now'}
          </button>
        </div>
        {showForm && (
          <div className="tedx-event-form">
            Forms will open during the time of the event
          </div>
        )}
      </div>
    </div>
  );
}

export default TEDxEvent;