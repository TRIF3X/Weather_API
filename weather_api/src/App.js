import React, { Component } from 'react';
import Button from './Components/weatherButton.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Home_main">
        Welcome to Weather_API
        {Button('green', 'Get weather')}
      </div>
    );
  }
}

export default App;
