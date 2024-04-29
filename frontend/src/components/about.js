import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <h1 className="about-title">About VibeTribe</h1>
        <p className="about-description">
          Welcome to VibeTribe, a vibrant and collaborative platform designed to
          bring together like-minded individuals with shared interests and
          passions. Our website is a hub for college clubs, fostering a
          community where creativity, exploration, and personal growth thrive.
        </p>
        <p className="about-description">
          At VibeTribe, we believe that clubs are more than just extracurricular
          activities; they are gateways to self-discovery, personal growth, and
          lifelong connections. Whether you're passionate about music, dance,
          debate, theater, or any other pursuit, our platform provides a space
          for you to connect with fellow enthusiasts, share your talents, and
          embark on exciting adventures together.
        </p>
        <p className="about-description">
          Our mission is to create a dynamic environment where students can
          explore their interests, develop new skills, and unleash their
          creativity. We understand that college life is a transformative
          journey, and clubs play a vital role in shaping that experience. By
          providing a centralized platform, we aim to make it easier for
          students to find and join clubs that align with their interests,
          fostering a sense of belonging and community.
        </p>
        <p className="about-description">
          At VibeTribe, we celebrate diversity and encourage inclusivity. Our
          platform welcomes individuals from all backgrounds, cultures, and
          perspectives, creating a rich tapestry of experiences and
          opportunities for personal and intellectual growth.
        </p>
        <p className="about-description">
          Join us on this exciting journey and unlock the potential of college
          clubs. Connect with like-minded individuals, expand your horizons, and
          create unforgettable memories. Together, we can cultivate a vibrant
          community where passions are ignited, dreams are pursued, and lifelong
          friendships are forged.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;