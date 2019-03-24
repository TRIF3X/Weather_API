import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Button from './weatherButton.js';
import '../App.scss';


export default class WeatherInput extends Component {
    constructor() {
        super()
        this.state = {
            location: ''
        }
    }

    handleChange = (ev) => this.setState({ [ev.target.name]: ev.target.value })

    render() {
        return(
        <div className='Home_input'>
            <Input
                name='location'
                value={this.state.input}
                onChange={this.handleChange}
                placeholder='City or Zip code'
            />
            {Button('green', 'Get weather')}
        </div>
        )
    }
}