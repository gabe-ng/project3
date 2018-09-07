import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Icon } from "react-icons-kit";
import {home} from 'react-icons-kit/fa/home';
import {userCircleO} from 'react-icons-kit/fa/userCircleO';
import {users} from 'react-icons-kit/fa/users';
import {powerOff} from 'react-icons-kit/fa/powerOff'

import { logOut, stillLoggedIn } from "../../redux/actions/authActions";

import "../../styles/navbar.css";

class Navbar extends Component {
  state = {};

  componentDidMount = () => {
    if (localStorage.getItem("fbct") === null) {
      this.setState({
        isAuthenticated: false,
      })
    } else {
      this.props.stillLoggedIn();
    }
  }

  handleLogout = e => {
    e.preventDefault();
    this.props.logOut();
    this.props.history.push("/");
  }

  render() {
    
    let options;
    if (this.props.authState.isAuthenticated || this.state.isAuthenticated) {
      options = <ul>
          <li>
            <NavLink to="/homepage" activeClassName="active-nav" className="nav-item">
              <Icon icon={home} size={28}/>
            </NavLink>
          </li>
          <li>
          <NavLink to={`/profile/${this.props.authState.currentUser.user.id}`} activeClassName="active-nav" className="nav-item">
             <Icon icon={userCircleO} size={25}/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/allusers" activeClassName="active-nav" className="nav-item">
             <Icon icon={users} size={25}/>
            </NavLink>
          </li>
          <li>
            <a href="" onClick={this.handleLogout} className="nav-item nav-logout">
             <Icon icon={powerOff} size={25}/>
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
        <h1 className="navbar-title">PROJECT3</h1>
        {options}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: state.authReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logOut, stillLoggedIn }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));