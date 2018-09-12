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
          <HomeProfile currentUser={this.props.currentUser}/>
          <Friends currentUser={this.props.currentUser}/>
        </div>
      <PostContainer style={this.state.postContainerMargin} currentUser={this.props.currentUser}/>
        <Chatbox currentUser={this.props.currentUser} />
      </div>;
  }
}

export default HomepageContainer;