import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "../../styles/navbar.css";

class Navbar extends Component {
  render() {
    console.log(this.props.state);
    
          
      let options;
       if (this.props.state.isAuthenticated) {
                options = <ul>
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
                    <NavLink to="/" className="nav-item nav-logout">
                        Logout
                    </NavLink>
                    </li>
                </ul>;
            } else {
                options = <ul>
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
                </ul>;
            
        }
    return (
      <div className="navbar">
        <h1 className="navbar-title">LOGO</h1>
        {options}
      </div>
    );
  }
  
}

const mapStateToProps = state => {
    return {
        state: state.authReducer,
    };
};

export default connect(mapStateToProps)(Navbar);


// export default Navbar;
