import React, { useState } from 'react';
import styled from 'styled-components';
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
  border: 2px solid ${({ error }) => (error ? 'red' : '#f70776')};
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

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    college: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      setPasswordError('Passwords do not match');
      return;
    }

    if (!validatePassword(formData.password)) {
      console.error('Password does not meet the requirements');
      setPasswordError('Password should be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character from @$!%*?&');
      return;
    }

    setPasswordError('');

    const { confirmPassword, ...dataToSend } = formData;
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
        console.log('User signed up successfully');
        window.location.href = 'http://localhost:3000/home';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <BackgroundWrapper>
    <Container>
      <Title>Join VibeTribe</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="college">College:</Label>
        <Input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
        />
        <Label htmlFor="password" error={passwordError}>
          Password: {passwordError && `(${passwordError})`}
        </Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          error={passwordError}
        />
        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      <Divider>OR</Divider>
      {/* Add OAuth button component or link here */}
      <SignupLink>
        Already have an account? <a href="/">Log in</a>
      </SignupLink>
    </Container>
    </BackgroundWrapper>
  );
};

export default SignUp;