import React from 'react';
import Navbar from './Navbar';

function tos() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', 'margin-top': '60px' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{textAlign:'center'   }   }>Terms of service</h1>
        <p>Welcome to VibeTribe, a collaborative platform for college events and clubs. By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms of Service or the Privacy Policy, please do not use our services.</p>

        <h2>Eligibility</h2>
        <p>Our services are intended solely for individuals who are students, faculty, or staff of educational institutions. By using our services, you represent and warrant that you meet these eligibility requirements.</p>

        <h2>User Accounts</h2>
        <p>To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

        <h2>User Content</h2>
        <p>Our services may allow you to upload, submit, or share content, such as event details, club information, or other materials ("User Content"). By submitting User Content, you grant VibeTribe a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, and publicly perform the User Content in connection with operating and providing the services.</p>

        <h2>Intellectual Property</h2>
        <p>VibeTribe and its licensors own all intellectual property rights in the services, including but not limited to software, content, trademarks, and service marks. You may not use our intellectual property without our express written consent.</p>

        <h2>Prohibited Conduct</h2>
        <p>You agree not to use our services for any unlawful or prohibited purposes, including but not limited to:</p>
        <ul>
          <li>Uploading or sharing any content that is illegal, defamatory, obscene, or infringes upon the intellectual property rights of others.</li>
          <li>Engaging in any activity that disrupts or interferes with our services or the rights of others.</li>
          <li>Attempting to gain unauthorized access to our systems or services.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>Our services may provide links or integrations with third-party services. We are not responsible for the content, accuracy, or policies of these third-party services.</p>

        <h2>Termination</h2>
        <p>We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and without prior notice.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>Our services are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the services or the accuracy, reliability, or completeness of any content or information provided through the services.</p>

        <h2>Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, VibeTribe shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p>

        <h2>Governing Law and Dispute Resolution</h2>
        <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or relating to these Terms of Service shall be resolved through binding arbitration in [Location], in accordance with the rules of the [Arbitration Organization].</p>

        <h2>Changes to the Terms of Service</h2>
        <p>We reserve the right to modify or update these Terms of Service at any time. Your continued use of our services after any such changes constitutes your acceptance of the revised Terms of Service.</p>
      </div>
    </div>
  );
}

export default tos;
