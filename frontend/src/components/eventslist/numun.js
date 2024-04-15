import React from 'react';
import Navbar from '../Navbar';
import './numunEvent.css';
import numunimg from './imagess/numun.jpeg'

function NUMUNEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          <p>
            Let's work together to create a better world!
          </p>
        </div>
      </div>
      <div className="numun-event-form">
        <h2>Register for NUMUN Event</h2>
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

export default NUMUNEvent;
