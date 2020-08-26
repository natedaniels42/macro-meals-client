import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

function Meal(props) {
    const { meal, /*list*/ } = props;
    console.log(meal);
    /*const ingredientList = meal.ingredients.map((ingredient) => {
        return <p>{ingredient}</p>
    });*/

    return (
        <Link to={`/meals/${meal._id}`}>
            <div className="meal-card">
                <img className="meal-image" src={meal.image} width="250" alt={meal.name} />
                <p className="meal-name">{meal.name}</p>
                {/*!list && (
                    {ingredientList}            
                )*/}
            </div>
        </Link>    
    )
}

export default Meal;