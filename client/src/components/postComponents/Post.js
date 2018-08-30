import React, { Component } from "react";

import EditPostForm from "./EditPostForm";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h5>I am a post!</h5>
        <EditPostForm />
      </div>
    );
  }
}

export default Post;
