import React, { Component } from "react";

import Posts from "../components/postComponents/Posts";
import CreatePostFrom from "../components/postComponents/CreatePostForm";

import "../styles/posts.css"

class PostContainer extends Component {
  state = {
    addingPost: false,
  }

  toggleAddPost = () => {
    this.setState({
      addingPost: true,
    })
  }

  cancelAddPost = () => {
    this.setState({
      addingPost: false,
    })
  }

  render() {
    
    return <div className="post-container" style={this.props.style}>
        <h1>Posts</h1>
        <button onClick={this.toggleAddPost}>Create post</button>
        {this.state.addingPost ? <CreatePostFrom /> : <Posts />}
      </div>;
  }
}

export default PostContainer;
