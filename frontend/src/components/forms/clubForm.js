import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  width: 900px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #007bff;
  border: 1px solid #007bff;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #0056b3;
    border-color: #004a99;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  /* Centering */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
function ClubForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollmentNumber: '',
    phoneNumber: '',
    previousExperience: '',
    videoUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    try {
      await axios.post('http://localhost:4000/club', formData);
      console.log('Form submitted successfully');
      // Clear the form
      setFormData({
        name: '',
        email: '',
        enrollmentNumber: '',
        phoneNumber: '',
        previousExperience: '',
        videoUrl: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="name">Name:</label>
        <FormControl
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email:</label>
        <FormControl
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="enrollmentNumber">Enrollment Number:</label>
        <FormControl
          type="text"
          id="enrollmentNumber"
          name="enrollmentNumber"
          value={formData.enrollmentNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <FormControl
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="previousExperience">Previous Experience:</label>
        <Textarea
          id="previousExperience"
          name="previousExperience"
          value={formData.previousExperience}
          onChange={handleChange}
        ></Textarea>
      </FormGroup>
      <FormGroup>
        <label htmlFor="videoUrl">Video URL:</label>
        <FormControl
          type="url"
          id="videoUrl"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}

export default ClubForm;