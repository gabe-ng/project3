import React, { Component } from "react";

import Friends from "../components/homepageComponents/Friends";
import Chatbox from "../components/homepageComponents/Chatbox";
import HomeProfile from "../components/homepageComponents/HomeProfile";
import PostContainer from "./PostContainer";

import "../styles/homepage.css";

class HomepageContainer extends Component {
  render() {
    return <div className="homepage-container">
        <div className="profile-friends-wrap">
          <HomeProfile />
          <Friends />
        </div>
        <PostContainer />
        <Chatbox />
      </div>;
  }
}

export default HomepageContainer;