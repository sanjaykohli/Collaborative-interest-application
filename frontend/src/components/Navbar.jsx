import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import ClubsDropdown from './dropdown/clubsDropdown';
import EventsDropdown from './dropdown/eventsDropdown';
import ProfileDropdown from './dropdown/profileDropdown';
import logo from '../images/logo.png';


function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/home">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      {/* <p className="navbar-logoname">VibeTribe</p> */}
      <div className="navbar-links">
        <nav className="navbar ">
          <ol>
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
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/calendar' className='nav-link'>
                Calendar
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/notifications" className="nav-link">
                Notifications
              </Link>
            </li>
            <li className="navbar-item dropdown profile-button">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <ProfileDropdown />
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}


export default Navbar;