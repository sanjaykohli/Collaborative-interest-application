import React from 'react';
import { Link } from 'react-router-dom';

function EventsDropdown() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/events/ingenuity">IngeNUity</Link></li>
        <li><Link to="/events/tedxniituniversity">TEDxNIITUNIVERSITY</Link></li>
        <li><Link to="/events/numun">NUMUN</Link></li>
        <li><Link to="/events/sinusoid">Sinusoid</Link></li>
        <li><Link to="/events/hultprize">HultPrize</Link></li>
        <li><Link to="/events/houseelections">HouseElections</Link></li>
        <li><Link to="/events/audacity">Audacity</Link></li>
      </ul>
    </div>
  );
}

export default EventsDropdown;
