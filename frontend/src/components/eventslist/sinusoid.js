// SinusoidEvent.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import './sinusoidEvent.css';
import sinusoidimg from './imagess/sinusoid.jpeg';

function SinusoidEvent() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="sinusoid-event-container">
      <Navbar />
      <div className="sinusoid-event-content">
        <div className="sinusoid-event-image">
          <img src={sinusoidimg} alt="Sinusoid Event" />
        </div>
        <div className="sinusoid-event-description">
          <h2>Sinusoid Tech Fest</h2>
          <p>
            The Sinusoid Tech Fest is a celebration of innovation and technology. Join us for an immersive experience where you can explore cutting-edge projects, attend captivating workshops, and witness the latest advancements in the tech world.
          </p>
          <p>
            From robotics to software development, from AI to cybersecurity, Sinusoid offers a platform for tech enthusiasts, students, and professionals to connect, learn, and showcase their skills. Participate in exciting competitions, network with industry experts, and discover the endless possibilities of technology.
          </p>
          <p>Let's embrace the future and unlock the power of innovation together!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register Now'}
          </button>
        </div>
        {showForm && (
          <div className="sinusoid-event-form">
          </div>
        )}
      </div>
    </div>
  );
}

export default SinusoidEvent;