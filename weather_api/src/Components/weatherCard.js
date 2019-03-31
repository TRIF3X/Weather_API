import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const date = new Date()
const today = date.toLocaleDateString("en-US", {
    "year": "numeric",
    "month": "long"
});
const time = date.toLocaleTimeString("en-US", {
    "hour": "2-digit",
    "minute": "2-digit"
});


const WeatherCard = (props) => (
    <Card>
        <Card.Content>
            <Image floated='right' size='mini' src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} />
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>{props.data.weather[0].description}</Card.Meta>
        </Card.Content>
        <Card.Content>
            <Card.Header textAlign='center'>Details</Card.Header>
            <Card.Content>Current &nbsp;&nbsp; {props.data.main.temp} &#x2109;</Card.Content>
            <Card.Content>High &nbsp;&nbsp; {props.data.main.temp_max} &#x2109;</Card.Content>
            <Card.Content>Low &nbsp;&nbsp; {props.data.main.temp_min} &#x2109;</Card.Content>
            <Card.Content>Wind &nbsp;&nbsp; {props.data.wind.speed} mph</Card.Content>
            <Card.Content>Humidity &nbsp;&nbsp; {props.data.main.humidity}%</Card.Content>
        </Card.Content>
        <Card.Content extra className='card_extra'>
            {today}  {time}
        </Card.Content>
    </Card>
  )


export default WeatherCard;