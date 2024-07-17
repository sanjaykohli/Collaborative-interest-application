// Amity University
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';

function Amity() {
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
    <div className="amity" style={{ marginTop: '100px' }}>
      <Navbar />
      <div
        className="amity-container"
        style={{ padding: '20px', border: '1px solid #ccc' }} // Light linen color
      >
        <h2 style={{ color: '#f0e5e5' }}>Amity University</h2> {/* Light pastel color close to white */}
        <p style={{ color: '#f0e5e5' }}>
          Amity University is a premier institution of higher education that offers world-class academic programs in diverse streams, including engineering, management, medical sciences, and more. With a commitment to excellence, Amity University provides a nurturing environment for students to explore their potential and achieve their academic goals.
        </p>
        <h3 style={{ color: '#f0e5e5' }}>Events at Amity University</h3> {/* Light pastel color close to white */}
        <ul>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>Amity Youth Fest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Cultural</p> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>
              Amity Youth Fest is an annual celebration of cultural diversity, showcasing the talents of students through various artistic performances, exhibitions, and competitions.
            </p>
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>Amity TechFest</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Technical</p> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>
              Amity TechFest is a premier technical festival that brings together students, professionals, and industry experts to explore the latest advancements in technology and engage in hands-on learning experiences.
            </p>
          </li>
          <li>
            <h4 style={{ color: '#f0e5e5' }}>Amity Sports Meet</h4> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>Genre: Sports</p> {/* Light pastel color close to white */}
            <p style={{ color: '#f0e5e5' }}>
              The Amity Sports Meet is an annual event that fosters a spirit of sportsmanship and friendly competition among students, promoting physical fitness and teamwork.
            </p>
          </li>
        </ul>
        <h3 style={{ color: '#f0e5e5' }}>Facilities at Amity University</h3> {/* Light pastel color close to white */}
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
              <td style={thTdStyle}>
                The state-of-the-art library at Amity University boasts an extensive collection of books, journals, and online resources, catering to various academic disciplines. With quiet study areas and modern amenities, the library provides an ideal environment for research and self-study.
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>Laboratories</td>
              <td style={thTdStyle}>
                Amity University houses well-equipped laboratories that facilitate practical learning experiences for students. These cutting-edge facilities are designed to provide hands-on training and foster a deeper understanding of theoretical concepts.
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>Sports Complex</td>
              <td style={thTdStyle}>
                The university features a modern sports complex that caters to various indoor and outdoor sports activities. With top-notch facilities and dedicated coaching staff, students can explore their athletic potential and participate in competitive sports events.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Amity;
