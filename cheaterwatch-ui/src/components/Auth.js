// src/components/Auth.js
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, OutlinedInput, Button, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputLabel-root': {
    color: '#fff',
    marginRight: theme.spacing(2),
    '&.Mui-focused': {
      color: '#00ff8c',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: '#fff',
    },
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00ff8c',
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await auth.currentUser.updateProfile({ displayName: username });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isLogin ? 'Login' : 'Signup'}
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <StyledFormControl fullWidth variant="outlined">
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              id="username"
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </StyledFormControl>
        )}
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </StyledFormControl>
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </StyledFormControl>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <StyledButton type="submit" variant="contained">
              {isLogin ? 'Login' : 'Signup'}
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledOutlinedButton variant="outlined" onClick={handleSwitch}>
              {isLogin ? 'Create an account' : 'Login instead'}
            </StyledOutlinedButton>
          </Grid>
        </Grid>
      </form>
    </StyledContainer>
  );
};

export default Auth;
