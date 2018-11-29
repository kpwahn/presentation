import React from 'react';

class SocketDabble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connected: false,
      input: '',
      response: ''
    };

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  connect() {
    this.socket = new WebSocket('wss://echo.websocket.org');
    
    this.socket.addEventListener('open', function (event) {
      this.setState({
        connected: true
      });
      this.socket.send('Congrats you are connected')
    }.bind(this));

    this.socket.addEventListener('message', function (event) {
      this.setState({
        response: event.data
      })
    }.bind(this));
  }

  disconnect() {
    this.socket.close();
    this.setState({
      connected: false
    })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  onClick() {
    if(this.socket && this.socket.readyState === 1) {
      this.socket.send(this.state.input)
    } else {
      this.setState({
        response: 'No connection established'
      })
    }
  }

  render() {
    let connection = (this.state.connected) ? 'CONNECTED' : 'NOT CONNECTED';
    let buttonText = (this.state.connected) ? 'disconnect' : 'connect';
    let connectDisconnect = (this.state.connected) ? this.disconnect: this.connect;

    return (
      <div>
        <h3>{connection}</h3>
        <button onClick={connectDisconnect}>{buttonText}</button>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.onClick}>send</button>
        <h4>{this.state.response}</h4>
      </div>
    )
  }
}

export default SocketDabble;