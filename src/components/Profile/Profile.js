import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
    
    
    
    return (
        <div className="profile-info">
            <h2 className="profile-welcome">Welcome, {props.name}!</h2>
            <img className="profile-image" src="https://picsum.photos/200" alt="random profile"/>
            <NavLink to="/profile/new" className="nav"><button className="button">Create a New Meal List</button></NavLink>
        </div>
    );
};

export default Profile;