import React from 'react';
import UserModel from '../../models/User';
import MealListModel from '../../models/MealList';
import MealLists from '../../components/MealLists/MealLists';

class ProfileContainer extends React.Component {
    state = {
        user: {},
        mealLists: [], 
    };
    
    componentDidMount() {
        MealListModel.getAllMealsLists()
            .then((result) => {
                this.setState({mealLists: result});
            })
            .catch((err) => console.log(err))
    }


    render() {
        return(
            <div>
                <h1>This is the Profile</h1>
                <MealLists mealLists={this.state.mealLists} />
            </div>
        )
    }
}


export default ProfileContainer;