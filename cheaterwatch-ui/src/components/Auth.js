// src/components/Auth.js
import React, { useState } from 'react';
import { Container, FormControl, InputLabel, OutlinedInput, Button, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

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

const Auth = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signup(username, password);
      toast.success('Signup successful. Redirecting to homepage...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
      toast.success('Login successful. Redirecting to homepage...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isLogin ? 'Login' : 'Signup'}
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
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