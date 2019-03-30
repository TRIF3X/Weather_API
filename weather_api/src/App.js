import React, { Component } from 'react';
import WeatherInput from './Components/weatherInput.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="Home_main">
        <h1>Welcome to WeatherAPI</h1>
        <WeatherInput />
      </div>
    );
  }
}

export default App;
