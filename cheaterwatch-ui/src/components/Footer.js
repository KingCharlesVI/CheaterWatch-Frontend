// Footer.js
import React from 'react';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 CheaterWatch. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/KingCharlesVI/CheaterWatch-Frontend" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://discord.gg/xUFtKYwDbV" target="_blank" rel="noopener noreferrer">
            <FaDiscord /> Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;