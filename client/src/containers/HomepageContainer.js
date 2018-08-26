import React, { Component } from "react";

import Friends from "../components/homepageComponents/Friends";
import Chatbox from "../components/homepageComponents/Chatbox";
import HomeProfile from "../components/homepageComponents/HomeProfile";
import PostContainer from "./PostContainer";

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        <h1>HomepageContainer</h1>
        <HomeProfile />
        <Friends />
        <PostContainer />
        <Chatbox />
    </div>
    );
  }
}

export default HomepageContainer;