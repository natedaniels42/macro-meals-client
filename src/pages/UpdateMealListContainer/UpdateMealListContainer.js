import React from 'react';
import { withRouter } from 'react-router-dom';
import MealListModel from '../../models/MealList';

class UpdateMealListContainer extends React.Component {
    state = {
        name: this.props.name,
    }



    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        MealListModel.updateMealList(this.props.mealList)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push('/profile');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Update List Name</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onInput={this.handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <button type="submit">Update Name</button>
                </form>
            </div>
        );
    };
};

export default withRouter(UpdateMealListContainer);