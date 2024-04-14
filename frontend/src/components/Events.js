import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Events.css';
import ingenuityImg from '../images/ingenuity.jpeg';
import tedxImg from '../images/tedx.jpeg';
import numunImg from '../images/numun.jpeg';



const events = [
  {
    id: 1,
    name: 'IngeNUity',
    date: 'March 20, 2024',
    image: ingenuityImg,
  },
  {
    id: 2,
    name: 'TEDxNIITUNIVERSITY',
    date: 'Feb 19, 2024',
    image: tedxImg,
  },
  {
    id: 3,
    name: 'NUMUN',
    date: 'March 11, 2024',
    image: numunImg,
  }
  
];

function Event() {
  const navigate = useNavigate();

  const handleEventClick = (eventName) => {
    const eventRoute = `/events/${eventName.toLowerCase()}`;
    navigate(eventRoute);


  
  };

  return (
    <div className="event-container">
      <Navbar />
      <h1 className="event-title">Events</h1>
      <div className="card-container">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="card-image">
              <img src={event.image} alt={event.name} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{event.name}</h3>
              <p className="card-description">Date: {event.date}</p>
              <button onClick={() => handleEventClick(event.name)}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
