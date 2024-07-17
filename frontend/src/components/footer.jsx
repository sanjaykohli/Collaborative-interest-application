import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 VibeTribe. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="http://localhost:3000/termsofservice"><u>Terms</u></a></li>
            <li><a href="http://localhost:3000/privacypolicy"><u>Privacy Policy</u></a></li>
          </ul>
        </div>
        <div className="footer-middle">
          <p>Anything you like us to add</p>
          <ul className="footer-links">
          <a href="https://forms.gle/beY6Xcpa9JTMEci89" target="_blank" rel="noreferrer"><u>Feedback Form</u></a>
          </ul>
        </div>
        <div className="footer-right">
          <p className='links-text'>Follow us on social media</p>
          <ul className="social-links">
            <li><a href="https://www.instagram.com/vibetribe0705/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://youtube.com/@TeamVibeTribe?si=llJgAJkpALspgp9z" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;