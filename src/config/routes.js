import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import MealsListContainer from '../pages/MealsListContainer/MealsListContainer';
import MealContainer from '../pages/MealContainer/MealContainer';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/meals' component={MealsListContainer} />
        <Route path='/meals/:id' component={MealContainer} />
        <Route path='/signup' component={Register} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
    </Switch>
)