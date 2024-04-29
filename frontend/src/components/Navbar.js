import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClubsDropdown from './dropdown/clubsDropdown';
import EventsDropdown from './dropdown/eventsDropdown';
import ProfileDropdown from './dropdown/profileDropdown';
import logo from '../images/logo.png';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <p className="navbar-logoname">VibeTribe</p>
      </div>

      <div className="navbar-links">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-toggle-icon"></span>
        </button>
        <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
          <ul>
            <li className="navbar-item dropdown">
              <Link to="/clubs" className="nav-link">
                Clubs
              </Link>
              <ClubsDropdown />
            </li>
            <li className="navbar-item dropdown">
              <Link to="/events" className="nav-link">
                Events
              </Link>
              <EventsDropdown />
            </li>
            <li className="navbar-item">
              <Link to="/watch" className="nav-link">
                Watch
              </Link>
            </li>


            <li className="navbar-item3">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="navbar-item2 dropdown profile-button">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <ProfileDropdown />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
