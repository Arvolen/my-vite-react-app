import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// type userData = {
//   name: string;
//   username: string;
// }


const HomeScreen: React.FC = () => {

  // const [userData, setUserData] = useState<userData>();


  // const handleRegister = async () => {
  //   try {
  //     const response = await fetch('/api/users/current', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
  //       }
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch user data');
  //       console.log(response);
  //     }
  //     const userData = await response.json();
  //     setUserData(userData.id); // Assuming your response has an id field
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //     // Handle error, e.g., redirect to login page
  //   }
  // };



  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the Home Screen. Here you can manage your contacts.</p>

      <div className="button-group">
        <Link to="/user/Contact">
          <button className="nav-button">Your Contacts</button>
        </Link>
        <Link to="/user/Games">
          <button className="nav-button">Games</button>
        </Link>
        <Link to="/user/profile">
          <button className="nav-button">Profile</button>
        </Link>
        <Link to="/welcome">
          <button className="nav-button">Logout</button>
        </Link>
 
        {/* Add more navigation buttons as needed */}
      </div>
    </div>
  )
};
export default HomeScreen;
