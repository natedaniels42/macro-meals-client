import React from 'react';
import Meal from '../../components/Meal/Meal';
import MealModel from '../../models/Meal';
import MealListModel from '../../models/MealList';
import UserModel from '../../models/User';

class MealContainer extends React.Component {
    state = {
        meal: {},
        mealLists: [],
    };

    componentDidMount() {
        const mealLists = [];
        UserModel.getUserById(localStorage.currentUser)
            .then((result) => {
                console.log(result);
                result.mealLists.map(mealList => {
                    MealListModel.getMealListById(mealList)
                        .then((listResult) => {
                            mealLists.push(listResult);
                            
                        })
                })
            })
        this.setState({mealLists: mealLists});
        MealModel.getMealById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({meal: result});
            })
            .catch((err) => console.log(err))
        /*
        MealListModel.getAllMealsLists()
            .then((result) => {
                this.setState({mealLists: result});
            })
            .catch((err) => console.log(err))
    */
    }

    render() {
        return <Meal meal={this.state.meal} list={false} mealLists={this.state.mealLists} />;
    }
}

export default MealContainer;