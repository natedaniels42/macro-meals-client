import React from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import setAuthHeader from './utils/setAuthHeader';
import UserModel from './models/User';

class App extends React.Component {
  state= {
    currentUser: '',
    name: '',
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    
    if (token) {
      setAuthHeader(token);
      const decodedToken = jwt_decode(token);
      this.setState({currentUser: decodedToken.id});
    };
  };

  setCurrentUser = (token) => {
    localStorage.setItem('token', token);
    setAuthHeader(token);
    const decodedToken = jwt_decode(token);
    localStorage.setItem('currentUser', decodedToken.id);

    UserModel.getUserById(decodedToken.id) 
      .then((result) => {
        localStorage.setItem('username', result.username);
        localStorage.setItem('image', result.image);
      })
    this.setState({currentUser: decodedToken.id});
  };

  logout = () => {
    localStorage.clear();
    setAuthHeader();
    this.setState({currentUser: ''});
    this.props.history.push('/');
  };

  render() {
    console.log('https://glacial-citadel-34005.herokuapp.com/api/v1');
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <main>
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
