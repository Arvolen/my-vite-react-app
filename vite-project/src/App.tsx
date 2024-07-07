import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import Welcome from './pages/welcome';
import NotFound from './pages/NotFound'; // Import the NotFound component
import HomeScreen from './pages/homeScreen';
import UserProfile from './pages/userProfile';
import Contacts from './pages/contacts';
import AddContacts from './pages/addContact';
import UpdateContact from './pages/updateContact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} /> {/* Default route */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/user/home" element={<HomeScreen />} />
        <Route path="/user/register" element={<AdminRegister />} />
        <Route path="/user/login" element={<AdminLogin />} />
        <Route path="/user/Contact" element={<Contacts />} />
        <Route path="/user/Games" element={<AdminLogin />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/Contact/add" element={<AddContacts />} />
        <Route path="/user/Contact/update" element={<UpdateContact />} />
        {/* Add more routes here */}
        <Route path="*" element={<Navigate to="/welcome" />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
