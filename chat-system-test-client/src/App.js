import React, { Component } from 'react';
import io from 'socket.io-client';
import {Launcher} from 'react-chat-window'

const socket = io.connect('http://localhost:3001');

class App extends Component {
	constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 

  render() {
    return (
      <div className="App">
				<Launcher
					agentProfile={{
						teamName: 'Friend Chat',
						imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
					}}
					onMessageWasSent={this._onMessageWasSent.bind(this)}
					messageList={this.state.messageList}
					showEmoji
				/>
      </div>
    );
  }
}

export default App;
