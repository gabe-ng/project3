import React, { Component } from "react";

import Posts from "../components/postComponents/Posts";

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        <h2>Post Container</h2>
        <Posts />
      </div>
    );
  }
}

export default PostContainer;
