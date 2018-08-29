import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import Signin from "./Signin";

import "../../styles/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <h1>Landing</h1>
        <Switch>
          <Route path="/signin" exact render={props => <Signin {...props} currentUser={this.props.currentUser} />} />
        </Switch>
        <Intro />
      </div>
    );
  }
}

export default Landing;
