import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class JoinRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.joinRoom} >
        <TextField
          label="Room Code"
          value={this.state.input}
          onChange={this.handleChange} 
          margin="normal"
          variant="outlined"
        />
        <Button 
          color="primary"
          variant="contained" 
        >
          Join Room 
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(JoinRoom);