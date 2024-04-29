import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';
import Footer from './footer';

const backgroundImages = [
  'bg-image1',
  'bg-image2',
  'bg-image3',
  'bg-image4',
  'bg-image5',
  'bg-image6',
  'bg-image7',
  'bg-image8',
  'bg-image9',
  'bg-image10',
  'bg-image11',
  'bg-image12'
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`background-image ${image} ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
      <Navbar className="navvv" />
      <Footer />

    </div>
  );
}

export default Home;


