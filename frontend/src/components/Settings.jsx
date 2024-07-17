import React, { useState, useEffect } from 'react';
import './Settings.css';
import Navbar from './Navbar';

function Settings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: ''
  });
  const [user, setUser] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false); // State to track update success
  const userEmail = 'kohlisanjay@gmail.com'; // Replace with actual logged in user's email

  useEffect(() => {
    console.log('Fetching user data...');
    fetch(`http://localhost:4000/login/${userEmail}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched user data:', data);
        setUser(data);
        setFormData(data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [userEmail]);
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:4000/login/${userEmail}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user settings');
        }
        setUpdateSuccess(true); // Update success flag
        console.log('User settings updated successfully');
      })
      .catch(error => {
        console.error('Error updating user settings:', error);
        setUpdateSuccess(false); // Update success flag to false if error occurs
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="settings-container">
      <Navbar />
      <h2 className="settings-title">Settings</h2>
      {updateSuccess && <p>Password updated successfully!</p>} {/* Display update success message */}
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-form-group">
          <label htmlFor="name" className="settings-form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="settings-form-input"
          />
        </div>
        <div className="settings-form-group">
          <label htmlFor="email" className="settings-form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="settings-form-input"
            disabled // Disable email input field to prevent editing
          />
        </div>
        <div className="settings-form-group">
          <label htmlFor="college" className="settings-form-label">
            College:
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="settings-form-input"
          />
        </div>
        <div className="settings-form-group">
          <label htmlFor="password" className="settings-form-label">
            New Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="settings-form-input"
          />
        </div>
        <button type="submit" className="settings-form-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;
