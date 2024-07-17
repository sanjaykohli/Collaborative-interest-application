// BML Munjal University
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';

function Bml() {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    color: '#f0e5e5', // Light pastel color close to white
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
    color: '#f0e5e5', // Light pastel color close to white
  };

  return (
    <div className='bml' style={{ marginTop: '100px' }}>
      <Navbar />
      <div className='bml-container' style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h2 style={{ color: '#f0e5e5' }}>BML Munjal University</h2> {/* Light pastel color close to white */}
        <p style={{ color: '#f0e5e5' }}>
          BML Munjal University (BMU) is a private university located in Gurgaon, Haryana, India. It was founded in 2014 by the promoters of the Hero Group.
        </p>
        <h3 style={{ color: '#f0e5e5' }}>Events at BML Munjal University</h3> {/* Light pastel color close to white */}
        <ul>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>BML Techfest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Technical</p> {/* Light pastel color close to white */}
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>BML Cultural Fest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Cultural</p> {/* Light pastel color close to white */}
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>BML Sports Meet</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Sports</p> {/* Light pastel color close to white */}
          </li>
        </ul>

        <h3 style={{ color: '#f0e5e5' }}>Facilities at BML Munjal University</h3> {/* Light pastel color close to white */}
        <table style={tableStyle}>
        <thead>
            <tr>
              <th style={thStyle}>Facility</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Library</td>
              <td style={thTdStyle}>State-of-the-art library with a vast collection of books and online resources</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Laboratories</td>
              <td style={thTdStyle}>Well-equipped laboratories for practical learning experiences</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Sports Complex</td>
              <td style={thTdStyle}>Modern sports facilities for various indoor and outdoor sports activities</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Bml;
