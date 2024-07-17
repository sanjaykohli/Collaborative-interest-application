import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/ingenuity.jpeg';
import image2 from '../images/TEDxNIITUniversity.jpg';
import image3 from '../images/Vollyball.jpg';
import image4 from '../images/sinusoid.png';
import image5 from '../images/rangmanchniit.jpeg';
import collegeImage1 from '../images/bml.jpeg';
import collegeImage2 from '../images/lnmiit.jpg';
import collegeImage3 from '../images/amity.jpg';
import collegeImage4 from '../images/raffels.jpeg';
import { Link } from 'react-router-dom';
// import { isAuthenticated } from './utils';





function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <div className="home-container">
      <Navbar className="navvv" />
      <div className="home-text">
        <h1>
         <span className='logoname'> Bringing Clubs Together, For a Campus That Shines</span>
        </h1>
      </div>
      <br />
      <div className="row py-3">
        <div className="col">
          <Carousel>
            <Carousel.Item>
              <img className="carousel-image" src={image1} alt=" 1" />
              <Carousel.Caption>
                <h3 className="ingenuity"></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image2} alt=" 2" />
              <Carousel.Caption>
                <h3 className="tedx"></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image3} alt=" 3" />
              <Carousel.Caption>
                <h3 className="cricket"></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image4} alt=" 4" />
              <Carousel.Caption>
                <h3 className="sinusoid"></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image5} alt="5" />
              <Carousel.Caption>
                <h3 className="rangmanch"></h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>


      {/* College Container Section */}
      <div className="college-container">

      <h2>Nearby Universities</h2>


        
        <div className="college-item">
          <div className="college-image-container">
            <Link to="/bmlmunjal">
              <img className="college-image rounded-circle-left" src={collegeImage1} alt="College 1" />
            </Link>
          </div>
          <div className="college-text-container">
            <h3>BML MUNJAL</h3>
            <p>
              BML Munjal University (BMU) seeks to transform higher education in India by creating a
              world-class, innovation-led, teaching, learning and research environment. Established in 2014 by
              the founders of the Hero Group, BMU provides inter-disciplinary learning and transformative
              education that empowers students to become innovators, risk-takers and leaders who can take on
              the future.
            </p>
          </div>
        </div>

        <div className="college-item reverse">
          <div className="college-image-container">
            <Link to="/lnmiit">
              <img className="college-image rounded-circle-right" src={collegeImage2} alt="College 2" />
            </Link>
          </div>
          <div className="college-text-container">
            <h3>LNMIIT</h3>
            <p>
              The LNMIIT is one of the best universities of India when it comes to Infrastructure, Campus,
              Hostel or Academic Facilities and Faculty. Located at outskirts of Jaipur, The LNMIIT provides
              career opportunities that no other institute can provide.
            </p>
          </div>
        </div>

        <div className="college-item">
          <div className="college-image-container">
            <Link to="/amity">
              <img className="college-image rounded-circle-left" src={collegeImage3} alt="College 3" />
            </Link>
          </div>
          <div className="college-text-container">
            <h3>AMITY UNIVERSITY</h3>
            <p>Amity University provides world-class education in diverse streams including engineering, management, medical and others.</p>
          </div>
        </div>

        <div className="college-item reverse">
          <div className="college-image-container">
            <Link to="/raffles">
              <img className="college-image rounded-circle-right" src={collegeImage4} alt="College 4" />
            </Link>
          </div>
          <div className="college-text-container">
            <h3>RAFFLES UNIVERSITY</h3>
            <p>
              Raffles University provides unprecedented opportunities to be taught by experts in their
              respective fields with the help of latest technological aids.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;