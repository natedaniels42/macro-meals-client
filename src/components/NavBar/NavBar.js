import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <div className="company-info">
                <a href="/" className="company-container">
                    <img className="company-image" src="nutrition.png" alt="company-logo" />
                    <h3 className="company-name">Macro Meals</h3>
                </a>
            </div>
            <div className="nav-right">
                <a href="/signup" className="nav-link">Signup</a>
                <a href="/login" className="nav-link">Login</a>
                <a href="/profile" className="nav-link">Profile</a>
                <a href="search" className="nav-link">Search Meals</a>
                <a href="/" className="nav-link">Log Out</a>
            </div>
        </nav>
    )
}

export default NavBar;