import React from 'react';
import { Link } from 'react-router-dom';

function ProfileDropdown() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;