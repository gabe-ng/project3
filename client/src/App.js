import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Navbar from "./components/navbarComponents/Navbar";
import Landing from "./components/landingComponents/Landing";
import HomepageContainer from "./containers/HomepageContainer";
import ProfileContainer from "./containers/ProfileContainer";
import AllUsers from "./components/AllUsers";

import { stillLoggedIn } from "./redux/actions/authActions";

class App extends Component {
  state = {};

  componentDidMount = () => {    
    if (localStorage.getItem("fbct") === null) {
      this.setState({
        isAuthenticated: false,
      })
      this.props.history.push("/");
    } else {
      this.props.stillLoggedIn();
    }
  }

  render() {
    return <div>
        <Navbar />
        <Switch>
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} currentUser={this.props.state.currentUser}/>} />
          <Route path="/allusers" exact render={props => <AllUsers {...props} />} />
          <Route path="/profile/:user_id" render={props => <ProfileContainer {...props} currentUser={this.props.state.currentUser}/>} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ stillLoggedIn }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
