import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Heading from './heading';
import { UserDashboard } from '../user';

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: 1
        };
    }

    changeView = (view) => {
        this.setState({view});
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={Heading} />
                    <Route exact path='/user' component={UserDashboard} />
                </Switch>
            </div>
        )
    }


}

export default Landing;