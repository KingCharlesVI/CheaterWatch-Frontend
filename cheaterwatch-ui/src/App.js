// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import FileReport from './components/FileReport';
import Cheaters from './components/Cheaters';
import Auth from './components/Auth';
import BlogPage from './components/BlogPage';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/file-report" element={<FileReport />} />
            <Route path="/cheaters" element={<Cheaters />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;