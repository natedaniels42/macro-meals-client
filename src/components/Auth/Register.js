import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import UserModel from '../../models/User';

const url = 'http://localhost:4000/api/v1/auth/register';

class Register extends React.Component {
    state = {
        name: '',
        username: '',
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
                console.log(res);
                this.props.history.push('/login');
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
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} type="text" id="name" name="name" value={this.state.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="text" id="email" name="email" value={this.state.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                </div>
                <button type="submit">Register</button>
            </form>
        )
    }
}

export default withRouter(Register);