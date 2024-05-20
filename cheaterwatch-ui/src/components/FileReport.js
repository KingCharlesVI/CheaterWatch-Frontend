import React, { useState } from 'react';
import { Container, FormControl, InputLabel, OutlinedInput, Button, Typography, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Snackbar } from '@mui/material';
import CallOfDutyMWLogo from '../assets/mw3.png';
import WarzoneLogo from '../assets/wz.png';
import ValorantLogo from '../assets/valorant.png';
import ApexLegendsLogo from '../assets/apex.png';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000', // Black background
  color: '#fff', // White text
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputLabel-root': {
    color: '#fff', // White label color
    '&.Mui-focused': {
      color: '#00ff8c', // Green color when focused
    },
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: '#fff', // White text color
    },
    '& fieldset': {
      borderColor: '#fff', // White border color
    },
    '&:hover fieldset': {
      borderColor: '#fff', // White border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00ff8c', // Green border color when focused
    },
  },
  '& .MuiSelect-select': {
    color: '#fff', // White text color for select
    backgroundColor: '#000', // Black background for select
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff', // White border color for select
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#00ff8c', // Green border color when focused
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00ff8c',
  color: '#000',
  '&:hover': {
    backgroundColor: '#00cc75',
  },
}));

const CheatReportForm = () => {
  const [game, setGame] = useState('');
  const [username, setUsername] = useState('');
  const [suspectedCheats, setSuspectedCheats] = useState([]);
  const [videoLink, setVideoLink] = useState('');

  const handleGameChange = (e) => {
    setGame(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCheatsChange = (e) => {
    setSuspectedCheats(e.target.value);
  };

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.cheaterwatch.com/api/reports', {
        game,
        username,
        suspected_cheats: suspectedCheats,
        proof_link: videoLink,
      });
      console.log('Report created successfully:', response.data);
      // Clear form fields after successful submission
      setGame('');
      setUsername('');
      setSuspectedCheats([]);
      setVideoLink('');
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  const cheats = ['Wallhacks', 'Aimbot', 'Speedhacks', 'Unlock'];

  const gameOptions = [
    { value: 'Call of Duty Modern Warfare III', label: 'Call of Duty Modern Warfare III', logo: CallOfDutyMWLogo },
    { value: 'Call of Duty Warzone', label: 'Call of Duty Warzone', logo: WarzoneLogo },
    { value: 'Valorant', label: 'Valorant', logo: ValorantLogo },
    { value: 'Apex Legends', label: 'Apex Legends', logo: ApexLegendsLogo },
  ];

  const [alertOpen, setAlertOpen] = useState(false);

  const handleSubmitWithAlert = (e) => {
    e.preventDefault();
    // Handle form submission...
    setAlertOpen(true); // Open the alert after successful submission
  };

  const handleCloseAlert = () => {
    setAlertOpen(false); // Close the alert when dismissed by the user
  };

  return (
    <StyledContainer maxWidth="sm">
    <Snackbar
      open={alertOpen}
      autoHideDuration={6000} // Adjust as needed
      onClose={handleCloseAlert}
      message="Report submitted successfully!"
    />
      <Typography variant="h4" gutterBottom>
        Cheat Report Form
      </Typography>
      <form onSubmit={handleSubmitWithAlert}>
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="game">Game</InputLabel>
          <Select
            id="game"
            value={game}
            onChange={handleGameChange}
            input={<OutlinedInput label="Game" />}
            renderValue={(selected) => {
              const selectedGame = gameOptions.find(option => option.value === selected);
              return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={selectedGame.logo} alt={selectedGame.label} style={{ width: 24, height: 24, marginRight: 8 }} />
                  {selectedGame.label}
                </div>
              );
            }}
          >
            {gameOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <img src={option.logo} alt={option.label} style={{ width: 24, height: 24, marginRight: 8 }} />
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            id="username"
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </StyledFormControl>
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="suspected-cheats">Suspected Cheats</InputLabel>
          <Select
            id="suspected-cheats"
            multiple
            value={suspectedCheats}
            onChange={handleCheatsChange}
            input={<OutlinedInput label="Suspected Cheats" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {cheats.map((cheat) => (
              <MenuItem key={cheat} value={cheat}>
                <Checkbox
                  checked={suspectedCheats.indexOf(cheat) > -1}
                  style={{ color: suspectedCheats.indexOf(cheat) > -1 ? '#00ff8c' : undefined }}
                />
                <ListItemText primary={cheat} />
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="video-link">Link to video proof</InputLabel>
          <OutlinedInput
            id="video-link"
            label="Link to video proof"
            placeholder="Enter video link"
            value={videoLink}
            onChange={handleVideoLinkChange}
          />
        </StyledFormControl>
        <StyledButton type="submit" variant="contained" fullWidth>
          Submit
        </StyledButton>
      </form>
    </StyledContainer>
  );
};

export default CheatReportForm;