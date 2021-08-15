import React from 'react';
import reactDOM from 'react-dom'

const div = React.createElement('h1', null, 'Hello react!');

reactDOM.render(div, document.getElementById('app'));