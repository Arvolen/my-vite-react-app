import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the Home Screen. 
        Here you can manage your contacts.</p>
      <div className="button-group">
        <Link to="/admin-register">
          <button className="nav-button">Your Contacts</button>
        </Link>
        <Link to="/admin-login">
          <button className="nav-button">Search Contacts</button>
        </Link>
        <Link to="/admin-login">
          <button className="nav-button">Update Contacts</button>
        </Link>
        <Link to="/admin-login">
          <button className="nav-button">Delete Contacts</button>
        </Link>
        <Link to="/welcome">
          <button className="nav-button">Logout</button>
        </Link>
        {/* Add more navigation buttons as needed */}
      </div>
    </div>
  );
};

export default Home;
