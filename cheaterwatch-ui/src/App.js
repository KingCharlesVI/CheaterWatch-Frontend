// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'; // Import Homepage component
import FileReport from './components/FileReport';
import Cheaters from './components/Cheaters';
import Auth from './components/Auth';
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Homepage />} /> {/* Render Homepage component at root URL */}
            <Route path="/file-report" element={<FileReport />} />
            <Route path="/cheaters" element={<Cheaters />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
        <Footer /> {/* Include Footer component */}
      </div>
    </Router>
  );
}

export default App;