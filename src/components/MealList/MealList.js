import React from 'react';
import Meal from '../Meal/Meal';
import { NavLink } from 'react-router-dom';
import MealListModel from '../../models/MealList';

function MealList(props) {
    const meals = props.mealList.meals.map((meal) => {
        return <Meal key={meal._id} meal={meal} list={true} />
    })
    
    const handleDelete = () => {
        MealListModel.deleteMealList(props.mealList._id)
            .then((result) => props.history.push('/profile'))
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <p>{props.mealList.name}</p>
            <NavLink to='/update'>Update List Name</NavLink>
            <button onClick={handleDelete}>delete</button>
            <a href="/search"><button>Search Meals</button></a>
            {!props.mealList.meals && (
                <p>No Meals Yet</p>
            )}
            {props.mealListmeals && (
                {meals}
            )}
        </div>
    )
}

export default MealList;