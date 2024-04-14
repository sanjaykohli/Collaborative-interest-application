import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  // Fetch user data from an API or state
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberships: ['Music Club', 'Debsoc'],
  };

  return (
    <div>
      <h2>Profile</h2>
      <div className="profile-info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <h4>Memberships:</h4>
        <ul>
          {user.memberships.map((membership, index) => (
            <li key={index}>{membership}</li>
          ))}
        </ul>
        <Link to="/settings">Edit Profile</Link>
      </div>
    </div>
  );
}

export default Profile;