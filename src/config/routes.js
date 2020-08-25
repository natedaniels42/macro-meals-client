import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import MealsListContainer from '../pages/MealsListContainer/MealsListContainer';
import MealContainer from '../pages/MealContainer/MealContainer';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import ProfileContainer from '../pages/ProfileContainer/ProfileContainer';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/meals/:id' component={MealContainer} />
        <Route path='/meals' component={MealsListContainer} />
        <Route path='/signup' component={Register} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
        <Route path='/profile' render={() => <ProfileContainer currentUser={currentUser} />} />
    </Switch>
)