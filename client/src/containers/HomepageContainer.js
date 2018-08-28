import React, { Component } from "react";

import Friends from "../components/homepageComponents/Friends";
import Chatbox from "../components/homepageComponents/Chatbox";
import HomeProfile from "../components/homepageComponents/HomeProfile";
import PostContainer from "./PostContainer";

import "../styles/homepage.css";

class HomepageContainer extends Component {
  state = {
    postContainerMargin: {
      margin: "0 auto",
    }
  }
  render() {

    return <div className="homepage-container">
        <div className="profile-friends-wrap">
          <HomeProfile />
          <Friends />
        </div>
        <PostContainer style={this.state.postContainerMargin}/>
        <Chatbox />
      </div>;
  }
}

export default HomepageContainer;