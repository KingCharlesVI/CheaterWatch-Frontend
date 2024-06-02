// src/components/UserDashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/UserDashboard.css'

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome, {user.username}!</p>
    </div>
  );
};

export default UserDashboard;