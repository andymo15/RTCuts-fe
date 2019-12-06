import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appointments from '../components/Appointments/Appointments';



export default () => (
    <Switch>
        <Route path='/appointment' component={Appointments} />
    </Switch>
)
