
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

type ResponseData = {
    id: Int16Array;
    username: string;
    email: string;
  };

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = sessionStorage.getItem('accessToken');
        if (!accessToken) {
          navigate('/login'); // Redirect to login if access token is not present
          return;
        }
        console.log(accessToken);
        const response: AxiosResponse<ResponseData> = await axios.get('/users/current', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        console.log(response);
        if (!response.data) {
          throw new Error('Failed to fetch user profile');
        }
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error, e.g., redirect to login page
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (!userData) {
    return <div>Loading...</div>; // Placeholder while loading user data
  }

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous screen
  };

  return (
    <div className="profile-container">
      
      <h1>User Profile</h1>
      <div>
        <p>User ID: {userData.id}</p>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        {/* Display additional user information as needed */}
      </div>
      <button onClick={handleBackClick}>Back</button> {/* Back button */}
    </div>
  );
};

export default UserProfile;
