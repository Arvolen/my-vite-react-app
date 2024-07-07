import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import {  Link } from 'react-router-dom';

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    if (Array.isArray(contacts)) {
      setFilteredContacts(
        contacts.filter(contact =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, contacts]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('/contacts', {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        }
      });
      console.log('API response:', response.data); // Log the response data

      if (Array.isArray(response.data)) {
        setContacts(response.data);
      } else {
        console.error('API response is not an array:', response.data);
        setContacts([]);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setContacts([]); // Ensure contacts is an array even on error
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/contacts/${id}`, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        }
      });
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="contacts-container">
      <h1>Contact List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="button-group">
      <Link to="/user/Contact/add">
          <button className="nav-button">Add a contact</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No contacts found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="button-group">
      <Link to="/user/home">
          <button className="nav-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
