import React, { Component } from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import PlayArea from '../play-area/Play-Area';
import ChatArea from '../chat-area/Chat-Area';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <PlayArea />
        <ChatArea />
      </div>
    );
  }
}

export default App;
