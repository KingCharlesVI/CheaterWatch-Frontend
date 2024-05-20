// Cheaters.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, CardContent, Typography } from '@mui/material';
import mw3Image from '../assets/mw3.png';
import warzoneImage from '../assets/wz.png';
import valorantImage from '../assets/valorant.png';
import apexImage from '../assets/logo-Apex-Legends.png';
import '../styles/Cheaters.css'; // Import the CSS file

const Cheaters = () => {
  return (
    <Container maxWidth="lg">
      <div className="card-container"> {/* Apply container class */}
        <div className="card"> {/* Apply card class */}
          <Link to="/mw3">
            <img src={mw3Image} alt="MW3" />
            <CardContent className="card-content"> {/* Apply card-content class */}
              <Typography variant="h5">Call of Duty Modern Warfare 3</Typography>
            </CardContent>
          </Link>
        </div>
        {/* Repeat the above structure for other games */}
        <div className="card">
          <Link to="/warzone">
            <img src={warzoneImage} alt="Warzone" />
            <CardContent className="card-content">
              <Typography variant="h5">Call of Duty Warzone</Typography>
            </CardContent>
          </Link>
        </div>
        <div className="card">
          <Link to="/valorant">
            <img src={valorantImage} alt="Valorant" />
            <CardContent className="card-content">
              <Typography variant="h5">Valorant</Typography>
            </CardContent>
          </Link>
        </div>
        <div className="card">
          <Link to="/apex">
            <img src={apexImage} alt="Apex Legends" />
            <CardContent className="card-content">
              <Typography variant="h5">Apex Legends</Typography>
            </CardContent>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cheaters;