import React from 'react';
import { Button } from 'semantic-ui-react';

function app_button(color, text) {
    return <Button color={color} inverted>{text}</Button>
}

export default app_button