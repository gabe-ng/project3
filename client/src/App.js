import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { initialLoad } from "./redux/actions/authActions";

import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/navbarComponents/Navbar";
import Landing from "./components/landingComponents/Landing";
import HomepageContainer from "./containers/HomepageContainer";
import ProfileContainer from "./containers/ProfileContainer";

class App extends Component {

  // state = {
  //   isAuthenticated: false,
  // }

  componentDidMount = () => {
    console.log("app mount");
    
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

  componentDidUpdate = (prevProps, prevState) => {
    console.log("app updated");
    
  }
  
  componentWillReceiveProps = ({ state }) => {
    console.log("in will receive");
    this.setState({
      state
    })
  }
  

  handleLogout = () => {
   
  }

  render() {
    console.log("in app render");
    
    console.log(this.props.state);
    
    return <div>
        <Navbar />
        <Switch>
          <Route path="/profile" exact render={props => <ProfileContainer {...props} />} />
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} />} />
          <Route path="/" render={props => <Landing {...props} currentUser={this.setCurrentUser} />} />
        </Switch>
      <button onClick={this.props.initialLoad}>click me</button>
      </div>;
  }
}

const mapStateToProps = state => {
  console.log("mapping to app");
  console.log(state.authReducer);
  
  return {
    state: state.authReducer,
  };
};

export default withRouter(connect(mapStateToProps, {initialLoad})(App));
