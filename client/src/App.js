import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbarComponents/Navbar";
import Landing from "./components/landingComponents/Landing";
import HomepageContainer from "./containers/HomepageContainer";
import ProfileContainer from "./containers/ProfileContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/profile" exact render={props => <ProfileContainer {...props} />} />
          <Route path="/homepage" exact render={props => <HomepageContainer {...props} />} />
          <Route path="/" exact render={props => <Landing {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
