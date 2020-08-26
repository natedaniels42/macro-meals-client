import React from 'react';
import Meal from '../Meal/Meal';
import './Meals';

//const mealsList = props.meals.map((meal) => {
//    return <Meal key={meal._id} meal={meal} list={true} />
//})

class Meals extends React.Component {
    state = {
        carbs: '',
        protein: '',
        fat: ''
    };

    renderMeal = (meal) => {
        const { carbs, protein, fat } = this.state;

        if(carbs !== null && (meal.carbs > (parseInt(carbs)+2) || meal.carbs < (parseInt(carbs)-2)) || protein !== null && (meal.protein > (parseInt(protein)+2) || meal.protein < (parseInt(protein)-2)) || fat !== null && (meal.fat > (parseInt(fat)+2) || meal.fat < (parseInt(fat)-2))) {
            return null;

        }
        

        return <Meal key={meal._id} meal={meal} meallist={this.props.meallist} list={true} />
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render() {
        return (
            <div className="meals-container">
                <label htmlFor="carbs">Carbs</label>
                <input type="range" min="0" max="50" name="carbs" list="tickmarks" onInput={this.onChange} />
                <label htmlFor="protein">Protein</label>
                <input type="range" min="0" max="50" name="protein" onInput={this.onChange} />
                <label htmlFor="fat">Fat</label>
                <input type="range" min="0" max="50" name="fat" onInput={this.onChange} />
                <datalist id="tickmarks">
                    <option value="0">0</option>
                    <option value="5"></option>
                    <option value="10"></option>
                    <option value="15"></option>
                    <option value="20"></option>
                    <option value="25">25</option>
                    <option value="30"></option>
                    <option value="35"></option>
                    <option value="40"></option>
                    <option value="45"></option>
                    <option value="50">50</option>
                </datalist>
                {this.props.meals.map((meal) => {
                    return this.renderMeal(meal);
                })}
            </div>
        );
    }
};

export default Meals;