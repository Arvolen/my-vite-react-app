import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import {  Link } from 'react-router-dom';

type Contact = {
  name: string;
  email: string;
  phone: string;
};

const UpdateContact: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState<Contact>({name: '', email: '', phone: '' });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newContact);
    try {
      const response = await axios.post('/contacts', newContact, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        }
      });
      setContacts([...contacts, response.data]);
      setNewContact({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };


  return (
    <div className="contacts-container">
      <h1>Contact List</h1>
      
      <div className="add-contact-form">
        <h2>Add Contact</h2>
        <form onSubmit={handleAddContact}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleInputChange}
            required
          />
          <button onClick={handleAddContact}>Add Contact</button>
          
        </form>
      </div>
      <Link to="/user/Contact">
          <button className="nav-button">Back</button>
        </Link>
    </div>

  );
};

export default UpdateContact;
