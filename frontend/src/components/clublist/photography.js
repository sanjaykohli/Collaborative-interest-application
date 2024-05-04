// PhotographyClub.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ClubForm from '../forms/clubForm';
import './PhotographyClub.css';
import photographyimg from './imagess/photographyclub.jpeg';

function PhotographyClub() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="photography-club-container">
      <Navbar />
      <div className="photography-club-content">
        <div className="photography-club-image">
          <img src={photographyimg} alt="Photography Club" />
        </div>
        <div className="photography-club-details">
          <div className="photography-club-description">
            <h2>Photography Club</h2>
            <p>
              The Photography Club is a gathering of visual storytellers who capture the world through their lenses. Whether you're a professional or an amateur, our club is a haven for those who appreciate the art of photography and strive to master it.
            </p>
<p>
 Join us for photo walks, workshops, and exhibitions. Share your stunning shots, learn from experienced photographers, and explore new techniques. Let's freeze moments in time and create lasting memories together!
</p>
<button className="join-button" onClick={toggleForm}>
 {showForm ? 'Close Form' : 'Join the Club'}
</button>
</div>
{showForm && (
 <div className="photography-club-form-container">
   <ClubForm />
 </div>
)}
</div>
</div>
</div>
);
}

export default PhotographyClub;
