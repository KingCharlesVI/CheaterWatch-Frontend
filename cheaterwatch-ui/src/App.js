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
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;