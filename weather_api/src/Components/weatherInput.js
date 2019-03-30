import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import Axios from 'axios';
import WeatherCard from './weatherCard.js'
import '../App.scss';


export default class WeatherInput extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            results: null,
            error: null,
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
                    units: 'imperial',
                    APPID: '5da81634d0b1d96291395744db3c9d33'
                }
            })
            .then(weather => {
                this.setState({ error: null })
                this.setState({ results: weather })
            })
            .catch(err => {
                this.setState({ results: null })
                this.setState({ error: err })
            })

    }

    render() {
        return(
        <div>
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
            {this.state.results == null ? null : WeatherCard(this.state.results)}
            {this.state.error != null ? <div>Invalid zipcode</div> : null}
        </div>
        )
    }
}