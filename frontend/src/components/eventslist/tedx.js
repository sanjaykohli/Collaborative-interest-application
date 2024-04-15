import React from 'react';
import Navbar from '../Navbar';
import './tedxEvent.css';
import tedimg from './imagess/tedx.jpeg'

function TEDxEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          <p>
            Let's explore the power of ideas together!
          </p>
        </div>
      </div>
      <div className="tedx-event-form">
        <h2>Register for TEDx Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TEDxEvent;
