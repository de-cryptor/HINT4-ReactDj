import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Home from '../pages/home';
import Articles from '../pages/articles';
import About from '../pages/about';
import Register from '../pages/register';
import User from '../pages/user';
import Opportunities from '../pages/opportunities';
import Support from '../pages/support';
import Login from '../pages/login';
import Logout from '../pages/logout';

export default ({ match }) => (
    <Switch>
        <Route exact path={`${match.url}/home`} component={Home} />
        <Route exact path={`${match.url}/articles`} component={Articles.List} />
        {/* <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/support" component={Support} /> */}
        <Route path={`${match.url}/about`} component={About} />
        <Route path={`${match.url}/register`} component={Register} />
        <Route path={`${match.url}/profile`} component={User} />
        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/logout`} component={Logout} />
        <Route render={() => <Redirect to="/react-dj/home" />} />
    </Switch>
);