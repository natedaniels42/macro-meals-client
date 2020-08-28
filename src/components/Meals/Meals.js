import React from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

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

        if((carbs !== null && (meal.carbs > (parseInt(carbs)+2) || meal.carbs < (parseInt(carbs)-2))) || (protein !== null && (meal.protein > (parseInt(protein)+2) || meal.protein < (parseInt(protein)-2))) || (fat !== null && (meal.fat > (parseInt(fat)+2) || meal.fat < (parseInt(fat)-2)))) {
            return null;

        }
        
        return <Meal key={meal._id} meal={meal} meallist={this.props.mealLists} list={true} />
    }

    onChange1 = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        document.getElementById('carbs-slider').innerHTML = `${event.target.value}g`;
    }

    onChange2 = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        document.getElementById('protein-slider').innerHTML = `${event.target.value}g`;
    }

    onChange3 = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        document.getElementById('fat-slider').innerHTML = `${event.target.value}g`;
    }

    render() {
        return (
            <div>
                <div className="filter-box">
                    <p><strong>Use the bars to adjust your macros</strong></p>
                    <div className="filter">
                        <label htmlFor="carbs">Carbs</label>
                        <input type="range" min="0" max="50" name="carbs"  className="slider" onInput={this.onChange1} />
                        <output id="carbs-slider"></output>
                    </div>
                    <div className="filter">
                        <label htmlFor="protein">Protein</label>
                        <input type="range" min="0" max="50" name="protein" className="slider" onInput={this.onChange2} />
                        <output id="protein-slider"></output>
                    </div>
                    <div className="filter">
                        <label htmlFor="fat">Fat</label>
                        <input type="range" min="0" max="50" name="fat"  className="slider" onInput={this.onChange3} />
                        <output id="fat-slider"></output>
                    </div>
                </div>
                <div className="meals-container">
                {this.props.meals.map((meal) => {
                    return this.renderMeal(meal);
                })}
                </div>
            </div>
        );
    }
};

export default Meals;