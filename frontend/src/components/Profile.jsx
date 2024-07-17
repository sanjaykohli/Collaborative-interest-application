import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const userEmail = 'sanjay.kohli21@st.niituniversity.in';

  useEffect(() => {
    fetch(`http://localhost:4000/login/${userEmail}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setUserName(data.name);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [userEmail]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleNameSubmit = () => {
    // Make a PUT request to update the user's name on the server
    fetch(`http://localhost:4000/updateName/${user.email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName }),
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log('Name updated successfully');
      })
      .catch(error => console.error('Error updating name:', error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-title">
        <h3>Profile</h3>
      </div>
      <div className="profile-form">
        <div className="profile-form-group">
          <label className="profile-form-label">Name</label>
          <input
            className="profile-form-input"
            type="text"
            value={userName}
            onChange={handleNameChange}
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label">College</label>
          <input
            className="profile-form-input"
            type="text"
            value={user.college}
            disabled
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label">Email</label>
          <input
            className="profile-form-input"
            type="email"
            value={user.email}
            disabled
          />
        </div>
        <button className="profile-form-button" onClick={handleNameSubmit}>
          Update Name
        </button>
        <Link className="profile-form-button" to="/settings">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default Profile;