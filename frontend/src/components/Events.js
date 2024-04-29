import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Events.css';
import ingenuityImg from '../images/ingenuity.jpeg';
import tedxImg from '../images/tedx.jpeg';
import numunImg from '../images/numun.png';
import sinusoidImg from '../images/sinusoid.jpeg';
import hultPrizeImg from '../images/hultPrize.jpeg';
import houseElectionsImg from '../images/houseElection.jpeg';
import audacityImg from '../images/audacity.jpeg';


const events = [
  { id: 1, name: 'IngeNUity', image: ingenuityImg },
  { id: 2, name: 'TEDxNIITUNIVERSITY', image: tedxImg },
  { id: 3, name: 'NUMUN', image: numunImg },
  { id: 4, name: 'Sinusoid', image: sinusoidImg },
  { id: 5, name: 'HultPrize', image: hultPrizeImg },
  { id: 6, name: 'HouseElections', image: houseElectionsImg },
  { id: 7, name: 'Audacity', image: audacityImg }
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
      <div className="card-container">
        {events.map((event) => (
          <div key={event.id} className="card" onClick={() => handleEventClick(event.name)}>
            <div className="card-image">
              <img src={event.image} alt={event.name} />
            </div>
          </div>
        ))}
      </div>
      </div>
      
  );
}

export default Event;