import React from 'react';
import { NavLink } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <h3>This is the Profile Page</h3>
            <NavLink to="/profile/new">Create New List</NavLink>
        </div>
    );
};

export default Profile;