// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default PrivateRoute;