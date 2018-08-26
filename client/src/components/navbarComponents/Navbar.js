import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
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
                <NavLink to="/" exact className="nav-logout">
                    Logout
                </NavLink>
            </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
