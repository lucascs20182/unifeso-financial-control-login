import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import CreateUser from './pages/CreateUser/CreateUser';

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/users" component={CreateUser} />
            </Switch>
        </BrowserRouter>
    )
}
