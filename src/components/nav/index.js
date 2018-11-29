import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

let Nav = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;