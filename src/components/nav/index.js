import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

let Nav = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <ButtonBase component={Link} to="/" >
          <Typography variant="h6" color="inherit">
            NAME HERE
          </Typography>
        </ButtonBase>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;