import React from 'react';
import Navbar from './Navbar.jsx';
import './About.css';
import suhaniImage from '../images/Suhani.jpg';
import sanjayImage from '../images/Sanjay.jpg';
import altafImage from '../images/Altaf.jpg';
import manishImage from '../images/manish.jpeg';
import debashishImage from '../images/debashish.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <h1 className="about-title">About VibeTribe</h1>
        <p className="about-description">
          VibeTribe is a collaborative platform for college events and clubs, designed to bring together students with shared interests and passions. Our goal is to create a centralized hub where students can discover and participate in various college activities, fostering a vibrant community and enriching their overall college experience.
        </p>
        <p className="about-description">
          In addition to providing a platform for clubs, we also focus on bringing other college events onto a single platform, making it easier for students to stay informed and engaged with the dynamic campus life. With VibeTribe, you can explore a wide range of events, from cultural fests and workshops to guest lectures and competitions, all in one place.
        </p>
        <p className="about-description">
          At VibeTribe, we believe that college life is about more than just academics; it's a journey of self-discovery, personal growth, and building lasting connections. By creating a thriving community of students with diverse interests and backgrounds, we aim to inspire new friendships, collaborations, and unforgettable experiences that will shape your college years and beyond.
        </p>
        <p className="about-description">
          VibeTribe came as a capstone project under our faculty advisors.
        </p>
        <div className="faculty-images">
          <div className="faculty-image-container">
            <img src={manishImage} alt="Prof. Manish Hurkat" className="faculty-image" />
            <p className="faculty-name">Prof. Manish Hurkat</p>
          </div>
          <div className="faculty-image-container">
            <img src={debashishImage} alt="Prof. Debashish Sengupta" className="faculty-image" />
            <p className="faculty-name">Prof. Debashish Sengupta</p>
          </div>
        </div>
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={suhaniImage} alt="Suhani Jaiswal" className="team-member-image" />
            </div>
            <h3 className="team-member-name">Suhani Jaiswal</h3>
            <p className="team-member-role">Frontend Developer</p>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={sanjayImage} alt="Sanjay Kohli" className="team-member-image" />
            </div>
            <h3 className="team-member-name">Sanjay Kohli</h3>
            <p className="team-member-role">Backend Developer</p>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={altafImage} alt="Altaf Khadri" className="team-member-image" />
            </div>
            <h3 className="team-member-name">Altaf Khadri</h3>
            <p className="team-member-role">Cybersecurity Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;