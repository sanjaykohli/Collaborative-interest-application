import React from 'react';
import { Link } from 'react-router-dom';

function EventsDropdown() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/events/music-concert">Music Concert</Link></li>
        <li><Link to="/events/dance-competition">Dance Competition</Link></li>
        <li><Link to="/events/seminar">Seminar</Link></li>
        <li><Link to="/events/workshop">Workshop</Link></li>
      </ul>
    </div>
  );
}

export default EventsDropdown;