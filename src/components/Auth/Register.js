import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
//import UserModel from '../../models/User';

const url = 'http://localhost:4000/api/v1/auth/register';
/*const pictures = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=0.922xw:0.738xh;0.0555xw,0.142xh&resize=640:*', 'https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg', 'https://i.pinimg.com/originals/63/4d/1a/634d1a2b6ba54fd729a9690fab614ba1.jpg', 'https://media4.newsnationtv.com/resize/930_-/images/2019/10/04/lois-607.jpg'];
const randomNumber = Math.floor(Math.random() * (pictures.length - 1));
*/

class Register extends React.Component {
    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        image: '',
        pictures: ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=0.922xw:0.738xh;0.0555xw,0.142xh&resize=640:*', 'https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg', 'https://i.pinimg.com/originals/63/4d/1a/634d1a2b6ba54fd729a9690fab614ba1.jpg', 'https://media4.newsnationtv.com/resize/930_-/images/2019/10/04/lois-607.jpg'],
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
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
                console.log(err.response.message);
            });
    }

    render() {
        return (
            <form className="auth-form" onSubmit={this.handleSubmit}>
                <div className="form-box">
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" id="name" name="name" required value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} type="text" id="username" name="username" required value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} type="text" id="email" name="email" required value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" id="password" name="password" required value={this.state.password} />
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