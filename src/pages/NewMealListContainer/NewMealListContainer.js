import React from 'react';
import { withRouter } from 'react-router-dom';
import MealListModel from '../../models/MealList';
import './NewMealListContainer.css';

class NewMealListContainer extends React.Component {
    state = {
        name: '',
        userId: '',
    };

    componentDidMount() {
        const base64Url = localStorage.token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        console.log(JSON.parse(window.atob(base64)).id);
        this.setState({userId: JSON.parse(window.atob(base64)).id});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})   
    };

    handleSubmit = (event) => {
        event.preventDefault();
        MealListModel.createMealList(this.state, this.state.userId)
            .then((result) => {
                const mealLists = localStorage.mealLists + ',' + result.savedMealList._id;
                localStorage.setItem('mealLists', mealLists);
                console.log(result);
            });
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div className="new-box">
                <h2>What would you like to call this list?</h2>
                <form className="form-box" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onInput={this.handleChange} type="text" name="name" />
                    </div>
                    <button type="submit">Create List</button>
                </form>
            </div>
        );
    };
};

export default withRouter(NewMealListContainer);