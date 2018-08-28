import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import Login from "./Login";

import "../../styles/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <h1>Landing</h1>
        <Switch>
          <Route path="/signin" exact render={props => <Login {...props} currentUser={this.props.currentUser} />} />
        </Switch>
        <Intro />
      </div>
    );
  }
}

export default Landing;
