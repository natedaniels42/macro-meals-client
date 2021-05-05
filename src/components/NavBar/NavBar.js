import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ currentUser, logout }) {
    return (
        <nav>
            <div className="company-info">
                <NavLink to="/" className="company-container">
                    <img className="company-image" src="nutrition.png" alt="company-logo" />
                    {//Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    }
                    <h3 className="company-name">Macro Meals</h3>
                </NavLink>
            </div>
            <div className="nav-items">
                <ul className="nav-right">
                    <li>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    {!currentUser && (
                    <React.Fragment>
                        <li>
                            <NavLink to="/signup" className="nav-link">Signup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                    </React.Fragment>
                    )}
                    <li>
                        <NavLink to="/meals" className="nav-link">Search Meals</NavLink>
                    </li>
                    {currentUser && (
                    <React.Fragment>
                        <li>
                            <NavLink to="/profile" className="nav-link">Profile</NavLink>
                        </li>  
                        <li>
                            <NavLink to="/" onClick={logout} className="nav-link">Log Out</NavLink>
                        </li>              
                    </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;