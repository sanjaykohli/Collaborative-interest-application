// LNMIIT
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';

function Lnmiit() {
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
    backgroundColor: '#f2f2f2', // Light pastel color close to white
    textAlign: 'left',
    color: '#f0e5e5', // Light pastel color close to white
  };

  return (
    <div className='lnmiit' style={{ marginTop: '100px' }}>
      <Navbar />
      <div className='lnmiit-container' style={{ padding: '20px', border: '1px solid #ccc' }}> {/* Light linen color */}
        <h2 style={{ color: '#f0e5e5' }}>LNMIIT</h2> {/* Light pastel color close to white */}
        <p style={{ color: '#f0e5e5' }}>
          The LNMIIT is one of the best universities of India when it comes to Infrastructure, Campus, Hostel or Academic Facilities and Faculty. Located at outskirts of Jaipur, The LNMIIT provides career opportunities that no other institute can provide.
        </p>
        <h3 style={{ color: '#f0e5e5' }}>Events at LNMIIT</h3> {/* Light pastel color close to white */}
        <ul>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>LNMIIT Techfest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Technical</p> {/* Light pastel color close to white */}
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>LNMIIT Cultural Fest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Cultural</p> {/* Light pastel color close to white */}
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>LNMIIT Sports Meet</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Sports</p> {/* Light pastel color close to white */}
          </li>
        </ul>

        <h3 style={{ color: '#f0e5e5' }}>Facilities at LNMIIT</h3> {/* Light pastel color close to white */}
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

export default Lnmiit;
