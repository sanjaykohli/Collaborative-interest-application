import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClubsDropdown from './dropdown/clubsDropdown';
import EventsDropdown from './dropdown/eventsDropdown';
import ProfileDropdown from './dropdown/profileDropdown';
import './Navbar.css'; // Import CSS file for Navbar styling

function Navbar() {
  const [showClubsDropdown, setShowClubsDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleClubsDropdownEnter = () => {
    setShowClubsDropdown(true);
  };

  const handleClubsDropdownLeave = () => {
    setShowClubsDropdown(false);
  };

  const handleEventsDropdownEnter = () => {
    setShowEventsDropdown(true);
  };

  const handleEventsDropdownLeave = () => {
    setShowEventsDropdown(false);
  };

  const handleProfileDropdownEnter = () => {
    setShowProfileDropdown(true);
  };

  const handleProfileDropdownLeave = () => {
    setShowProfileDropdown(false);
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li
            onMouseEnter={handleClubsDropdownEnter}
            onMouseLeave={handleClubsDropdownLeave}
            className="navbar-item vertical-dropdown"
          >
            <Link to="/clubs" className="clubs-nav">
              Clubs
            </Link>
            {showClubsDropdown && <ClubsDropdown />}
          </li>
          <li
            onMouseEnter={handleEventsDropdownEnter}
            onMouseLeave={handleEventsDropdownLeave}
            className="navbar-item vertical-dropdown"
          >
            <Link to="/events" className="events-nav">
              Events
            </Link>
            {showEventsDropdown && <EventsDropdown />}
          </li>
          <li
            onMouseEnter={handleProfileDropdownEnter}
            onMouseLeave={handleProfileDropdownLeave}
            className="navbar-item vertical-dropdown"
          >
            <Link to="/profile" className="profile-nav">
              Profile
            </Link>
            {showProfileDropdown && <ProfileDropdown />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
