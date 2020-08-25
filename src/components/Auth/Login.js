import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000/api/v1/auth/login';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, this.state)
            .then((res) => {
                console.log(res.data.token);
                this.props.setCurrentUser(res.data.token);
                this.props.history.push('/profile');
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(err.response.message);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="for-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" name="email" value={this.state.email} />
                </div>
                <div className="for-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                </div>
                <button type="submit">Login</button>
            </form>
        )
    };
};

export default withRouter(Login);