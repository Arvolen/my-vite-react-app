import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import axios, { AxiosResponse } from 'axios';

type FormData = {
    email: string;
    password: string;
}
type ResponseData = {
    accessToken: string;
}

const AdminLogin: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    const [accessToken, setAccessToken] = useState<string | null>(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        try {
            const response: AxiosResponse<ResponseData> = await axios.post(
                'http://localhost:5001/api/users/login',
                formData);

            const { accessToken } = response.data; // Access the accessToken from the response data
            sessionStorage.setItem('accessToken', accessToken);
            setAccessToken(accessToken);
            console.log(accessToken)
            navigate('/adminHome');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error logging in user:',);
            } else {
                console.error('Other error:', error);
            }
            // Handle the error, e.g., display an error message to the user
        }
    }


  return (
    <div className="container">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;