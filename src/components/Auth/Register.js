import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const url = `http://localhost:4000/api/v1/auth/register`;
const validEmailRegex = 
  RegExp(/^\w+@\w+\.\w+$/i);

class Register extends React.Component {
    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        errors: {
            name: '',
            username: '',
            email: '', 
            password: '',
            form: '',
        }
    };
    
    componentDidMount = () => {
        this.setState({
            name: '',
            username: '',
            email: '', 
            password: ''
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        this.setState({
            [name]: value,
        });
        switch (name) {
            case 'name':
                errors.name = value.length < 1 ? 'Name is required' : '';
                break;
            case 'username':
                errors.username = value.length < 1 ? 'Username is required' : '';
                break;
            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Email must be valid';
                break;
            case 'password': 
                errors.password = value.length < 8 ? 'Password must be 8 characters long' : '';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            console.log('Valid form')
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('image', this.state.image);
            axios.post(url, this.state)
                .then((res) => {
                    console.log(res);
                    this.props.history.push('/login');
                })
                .catch((err) => {
                    console.log(err.response.status);
                    console.log(err.response.data);
                    console.log(err.response.data.message);
                    alert(err.response.data.message);
                });
        } else {
            console.log('Invalid form');
            alert('invalid form');
        }
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="auth-form" onSubmit={this.handleSubmit}>
                <div className="form-box">
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" id="name" name="name" value={this.state.name} />
                        {errors.name.length > 0 &&
                            <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} type="text" id="username" name="username"  />
                        {errors.username.length > 0 && 
                            <span className="error">{errors.username}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} type="text" id="email" name="email" value={this.state.email} />
                        {errors.email.length > 0 && 
                            <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" id="password" name="password" />
                        {errors.password.length > 0 &&
                            <span className="error">{errors.password}</span>}
                    </div>
                    <div>
                        <input type="hidden" name="image" value="https://picsum.photos/200"/>
                    </div>
                    <button type="submit">Register</button>
                </div>
            </form>
        )
    }
}

export default withRouter(Register);