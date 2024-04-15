import React from 'react';
import { Link } from 'react-router-dom';

function ClubsDropdown() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/clubs/music">Music</Link></li>
        <li><Link to="/clubs/dance">Dance</Link></li>
        <li><Link to="/clubs/debsoc">Debsoc</Link></li>
        <li><Link to="/clubs/sports">Sports</Link></li>
      </ul>
    </div>
  );
}

export default ClubsDropdown;
