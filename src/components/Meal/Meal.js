import React from 'react';

function Meal(props) {
    return (
        <div className="meal-card">
            <img src={props.meal.image} width="100" />
            <p>{props.meal.name}</p>
        </div>
    )
}

export default Meal;