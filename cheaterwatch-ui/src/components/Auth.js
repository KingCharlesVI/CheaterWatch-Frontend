// src/components/Auth.js
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, OutlinedInput, Button, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import PNG icons
import steamLogo from '../assets/steam.png';
import eaLogo from '../assets/ea.png';
import epicLogo from '../assets/epic.png';

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
    marginRight: theme.spacing(2),
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
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00ff8c',
  color: '#000',
  '&:hover': {
    backgroundColor: '#00cc75',
  },
}));

const StyledOutlinedButton = styled(Button)(({ theme }) => ({
  color: '#00ff8c',
  borderColor: '#00ff8c',
  '&:hover': {
    borderColor: '#00cc75',
    color: '#00cc75',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
}));

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isLogin ? 'Login' : 'Signup'}
      </Typography>
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <>
            <StyledFormControl fullWidth variant="outlined">
              <InputLabel htmlFor="username">Username</InputLabel>
              <OutlinedInput
                id="username"
                label="Username"
                placeholder="Enter your username"
                required
              />
            </StyledFormControl>
            <StyledFormControl fullWidth variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                required
              />
            </StyledFormControl>
          </>
        )}
        {isLogin && (
          <StyledFormControl fullWidth variant="outlined">
            <InputLabel htmlFor="username-or-email">Username or Email</InputLabel>
            <OutlinedInput
              id="username-or-email"
              label="Username or Email"
              placeholder="Enter your username or email"
              required
            />
          </StyledFormControl>
        )}
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            required
          />
        </StyledFormControl>
        {isLogin ? (
          <>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <StyledButton type="submit" variant="contained">
                  Login
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledOutlinedButton variant="outlined" onClick={handleSwitch}>
                  Create an account
                </StyledOutlinedButton>
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom align="center" style={{ marginTop: '1em' }}>
              Or login with your game launcher account
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <StyledIconButton>
                  <img src={steamLogo} alt="Steam" width="32" height="32" />
                </StyledIconButton>
              </Grid>
              <Grid item>
                <StyledIconButton>
                  <img src={eaLogo} alt="EA" width="32" height="32" />
                </StyledIconButton>
              </Grid>
              <Grid item>
                <StyledIconButton>
                  <img src={epicLogo} alt="Epic Games" width="32" height="32" />
                </StyledIconButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <StyledButton type="submit" variant="contained" fullWidth>
              Signup
            </StyledButton>
            <Typography variant="h6" gutterBottom style={{ marginTop: '1em' }}>
              Link Game Launcher Accounts
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <StyledIconButton>
                  <img src={steamLogo} alt="Steam" width="32" height="32" />
                </StyledIconButton>
              </Grid>
              <Grid item>
                <StyledIconButton>
                  <img src={eaLogo} alt="EA" width="32" height="32" />
                </StyledIconButton>
              </Grid>
              <Grid item>
                <StyledIconButton>
                  <img src={epicLogo} alt="Epic Games" width="32" height="32" />
                </StyledIconButton>
              </Grid>
            </Grid>
            <StyledOutlinedButton
              variant="outlined"
              fullWidth
              onClick={handleSwitch}
              style={{ marginTop: '1em' }}
            >
              Login instead
            </StyledOutlinedButton>
          </>
        )}
      </form>
    </StyledContainer>
  );
};

export default Auth;