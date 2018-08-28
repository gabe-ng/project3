import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/navbar.css";

class Navbar extends Component {
    state = {
        isLoggedIn: false,
    }

  render() {
      let options;
      if (this.state.isLoggedIn) {
          options = (<ul>
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
                  <NavLink to="/" className="nav-logout" className="nav-item">
                      Logout
                </NavLink>
              </li>
          </ul>)
      } else {
          options = (<ul>
              <li>
                  <NavLink to="/signup" className="nav-item">
                      Sign Up
                </NavLink>
              </li>
              <li>
                  <NavLink to="/signin" className="nav-item">
                      Sign In
                </NavLink>
              </li>
          </ul>)
      }
    return (
      <div className="navbar">
        <h1 className="navbar-title">LOGO</h1>
        {options}
      </div>
    );
  }
}

export default Navbar;
