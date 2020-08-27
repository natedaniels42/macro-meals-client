import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
    return (
        <div className="profile-info">
            <h2>Welcome, {props.name}!</h2>
            <img className="profile-image" src="https://picsum.photos/200" />
            <p>{props.email}</p>
            <NavLink to="/profile/new">Create New List</NavLink>
        </div>
    );
};

export default Profile;