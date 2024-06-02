// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../App.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleLogout = () => {
    logout();
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/file-report" onClick={toggleDrawer(false)}>
        <ListItemText primary="File a Report" />
      </ListItem>
      <ListItem button component={Link} to="/cheaters" onClick={toggleDrawer(false)}>
        <ListItemText primary="Cheaters" />
      </ListItem>
      {user && (
        <>
          <ListItem button component={Link} to="/dashboard" onClick={toggleDrawer(false)}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => { handleLogout(); toggleDrawer(false)(); }}>
            <ListItemText primary={<FontAwesomeIcon icon={faSignOutAlt} />} />
          </ListItem>
        </>
      )}
      {!user && (
        <ListItem button component={Link} to="/auth" onClick={toggleDrawer(false)}>
          <ListItemText primary="Login/Signup" />
        </ListItem>
      )}
    </List>
  );

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="desktop-navbar">
        <nav>
          <div className="brand">
            <Link to="/">CheaterWatch</Link>
          </div>
          <ul className="nav-links">
            {user && <li><Link to="/file-report">File a Report</Link></li>}
            <li><Link to="/cheaters">Cheaters</Link></li>
            {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                  <button className="logout-icon" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </button>
                </li>
              </>
            ) : (
              <li><Link to="/auth">Login/Signup</Link></li>
            )}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                CheaterWatch
              </Link>
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;