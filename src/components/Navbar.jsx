import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = (props) => {
  const { buttonValue } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Stop_%26_Shop_2018_logo.svg"
              alt="Logo"
              style={{ height: '40px' }}
            />
          </Link>
        </Typography>
        <Button component={Link} to="/" color="inherit">
          {buttonValue}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
