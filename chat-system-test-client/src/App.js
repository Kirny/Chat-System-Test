import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
