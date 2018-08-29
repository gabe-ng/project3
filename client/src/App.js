import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/navbarComponents/Navbar";
import Landing from "./components/landingComponents/Landing";
import HomepageContainer from "./containers/HomepageContainer";
import ProfileContainer from "./containers/ProfileContainer";

class App extends Component {

  // state = {
  //   currentUser: {},
  //   isAuthenticated: true,
  // }

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
   
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <Navbar loggedIn={this.props.isAuthenticated}/>
        <Switch>
          <Route path="/profile" exact render={props => <ProfileContainer {...props} />} />
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} />} />
          <Route path="/" render={props => <Landing {...props} currentUser={this.setCurrentUser} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    isAuthenticated: state.isAuthenticated,
  }
}

export default connect(mapStateToProps,)(withRouter(App));
