// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import bcrypt from 'bcryptjs';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = localStorage.getItem('user');
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, username, email, password')
        .eq('username', username)
        .single();

      if (error) {
        throw new Error('User not found');
      }

      const isValidPassword = await bcrypt.compare(password, data.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } catch (error) {
      console.error('Error logging in:', error.message);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);