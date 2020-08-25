import React from 'react'; 
import MealsList from '../../components/Meals/Meals';
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
        return <MealsList meals={this.state.meals} />
    }
}

export default MealsListContainer;
