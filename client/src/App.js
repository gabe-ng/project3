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
import AllUsers from "./components/AllUsers";

class App extends Component {
  state = {};

  componentDidMount = () => {    
    let token;
    if (localStorage.getItem("fbct") === null) {
      this.setState({
        isAuthenticated: false,
      })
      this.props.history.push("/");
    } else {
      console.log("token still exists");
      token = jwt_decode(localStorage.getItem("fbct"));
      setAuthToken(localStorage.getItem("fbct"));
      this.setState({
        isAuthenticated: true,
        currentUser: token
      })
    }
  }

  render() {
    // console.log(this.props.state);
    console.log('APP State', this.state);
    
    return <div>
        <Navbar />
        <Switch>
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} currentUser={this.props.state.currentUser}/>} />
          <Route path="/allusers" exact render={props => <AllUsers {...props} />} />
          <Route path="/profile/:user_id" render={props => <ProfileContainer {...props} />} />
          <Route path="/" render={props => <Landing {...props} />} />
        </Switch>
      </div>;
  }
}

const mapStateToProps = state => {
  console.log("mapping state");
  
  return {
    state: state.authReducer,
  };
};

export default withRouter(connect(mapStateToProps)(App));
