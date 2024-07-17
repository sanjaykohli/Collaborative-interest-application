import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Clubs.css';
import musicimage from '../images/musicclub.jpeg';
import danceimage from '../images/danceclub.jpeg';
import debsocimage from '../images/debsoc.jpeg';
import rangmanchimage from '../images/rangmanch.jpeg';
import chessimage from '../images/chessclub.jpeg';
import artsimage from '../images/artsclub.jpeg';
import kavishalaimage from '../images/kavishalaclub.jpeg';
import photographyimage from '../images/photographyclub.jpeg';
import runningimage from '../images/runningclub.jpeg';
import sustainabilityimage from '../images/sustainabilityclub.jpeg';
import programmingimage from '../images/programmingclub.jpeg';
import electronicsimage from '../images/electronicsclub.jpeg';



const clubs = [
  { id: 1, name: 'Music', image: musicimage },
  { id: 2, name: 'Dance', image: danceimage },
  { id: 3, name: 'Debsoc', image: debsocimage },
  { id: 4, name: 'Rangmanch', image: rangmanchimage },
  { id: 5, name: 'Chess', image: chessimage },
  { id: 6, name: 'Arts', image: artsimage },
  { id: 7, name: 'Kavishala', image: kavishalaimage },
  { id: 8, name: 'Photography', image: photographyimage },
  { id: 9, name: 'Running', image: runningimage },
  { id: 10, name: 'Sustainability', image: sustainabilityimage },
  { id: 11, name: 'Programming', image: programmingimage },
  { id: 12, name: 'Electronics', image: electronicsimage }


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
      <div className="card-container">
        {clubs.map((club) => (
          <div key={club.id} className="card" onClick={() => handleClubClick(club.name)}>
            <div className="card-image">
              <img src={club.image} alt={club.name} />
            </div>
          </div>
        ))}
      </div>
    </div>    
  );
}

export default Club;