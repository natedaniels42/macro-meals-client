import React from 'react';
import { Link } from 'react-router-dom';

function Meal(props) {
    const { meal, list } = props;

    const ingredientList = meal.ingredients.map((ingredient) => {
        return <p>{ingredient}</p>
    });

    return (
        <Link to={`/meals/${meal._id}`}>
            <div className="meal-card">
                <img src={meal.image} width="100" alt={meal.name} />
                <p>{meal.name}</p>
                {!list && (
                <div>
                    {ingredientList}
                </div>
                )}
            </div>
        </Link>    
    )
}

export default Meal;