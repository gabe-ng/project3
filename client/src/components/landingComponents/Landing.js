import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import Signin from "./Signin";
import Signup from "./Signup";

import "../../styles/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div id="particles-js"></div>
        <Switch>
          <Route path="/signin" render={props => <Signin {...props} />} />
          <Route path="/signup" render={props => <Signup {...props} />} />
        </Switch>
    
      </div>
    );
  }
}

export default Landing;
