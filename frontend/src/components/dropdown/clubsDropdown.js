import React from 'react';
import { Link } from 'react-router-dom';

function ClubsDropdown() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/clubs/music">Music</Link></li>
        <li><Link to="/clubs/dance">Dance</Link></li>
        <li><Link to="/clubs/debsoc">Debsoc</Link></li>
        <li><Link to="/clubs/rangmanch">Rangmanch</Link></li>
        <li><Link to="/clubs/chess">Chess</Link></li>
        <li><Link to="/clubs/arts">Arts</Link></li>
        <li><Link to="/clubs/kavishala">Kavishala</Link></li>
        <li><Link to="/clubs/photography">Photography</Link></li>
        <li><Link to="/clubs/running">Running</Link></li>
        <li><Link to="/clubs/sustainability">Sustainability</Link></li>
        <li><Link to="/clubs/programming">Programming</Link></li>
        <li><Link to="/clubs/electronics">Electronics</Link></li>
      </ul>
    </div>
  );
}

export default ClubsDropdown;
