import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Button from './Components/weatherButton.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Home_main">
        Welcome to Weather_API
        <Input placeholder='City or Zip code' />
        {Button('green', 'Get weather')}
      </div>
    );
  }
}

export default App;
