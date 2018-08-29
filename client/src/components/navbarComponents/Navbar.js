import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logOut } from "../../redux/actions/authActions";

import "../../styles/navbar.css";

class Navbar extends Component {
  state = {};

  componentDidMount = () => {
    if (localStorage.getItem("fbct") === null) {
      this.setState({
        isAuthenticated: false
      });
    } else {
      this.setState({
        isAuthenticated: true
      });
    }
  };

  handleLogout = e => {
    e.preventDefault();
    this.props.logOut();
    this.props.history.push("/");
  }

  render() {

    let options;
    if (this.props.state.isAuthenticated || this.state.isAuthenticated) {
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
            <NavLink to="/allusers" activeClassName="active-nav" className="nav-item">
              All Users
            </NavLink>
          </li>
          <li>
            <a href="" onClick={this.handleLogout} className="nav-item nav-logout">
              Logout
            </a>
          </li>
        </ul>;
    } else {
      options = (
        <ul>
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
        </ul>
      );
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
    state: state.authReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logOut }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));