import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Meal.css';
import MealListModel from '../../models/MealList';

class Meal extends React.Component {
    state = {
        mealList: '',
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        MealListModel.addMeal(this.state.mealList, this.props.match.params.id)
            .then((result) => {
                console.log(this.props.meals)
                console.log(result);
                result.meals.push(this.props.meal);
            })
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div className="meal-box">
                <Link to={`/meals/${this.props.meal._id}`}>
                    <div className="meal-card">
                        <img className="meal-image" src={this.props.meal.image} width="250" alt={this.props.meal.name} />
                        <p className="meal-name">{this.props.meal.name}</p>
                    </div>
                </Link>    
                {!this.props.list && (
                <div>
                    <div className="ingredient-list">
                        <h4>Ingredient List</h4>
                        <div className="ingredient-box">
                        {this.props.meal.ingredients && (
                            this.props.meal.ingredients.map((ingredient, index) => {
                                return <p key={`ingredient${index}`}>{ingredient}</p>;
                            })
                            
                        )}
                        </div>
                    </div>
                    <p>Click <a className="meal-link" href={this.props.meal.link} target="_blank" rel="noopener norefferer">here</a> to go to the recipe</p>    
                    <div className="nutrition-info">
                        <p>Calories: {this.props.meal.calories}</p>
                        <p>Carbs: {this.props.meal.carbs}</p>
                        <p>Protein: {this.props.meal.protein}</p>
                        <p>Fat: {this.props.meal.fat}</p>
                    </div>
                    <form className="add-meal" onSubmit={this.handleSubmit}>
                        {this.props.mealLists && (
                            this.props.mealLists.map((list, index) => {
                                return <div>
                                <input type="radio" key={`meallist${index}`} name="mealList"onInput={this.handleChange} value={list._id} />
                                <label htmlFor={`meallist${index}`}>{list.name}</label>
                            </div>
                                })
                        )}
                    
                        <button type="submit">Add Meal to List</button>
                    </form>
                </div>   
                )}
            </div>
        )
    }
}

export default withRouter(Meal);