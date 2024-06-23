import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';

const CustomAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <img src={logo} alt="Logo" style={{ marginRight: 16, height: 40 }} />
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Menu
          </Typography>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Menu
          </Typography>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Menu
          </Typography>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Menu
          </Typography>
        </Box>
        <IconButton onClick={handleMenu} color="inherit">
          <Avatar alt="User" src={profile} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
