import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import profille from './pages/profille';
import Newincident from './pages/newincidents';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' component={Register} />                
                <Route path='/profille' component={profille} /> 
                <Route path='/incidents/new' component={Newincident} />                  
            </Switch>
        </BrowserRouter>
    )
}