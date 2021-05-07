import React from 'react';
import UserModel from '../../models/User';
import MealListModel from '../../models/MealList';
import MealLists from '../../components/MealLists/MealLists';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css';

class ProfileContainer extends React.Component {
    state = {
        email: '',
        name: '',
        image: '',
        memberSince: '',
        mealLists: [], 
    };
    
    componentDidMount() {
        UserModel.getUserById(this.props.currentUser)
            .then((result) => {
                /*console.log(result);
                const mealLists = [];
                result.mealLists.forEach(mealList => {
                    MealListModel.getMealListById(mealList)
                        .then((result) => {
                            console.log(result);
                            //mealLists.push(result);
                        })
                    })
                */    
                this.setState({email: result.email, name: result.name, image: result.image, memberSince: result.memberSince, mealLists: result.mealLists});
                
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
        return(
            <div className="profile-page">
                <Profile email={this.state.email} name={this.state.name} image={this.state.image} membersince={this.state.memberSince} userId={this.props.currentUser}/>
                <MealLists mealLists={this.state.mealLists} /> 
            </div>
        )
    }
}


export default ProfileContainer;