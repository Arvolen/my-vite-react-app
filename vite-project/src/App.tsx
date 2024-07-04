import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/homeScreen';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import Welcome from './pages/welcome';
import NotFound from './pages/NotFound'; // Import the NotFound component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} /> {/* Default route */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/user/home" element={<Home />} />
        <Route path="/user/register" element={<AdminRegister />} />
        <Route path="/user/login" element={<AdminLogin />} />
        {/* Add more routes here */}
        <Route path="*" element={<Navigate to="/welcome" />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
