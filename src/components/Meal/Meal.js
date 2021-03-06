import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Meal.css';
import MealListModel from '../../models/MealList';
import UserModel from '../../models/User';

class Meal extends React.Component {
    state = {
        mealList: '',
        mealLists: [],
        currentUser: {},
    }
    
    componentDidMount() {
        UserModel.getUserById(localStorage.currentUser)
            .then((result) => {
                this.setState({currentUser: result, mealLists: this.props.mealLists});
            })
        
    }

    renderMealLists() {
        return this.state.mealLists.map((list, index) => {
            return (
                <div>
                    <input type="radio" key={`meallist${index}`} name="mealList"onInput={this.handleChange} value={list._id} />
                    <label htmlFor={`meallist${index}`}>{list.name}</label>
                </div>
            )
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        MealListModel.addMeal(this.state.mealList, this.props.match.params.id)
            .then((result) => {
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
                    <p>Click <a className="meal-link" href={this.props.meal.link} target="_blank" rel="noopener norefferer">here</a> to go to the recipe</p>    
                    <div className="nutrition-info">
                        <p>Calories: {this.props.meal.calories}</p>
                        <p>Carbs: {this.props.meal.carbs}g</p>
                        <p>Protein: {this.props.meal.protein}g</p>
                        <p>Fat: {this.props.meal.fat}g</p>
                    </div>
                    <div className="ingredient-list">
                        <h4>Ingredients</h4>
                        <div className="ingredient-box">
                        {this.props.meal.ingredients && (
                            this.props.meal.ingredients.map((ingredient, index) => {
                                return <p key={`ingredient${index}`}>{ingredient}</p>;
                            })
                            
                        )}
                        </div>
                    </div>
                    <form className="add-meal" onSubmit={this.handleSubmit}>
                        <label htmlFor="mealList">Choose a list to add this meal:</label>
                        {this.state.mealLists && (
                            this.state.mealLists.map((list, index) => {
                                return (
                                    <div>
                                        <input type="radio" key={`meallist${index}`} name="mealList"onInput={this.handleChange} value={list._id} />
                                        <label htmlFor={`meallist${index}`}>{list.name}</label>
                                    </div>
                                )
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