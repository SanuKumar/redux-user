import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux';
import Landing from './dashboard/landing';
import 'antd/dist/antd.css';

ReactDOM.render(
    <BrowserRouter>
        <Landing />
    </BrowserRouter>,
document.getElementById('root'));


