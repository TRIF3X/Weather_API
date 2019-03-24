import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Button from './Components/weatherButton.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="Home_main">
        <h2>Welcome to Weather_API</h2>
        <div className='Home_firstDiv'>
        <Input placeholder='City or Zip code' />
        {Button('green', 'Get weather')}
        </div>
      </div>
    );
  }
}

export default App;
