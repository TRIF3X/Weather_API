import React from 'react';
import { Card, Icon } from 'semantic-ui-react'



const WeatherCard = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>{props.data.weather[0].description}</Card.Meta>
        </Card.Content>
    </Card>
  )


export default WeatherCard;