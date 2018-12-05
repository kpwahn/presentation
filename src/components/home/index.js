import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Home = (props) => {
  let {classes} = props;

  return (
    <div className={classes.createRoom}>
        <Button 
          color="primary"
          component={Link}
          to="/join-room"
          variant="contained" 
        >
            Join Room 
        </Button>
        <Button 
          color="primary"
          component={Link}
          to="/create-room"
          variant="contained" 
        >
            Create Room
        </Button>
    </div>
  );
}

export default withStyles(styles)(Home);