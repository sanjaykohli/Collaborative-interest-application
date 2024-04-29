import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 VibeTribe. All rights reserved.</p>
        </div>
        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="https://www.google.com">Terms of Service</a></li>
            <li><a href="https://www.google.com">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;