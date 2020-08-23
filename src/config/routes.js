import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import MealsListContainer from '../pages/MealsListContainer/MealsListContainer';

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/meals' component={MealsListContainer} />
    </Switch>
)