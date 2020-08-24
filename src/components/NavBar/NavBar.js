import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ currentUser, logout }) {
    return (
        <nav>
            <div className="company-info">
                <NavLink to="/" className="company-container">
                    <img className="company-image" src="nutrition.png" alt="company-logo" />
                    <h3 className="company-name">Macro Meals</h3>
                </NavLink>
            </div>
            <div className="nav-items">
                <ul className="nav-right">
                    <li>
                        <NavLink to="/signup" className="nav-link">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className="nav-link">Profile</NavLink>
                    </li>  
                    <li>
                        <NavLink to="search" className="nav-link">Search Meals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="nav-link">Log Out</NavLink>
                    </li>              
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;