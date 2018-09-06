import React, { Component } from "react";
import io from "socket.io-client";

class Chatbox extends Component {
  state = {
    username: '',
    message: '',
    messages: [],
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  socket = io('http://localhost:3001');

  componentDidMount = () => {
    this.socket.on('RECEIVE_MESSAGE', (data) => {
      this.addMessage(data);
    });
  }
  
  addMessage = data => {
    console.log(data);
    this.setState({ messages: [...this.state.messages, data] });
    console.log(this.state.messages);
  };

  sendMessage = e => {
    e.preventDefault();
    if (this.state.message !== "") {
      this.socket.emit('SEND_MESSAGE', {
        author: this.props.currentUser.user.username,
        message: this.state.message,
        id: Math.floor(Math.random() * 10000),
      })
    }
    this.setState({ message: '',});
    
  }


  render(){   
    return <div className="chatbox">
                <div className="chat-title">Let's Chat</div>
                <div className="messages">
                  {this.state.messages.map(message => {
                    return <div key={message.id}>
                        {message.author}: {message.message}
                      </div>;
                  })}
                </div>
              <input type="text" placeholder="Message" value={this.state.message} className="form-control" name="message" onChange={this.handleChange} />
                <br />
                <button className="btn btn-primary form-control" onClick={this.sendMessage}>
                  Send
                </button>
            </div>
  }
}


export default Chatbox;
