import React, { Component } from "react";

import Posts from "../components/postComponents/Posts";

import "../styles/posts.css"

class PostContainer extends Component {
  render() {
    
    return (
      <div className="post-container" style={this.props.style}>
        <h1>Posts</h1>
        <Posts />
      </div>
    );
  }
}

export default PostContainer;
