import React from 'react';
import Meal from '../Meal/Meal';
import { NavLink } from 'react-router-dom';
import MealListModel from '../../models/MealList';
import './MealList.css';

class MealList extends React.Component {
    state = {
        mealList: {}
    }

    componentDidMount() {
        MealListModel.getMealListById(this.props.mealList._id)
            .then((result) => {
                this.setState({mealList: result})
            })
            .catch((err) => console.log(err))
    } 
    
    handleDelete = () => {
        MealListModel.deleteMealList(this.props.mealList._id)
            .then((result) => this.props.history.push('/profile'))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="meallist-box">
                <p>{this.props.mealList.name}</p>
                <div className="button-box">
                    <NavLink to={`/profile/${this.state.mealList.id}`} mealList={this.state.mealList}><button>Update List Name</button></NavLink>
                    <NavLink to='/profile'><button onClick={this.handleDelete}>delete</button></NavLink>
                    <NavLink to="/meals" meallist={this.props.mealList}><button>Search Meals</button></NavLink>
                </div>
                {this.state.mealList.meals && (
                    this.state.mealList.meals.map((meal) => {return <Meal key={meal._id} meal={meal} list={true} />
                    })
                )
            }
            </div>
        )
    }
}



export default MealList;