import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

function Meal(props) {
    const { meal, list } = props;
    console.log(meal);
    let ingredientList;
    if (meal.ingredients) {
        ingredientList = meal.ingredients.map((ingredient) => {
            return <p>{ingredient}</p>;
            })
        }
    

    return (
        <div>
            <Link to={`/meals/${meal._id}`}>
                <div className="meal-card">
                    <img className="meal-image" src={meal.image} width="250" alt={meal.name} />
                    <p className="meal-name">{meal.name}</p>
                </div>
            </Link>    
            {!list && (
            <div>
                <p>Calories: {meal.calories}</p>
                <p>Carbs: {meal.carbs}</p>
                <p>Protein: {meal.protein}</p>
                <p>Fat: {meal.fat}</p>
                <p>Click <a href={meal.link} target="_blank">here</a> to go to the recipe</p>    
                    {ingredientList}
            </div>            
            )}
        </div>
    )
}

export default Meal;