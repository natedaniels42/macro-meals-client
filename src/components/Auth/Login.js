import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const url = `http://localhost:4000/api/v1/auth/login`;
const validEmailRegex = 
  RegExp(/^\w+@\w+\.\w+$/i);

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {
            email: '',
            password: ''
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        this.setState({
            [name]: value,
        });

        switch(name) {
            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Email must be valid';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be 8 characters long' : '';
                break;
        }
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
                alert(err.response.data.message);
            });
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="auth-form" onSubmit={this.handleSubmit}>
                <div className="form-box">
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} type="email" name="email" value={this.state.email} required/>
                        {errors.email.length > 0 && 
                            <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} required/>
                        {errors.password.length > 0 &&
                            <span className="error">{errors.password}</span>}
                    </div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
    };
};

export default withRouter(Login);