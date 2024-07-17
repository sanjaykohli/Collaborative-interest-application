// Raffles University
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';

function Raffels() {
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
    textAlign: 'left',
    color: '#f0e5e5', // Light pastel color close to white
  };

  return (
    <div className='raffels' style={{ marginTop: '100px' }}>
      <Navbar />
      <div className='raffels-container' style={{ padding: '20px', border: '1px solid #ccc' }}> {/* Light linen color */}
        <h2 style={{ color: '#f0e5e5' }}>Raffles University</h2> {/* Light pastel color close to white */}
        <p style={{ color: '#f0e5e5' }}>
          Raffles University provides unprecedented opportunities to be taught by experts in their respective fields with the help of latest technological aids.
        </p>
        <h3 style={{ color: '#f0e5e5' }}>Events at Raffles University</h3> {/* Light pastel color close to white */}
        <ul>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>Raffles Innovation Summit</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Technical</p> {/* Light pastel color close to white */}
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>Raffles Cultural Fest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Cultural</p> {/* Light pastel color close to white */}
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>Raffles Sports Tournament</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Sports</p> {/* Light pastel color close to white */}
          </li>
        </ul>

        <h3 style={{ color: '#f0e5e5' }}>Facilities at Raffles University</h3> {/* Light pastel color close to white */}
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

export default Raffels;
