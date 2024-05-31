import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/file-report" onClick={toggleDrawer(false)}>
        <ListItemText primary="File a Report" />
      </ListItem>
      <ListItem button component={Link} to="/cheaters" onClick={toggleDrawer(false)}>
        <ListItemText primary="Cheaters" />
      </ListItem>
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
            <li><Link to="/file-report">File a Report</Link></li>
            <li><Link to="/cheaters">Cheaters</Link></li>
            <li><Link to="/auth">Login/Signup</Link></li>
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