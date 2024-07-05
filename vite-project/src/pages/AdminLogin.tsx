import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import axios from '../api/axios';
import  {  AxiosResponse } from 'axios';

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
            const response: AxiosResponse<ResponseData> = await axios.post('/users/login', formData);

            const { accessToken } = response.data; // Access the accessToken from the response data
            sessionStorage.setItem('accessToken', accessToken);
            console.log('This is the current access token: ', accessToken);
            navigate('/user/home');
        }catch (error: any) {
            if (error.response) { // AxiosError handling simplified
              console.error('Error logging in user:', error.response.data);
            } else {
              console.error('Other error:', error.message);
            }
            // Handle the error, e.g., display an error message to the user
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
