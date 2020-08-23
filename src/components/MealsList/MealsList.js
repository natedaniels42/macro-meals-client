import React from 'react';
import Meal from '../Meal/Meal';

function MealsList(props) {
    const mealsList = props.meals.map((meal) => {
        return <Meal key={meal._id} meal={meal} />
    })

    return (
        <div className="meals-container">
            {mealsList}
        </div>
    );
};

export default MealsList;