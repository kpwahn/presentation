import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import Nav from '../nav';
import SocketDabble from '../socket-dabble';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  }
});

let App = (props) => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Nav />
        <SocketDabble />
      </MuiThemeProvider>
    </div>
  )
}

export default App;