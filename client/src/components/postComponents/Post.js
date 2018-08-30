import React, { Component } from "react";

import PostForm from "./PostForm";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h5>I am a post!</h5>
        <PostForm />
      </div>
    );
  }
}

export default Post;
