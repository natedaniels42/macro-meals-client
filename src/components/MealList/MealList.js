import React from 'react';
import Meal from '../Meal/Meal';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
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
    
    componentDidUpdate() {
        MealListModel.getMealListById(this.props.mealList._id)
        .then((result) => {
            this.setState({mealList: result})
        })
        .catch((err) => console.log(err))
    }
    
    handleDelete = () => {
        this.props.deleteList(this.state.mealList._id, localStorage.currentUser);
    }

    handleRemove = (e) => {
        MealListModel.removeMeal(this.props.mealList._id, e.target.id)
            //.then((result) => this.props.history.push('/profile'))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            
            <div className="meallist-box">
                <h2 className="list-name">{this.state.mealList.name}</h2>
                <div className="button-box">
                    <NavLink to={`/profile/${this.state.mealList._id}`} mealList={this.props.mealList}><button >Update List Name</button></NavLink>
                    <NavLink className="search-button" to="/meals" meallist={this.props.mealList}><button>Search Meals</button></NavLink>
                </div>
                <div className="delete-button">
                    <button onClick={this.handleDelete}>delete list</button>
                </div>
                <div className="meals-box">
                    {this.state.mealList.meals && (
                        this.state.mealList.meals.map((meal) => {return (
                            <div>
                                <Meal key={meal._id} meal={meal} list={true} />
                                <button id={meal._id} onClick={this.handleRemove}>Remove Meal</button>
                            </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        )
    }
}



export default withRouter(MealList);