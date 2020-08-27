import React from 'react'; 
import Meals from '../../components/Meals/Meals';
import MealModel from '../../models/Meal';
import MealListModel from '../../models/MealList';

class MealsListContainer extends React.Component {
    state = {
        meals: [],
        mealLists: [],
    }

    componentDidMount() {
        MealModel.getAllMeals()
            .then((result) => {
                this.setState({meals: result});
            })
            .catch((err) => console.log(err))
        MealListModel.getAllMealsLists()
            .then((result) => {
                this.setState({mealLists: result})
            })
    }

    render() {
        return <Meals meals={this.state.meals} mealLists={this.state.mealLists} />
    }
}

export default MealsListContainer;
