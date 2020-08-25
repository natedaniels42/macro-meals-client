import React from 'react';
import UserModel from '../../models/User';

class ProfileContainer extends React.Component {
    state = {
        user: {},
    };
    
    componentDidMount() {
        UserModel.getUserById(this.props.currentUser)
            .then((result) => {
                console.log(result);
                this.setState({user: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return(
            <div>
                <h1>This is the Profile</h1>
            </div>
        )
    }
}


export default ProfileContainer;