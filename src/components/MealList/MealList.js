import React from 'react';
import Meal from '../Meal/Meal';

function MealList(props) {
    return (
        <div>
            <p>{props.mealList.name}</p>
            <a href="/search"><button>Search Meals</button></a>
        </div>
    )
}

export default MealList;