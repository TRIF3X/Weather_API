import React from 'react';
import { Card } from 'semantic-ui-react'

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
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>{props.data.weather[0].description}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
            {today}  {time}
        </Card.Content>
    </Card>
  )


export default WeatherCard;