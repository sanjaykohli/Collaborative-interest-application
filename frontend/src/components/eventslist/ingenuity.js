import React, { useState } from 'react';
import Navbar from '../Navbar';
import './ingenuityEvent.css';
import ingenuityimg from './imagess/ingenuity.jpeg';
import EventForm from '../forms/eventForm';

function IngenuityEvent() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
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
          <p>Let's come together and celebrate the beauty of diversity!</p>
          <button className="join-button" onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Register Now'}
          </button>
        </div>
        {showForm && (
          <div className="ingenuity-event-form">
            <h2>Register for Ingenuity Cultural Fest</h2>
            <EventForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default IngenuityEvent;