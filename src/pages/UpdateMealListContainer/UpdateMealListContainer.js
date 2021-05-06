import React from 'react';
import { withRouter } from 'react-router-dom';
import MealListModel from '../../models/MealList';
import './Update.css';

class UpdateMealListContainer extends React.Component {
    state = {
        mealList: {},
        name: ''
    }

    componentDidMount () {
        MealListModel.getMealListById(this.props.match.params.id)
            .then((result) => {
                this.setState({mealList: result, name: result.name});
            })
            .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        const { mealList } = { ...this.state };
        const currentState = mealList;
        const { name, value } = event.target;
        currentState[name] = value;
        this.setState({ mealList: currentState });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        MealListModel.updateMealList(this.state.mealList, this.state.mealList._id)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push('/profile');
    }

    render() {
        console.log(this.props);
        return (
            <div className="update-box">
                <h2>Update List Name</h2>
                <form className="form-box" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onInput={this.handleChange} type="text" name="name"/>
                    </div>
                    <button className="update-button" type="submit">Update Name</button>
                </form>
            </div>
        );
    };
};

export default withRouter(UpdateMealListContainer);