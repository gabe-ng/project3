import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom"

import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/navbarComponents/Navbar";
import Landing from "./components/landingComponents/Landing";
import HomepageContainer from "./containers/HomepageContainer";
import ProfileContainer from "./containers/ProfileContainer";

import AuthService from "./utils/AuthService";
import WithAuth from "./utils/WithAuth";

const Auth = new AuthService();

class App extends Component {

  state = {
    currentUser: {},
    isAuthenticated: true,
  }

  componentDidMount = () => {
    let token;
    if (localStorage.getItem("fbct") === null) {
      this.setState({
        isAuthenticated: false,
      })
      this.props.history.push("/");
    } else {
      token = jwt_decode(localStorage.getItem("fbct"));
      setAuthToken(localStorage.getItem("fbct"));
      this.setState({
        isAuthenticated: true,
        currentUser: token
      })
    }
  }

  setCurrentUser = (userData) => {
    this.setState({
      current: userData, isAuthenticated: true,
    })
  }
  

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signin');
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/profile" exact render={props => <ProfileContainer {...props} />} />
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} />} />
          <Route path="/" render={props => <Landing {...props} currentUser={this.setCurrentUser} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
