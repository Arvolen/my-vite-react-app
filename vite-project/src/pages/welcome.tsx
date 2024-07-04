import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to my Application</h1>
      <p>This is the welcome page. To gain access to other function please choose either option.</p>
      <div className="button-group">
        <Link to="/user/register">
          <button className="nav-button">User Register</button>
        </Link>
        <Link to="/user/login">
          <button className="nav-button">User Login</button>
        </Link>
        {/* Add more navigation buttons as needed */}
      </div>
    </div>
  );
};

export default Welcome;
