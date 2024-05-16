// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="brand">
        <Link to="/">CheaterWatch</Link> {/* Project title */}
      </div>
      <ul className="nav-links">
        <li><Link to="/file-report">File a Report</Link></li>
        <li><Link to="/cheaters">Cheaters</Link></li>
        <li><Link to="/auth">Signup/Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;