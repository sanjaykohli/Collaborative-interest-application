import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [formData, setFormData] = useState({
    name: 'Suhani Jaiswal',
    email: 'suhani@example.com',
    password: '..........',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the updated user settings
    console.log('Submitting updated settings:', formData);
  };
  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
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
          />
        </div>
        <div className="settings-form-group">
          <label htmlFor="password" className="settings-form-label">
            Password:
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