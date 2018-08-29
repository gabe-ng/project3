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

  render() {
    return <div>
        <Navbar />
        <Switch>
          <Route path="/profile" exact render={props => <ProfileContainer {...props} />} />
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} />} />
          <Route path="/" render={props => <Landing {...props} />} />
        </Switch>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    state: state.authReducer,
  };
};

export default withRouter(connect(mapStateToProps)(App));
