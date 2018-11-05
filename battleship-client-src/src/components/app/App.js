import React, { Component } from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import Play_Area from '../play-area/Play-Area';
import Chat_Area from '../chat-area/Chat-Area';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Play_Area />
        <Chat_Area />
        <Footer />
      </div>
    );
  }
}

export default App;
