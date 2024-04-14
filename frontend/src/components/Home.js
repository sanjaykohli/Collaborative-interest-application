import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
  return (
    
    <div className="home-container">
            <Navbar  className="navvv"/>

      <h1 className="home-title">Welcome to the VibeTribe</h1>
      <div className="section-container">
        <h2 className="section-title">Explore Our Clubs</h2>
        <p className="section-description">
          Discover a wide range of clubs and communities to get involved in.
        </p>
        <a href="/clubs" className="section-link">
          View Clubs
        </a>
      </div>
      <div className="section-container">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-description">
          Check out our upcoming events and join the fun.
        </p>
        <a href="/events" className="section-link">
          View Events
        </a>
      </div>
    </div>
  );
}

export default Home;