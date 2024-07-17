import React from 'react';
import Navbar from './Navbar';

function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', marginTop: '60px' }}>
        <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{textAlign:'center'} }>Privacy Policy</h1>
        <p>At VibeTribe, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose personal information when you use our services.</p>

        <h2>Information We Collect</h2>
        <p>Personal Information: When you create an account or use our services, we may collect personal information such as your name, email address, educational institution, and other information you provide.</p>
        <p>Usage Information: We may collect information about how you use our services, such as the pages you visit, the events or clubs you interact with, and other usage data.</p>
        <p>Device Information: We may collect information about the devices you use to access our services, such as the device type, operating system, browser type, and IP address.</p>

        <h2>Use of Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide, maintain, and improve our services.</li>
          <li>To communicate with you about your account, events, clubs, and other relevant information.</li>
          <li>To personalize and enhance your experience with our services.</li>
          <li>To detect and prevent fraud, abuse, and other illegal activities.</li>
          <li>To comply with applicable laws and regulations.</li>
        </ul>

        <h2>Sharing of Information</h2>
        <p>We may share your personal information in the following circumstances:</p>
        <ul>
          <li>With third-party service providers who assist us in operating our services, subject to confidentiality obligations.</li>
          <li>If we are required to do so by law or in response to valid legal processes.</li>
          <li>In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement reasonable security measures to protect the personal information we collect from unauthorized access, disclosure, alteration, or destruction.</p>

        <h2>Third-Party Services</h2>
        <p>Our services may integrate with or link to third-party services. This Privacy Policy does not cover the data collection and use practices of those third-party services.</p>

        <h2>Children's Privacy</h2>
        <p>Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent.</p>

        <h2>Your Choices and Rights</h2>
        <p>You may have certain rights regarding your personal information.</p>
      </div>
    </div>
  );
}


export default PrivacyPolicy;
