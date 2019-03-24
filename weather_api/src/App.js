import React, { Component } from 'react';
import WeatherInput from './Components/weatherInput.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="Home_main">
        <h2>Welcome to Weather_API</h2>
        <WeatherInput />
      </div>
    );
  }
}

export default App;
