import React, { Component } from "react";

import Bio from "../components/profileComponents/Bio";
import Stats from "../components/profileComponents/Stats";
import PostContainer from "./PostContainer";

import "../styles/profile.css";

class ProfileContainer extends Component {
  state = {
    postContainerMargin: {
      margin: "0 auto 0 0"
    }
  };

  render() {
    return (
      <div className="profile-container">
        <Bio />
        <Stats />
        <PostContainer style={this.state.postContainerMargin} />
      </div>
    );
  }
}

export default ProfileContainer;
