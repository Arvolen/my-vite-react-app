import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import './Admin.css';

type FormData = {
  username: string;
  email: string;
  password: string;
};

type ResponseData = {
  _id: string;
  email: string;
};

const AdminRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegister = async () => {
    try {
      console.log('Submitting form data:', formData);
      const response: AxiosResponse<ResponseData> = await axios.post(
        `http://localhost:5001/api/users/register`,
        formData,
        { timeout: 5000 } // Set timeout to 5 seconds
      );
      console.log('Response:', response);
      const { email } = response.data;
      alert(`Admin with email: ${email} registered successfully!`);
      navigate('/user/login');
    } catch (error) {
      console.error('Error during registration:', error);
      if (axios.isAxiosError(error)) {
        console.error('Axios error response:', error.response);
        alert('Registration failed: ' + (error.response?.data?.message || error.message));
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default AdminRegister;
