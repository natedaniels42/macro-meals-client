import React from 'react';
import Meal from '../../components/Meal/Meal';
import MealModel from '../../models/Meal';

class MealContainer extends React.Component {
    state = {
        meal: {},
    };

    componentDidMount() {
        console.log(this.props);
        MealModel.getMealById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({meal: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return <Meal meal={this.state.meal} list={false}/>;
    }
}

export default MealContainer;