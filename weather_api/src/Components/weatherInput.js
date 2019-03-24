import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Button from './weatherButton.js';
import '../App.scss';


export default class WeatherInput extends Component {

    render() {
        return(
        <div className='Home_input'>
            <Input placeholder='City or Zip code' />
            {Button('green', 'Get weather')}
        </div>
        )
    }
}