import React, { useState } from 'react';
import styled from 'styled-components';
import googleLogo from './google.png';
import image from './image2.jpg';


const BackgroundWrapper = styled.div`
background-image: url(${image});
background-size: 250px 250px; /* Adjust the size of each tile */
background-repeat: repeat; /* Set the background to repeat */
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;


const Container = styled.div`
  width: 500px;
  margin: 100px auto;
  padding: 40px;
  background-position: center; // Adjust as needed
  background-repeat: no-repeat; // Adjust as needed
  background: linear-gradient(to bottom right, #CCCCFF, #D3D3D3);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: slide-up 0.5s ease;

  @keyframes slide-up {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #f70776;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 5px;
  color: #626fe6;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #f70776;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff9999;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #f70776;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;

  &:hover {
    background-color: #ff9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const OAuthButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757575;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const Divider = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #999;
`;



const SignupLink = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #666;

  a {
    color: #e06666;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: #ff9999;
    }
  }
`;

const errorMessageStyle = {
  color: 'red', // Set text color to red for error messages
  fontSize: '14px', // Set font size
  marginTop: '10px', // Add some space between the message and other elements
};


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');

  
  


    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Make a GET request to fetch user data by ID
      fetch(`http://localhost:4000/login/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        // Parse the response data as JSON
        return response.json();
      })
      .then(userData => {
        if (userData.email === email && userData.password === password) {
          window.location.href = 'http://localhost:3000/home';
        } else {

          const errorMessage = document.getElementById('error-message');
          errorMessage.textContent = 'Invalid email or password';
        }
      })
      .catch(error => {
        // Display error message for any other errors on the page
        // Instead of logging to console
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Error: Failed to fetch user data';
      });
    };
    
  


  return (
    <BackgroundWrapper>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>VibeTribe</Title>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="college">College Name:</Label>
        <Input
          type="text"
          id="college"
          name="college"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div id="error-message"    style={errorMessageStyle}  ></div>


        <Button type="submit">Log in</Button>
      </Form>
      <Divider>OR</Divider>
      <OAuthButton href="http://localhost:4000/auth/google">
        <img src={googleLogo} alt="Google Logo" />
        Continue with Google
      </OAuthButton>
      <SignupLink>
        Not registered yet? <a href="/signup">Sign up</a>
      </SignupLink>
    </Container>
    </BackgroundWrapper>
  );
};

export default LoginPage; 