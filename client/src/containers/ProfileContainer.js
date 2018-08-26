import React, { Component } from "react";

import Bio from "../components/profileComponents/Bio";
import Stats from "../components/profileComponents/Stats";
import PostContainer from "./PostContainer";

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <h1>ProfileContainer</h1>
        <Bio />
        <Stats />
        <PostContainer />
      </div>
    );
  }
}

export default ProfileContainer;
