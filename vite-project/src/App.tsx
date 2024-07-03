import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';

//fallback path /home page

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/user/register" element={<AdminRegister />} />
        <Route path="/user/login" element={<AdminLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
      </Routes>
    </Router>
  );
};

export default App;
