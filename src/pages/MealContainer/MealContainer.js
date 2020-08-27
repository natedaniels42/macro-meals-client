import React from 'react';
import Meal from '../../components/Meal/Meal';
import MealModel from '../../models/Meal';
import MealListModel from '../../models/MealList'

class MealContainer extends React.Component {
    state = {
        meal: {},
        mealLists: [],
    };

    componentDidMount() {
        console.log(this.props);
        MealModel.getMealById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({meal: result});
            })
            .catch((err) => console.log(err))
        
        MealListModel.getAllMealsLists()
            .then((result) => {
                this.setState({mealLists: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return <Meal meal={this.state.meal} list={false} mealLists={this.state.mealLists} />;
    }
}

export default MealContainer;