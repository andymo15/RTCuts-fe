import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appointments from '../components/Appointments/Appointments';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import HomePage from '../components/HomePage/HomePage';



export default () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/appointment' component={Appointments} />
        <Route path='/profile' component={ProfileContainer} />
    </Switch>
)
