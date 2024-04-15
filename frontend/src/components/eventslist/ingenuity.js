import React from 'react';
import Navbar from '../Navbar';
import './ingenuityEvent.css';
import ingenuityimg from './imagess/ingenuity.jpeg'

function IngenuityEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="ingenuity-event-container">
      <Navbar />
      <div className="ingenuity-event-content">
        <div className="ingenuity-event-image">
          <img src={ingenuityimg} alt="Ingenuity Event" />
        </div>
        <div className="ingenuity-event-description">
          <h2>Ingenuity Cultural Fest</h2>
          <p>
            The Ingenuity Cultural Fest is a celebration of diversity, creativity, and talent. Join us for a vibrant showcase of music, dance, art, and cuisine from around the world. Experience the richness of different cultures through performances, workshops, and exhibitions.
          </p>
          <p>
            Immerse yourself in a day of cultural exchange and exploration. From traditional dances to modern art installations, there's something for everyone at Ingenuity. Bring your friends and family to enjoy a day filled with excitement and inspiration.
          </p>
          <p>
            Let's come together and celebrate the beauty of diversity!
          </p>
        </div>
      </div>
      <div className="ingenuity-event-form">
        <h2>Register for Ingenuity Cultural Fest</h2>
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

export default IngenuityEvent;

