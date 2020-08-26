import React from 'react';
import { withRouter } from 'react-router-dom';
import MealListModel from '../../models/MealList';

class NewMealListContainer extends React.Component {
    state = {
        name: '',
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})   
    };

    handleSubmit = (event) => {
        event.preventDefault();
        MealListModel.createMealList(this.state)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div>
                <h2>What would you like to call this list?</h2>
                <form onSubmit={this.handleSubmit}>
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