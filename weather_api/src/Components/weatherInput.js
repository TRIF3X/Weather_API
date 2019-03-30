import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import Axios from 'axios';
import '../App.scss';


export default class WeatherInput extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            results: null
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    getLocation = (location) => {
        Axios
            .get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    zip: location,
                    APPID: '5da81634d0b1d96291395744db3c9d33'
                }
            })
            .then(weather => {
                this.setState({ results: weather })
                console.log(weather)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return(
        <div className='Home_input'>
            <Input
                name='location'
                value={this.state.input}
                onChange={this.handleChange}
                placeholder='City or Zip code'
            />
            <Button
                color={'green'} 
                inverted 
                onClick={() => this.getLocation(this.state.location)}
                content='Get Weather'
            />
        </div>
        )
    }
}