import React from 'react';
import { Switch, Route, /*Redirect*/ } from 'react-router-dom';

import Home from '../components/Home/Home';
import MealsListContainer from '../pages/MealsListContainer/MealsListContainer';
import MealContainer from '../pages/MealContainer/MealContainer';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import ProfileContainer from '../pages/ProfileContainer/ProfileContainer';
import NewMealListContainer from '../pages/NewMealListContainer/NewMealListContainer';
import UpdateMealListContainer from '../pages/UpdateMealListContainer/UpdateMealListContainer';

export default ({ currentUser, setCurrentUser, props }) => (
    <Switch>
        <Route exact path='/' component={Home} currentUser={currentUser}/>
        <Route path='/meals/:id' component={MealContainer} currentUser={currentUser}/>
        <Route path='/meals' component={MealsListContainer} currentUser={currentUser}/>
        <Route path='/signup' component={Register} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
        <Route exact path='/profile/new' component={NewMealListContainer} currentUser={currentUser} />
        <Route path='/profile/:id' render={() => <UpdateMealListContainer props={props} currentUser={currentUser} />} />
        <Route path='/profile' render={() => <ProfileContainer currentUser={currentUser} />} />
    </Switch>
)