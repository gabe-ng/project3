import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="navbar-title">LOGO</h1>
        <ul>
            <li>
                <NavLink to="/homepage" activeClassName="active-nav" className="nav-item">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" activeClassName="active-nav" className="nav-item">
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/" exact className="nav-logout" className="nav-item">
                    Logout
                </NavLink>
            </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
