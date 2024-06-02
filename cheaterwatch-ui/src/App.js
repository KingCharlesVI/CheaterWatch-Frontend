// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import FileReport from './components/FileReport';
import Cheaters from './components/Cheaters';
import MW3Cheaters from './components/MW3Cheaters';
import WarzoneCheaters from './components/WarzoneCheaters';
import ValorantCheaters from './components/ValorantCheaters';
import ApexCheaters from './components/ApexCheaters';
import Auth from './components/Auth';
import BlogPage from './components/BlogPage';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <div className="routes-container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/file-report" element={
                <PrivateRoute>
                  <FileReport />
                </PrivateRoute>
              } />
              <Route path="/cheaters" element={<Cheaters />} />
              <Route path="/mw3" element={<MW3Cheaters />} />
              <Route path="/warzone" element={<WarzoneCheaters />} />
              <Route path="/valorant" element={<ValorantCheaters />} />
              <Route path="/apex" element={<ApexCheaters />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              } />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;