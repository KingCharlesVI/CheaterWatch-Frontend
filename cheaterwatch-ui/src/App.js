// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'; // Import Homepage component
import FileReport from './components/FileReport';
import Cheaters from './components/Cheaters';
import Auth from './components/Auth';
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Render Homepage component at root URL */}
          <Route path="/file-report" element={<FileReport />} />
          <Route path="/cheaters" element={<Cheaters />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;