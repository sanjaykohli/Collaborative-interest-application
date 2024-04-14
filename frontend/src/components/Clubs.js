import React from 'react';
import {  useNavigate } from 'react-router-dom';import Navbar from '../components/Navbar';
import './Clubs.css';
import musicimage from '../images/musicclub.jpeg';
import danceimage from '../images/danceclub.jpeg';
import debsocimage from '../images/debsoc.jpeg';
import rangmanchimage from '../images/rangmanch.jpeg';





const clubs = [
  {
    id: 1,
    name: 'Music',
    description: 'Explore your musical talents',
    image: musicimage,
  },
  {
    id: 2,
    name: 'Dance',
    description: 'Learn and perform various dance styles',
    image: danceimage,
  },
  {
    id: 3,
    name: 'Debsoc',
    description: 'Hone your debating and public speaking skills',
    image: debsocimage,
  },
  {
    id: 4,
    name: 'Rangmanch',
    description: 'Participate in a variety of sports activities',
    image: rangmanchimage,
  },
];

function Club() {
  const navigate = useNavigate();

  const handleClubClick = (clubName) => {
    const clubRoute = `/clubs/${clubName.toLowerCase()}`;
    navigate(clubRoute);
  };

  return (
    <div className="club-container">
      <Navbar />
      <h1 className="club-title">Clubs</h1>
      <div className="card-container">
        {clubs.map((club) => (
          <div key={club.id} className="card">
            <div className="card-image">
              <img src={club.image} alt={club.name} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{club.name}</h3>
              <p className="card-description">{club.description}</p>
              <button onClick={() => handleClubClick(club.name)}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Club;