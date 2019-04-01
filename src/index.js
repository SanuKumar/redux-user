import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Landing from './dashboard/landing';

ReactDOM.render(
    <Provider>
        <Landing />
    </Provider>,
document.getElementById('root'));


