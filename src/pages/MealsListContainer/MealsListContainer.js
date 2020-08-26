import React from 'react'; 
import Meals from '../../components/Meals/Meals';
import MealModel from '../../models/Meal';

class MealsListContainer extends React.Component {
    state = {
        meals: [],
    }

    componentDidMount() {
        MealModel.getAllMeals()
            .then((result) => {
                this.setState({meals: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return <Meals meals={this.state.meals} />
    }
}

export default MealsListContainer;
