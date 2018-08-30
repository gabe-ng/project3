import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {
  render() {
    return <div className="posts-list">
        <Post />
      </div>;
  }
}

export default Posts;
