import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

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
        localStorage.setItem('email', this.state.email);
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
            <form className="auth-form" onSubmit={this.handleSubmit}>
                <div className="form-box">
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} type="email" name="email" value={this.state.email} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} required/>
                    </div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
    };
};

export default withRouter(Login);