import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route} from "react-router-dom";
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import Nav from '../nav';
import Home from '../home';

import styles from './styles';
import CreateRoom from '../create-room';
import JoinRoom from '../join-room';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

let App = (props) => {
  let {classes} = props;

  return (
    <div className={classes.app}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route path="/create-room" component={CreateRoom} />
            <Route path="/join-room" component={JoinRoom} />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  )
}

export default withStyles(styles)(App);