import React, { Component } from "react";

import Posts from "../components/postComponents/Posts";
import CreatePostFrom from "../components/postComponents/CreatePostForm";
import EditPostForm from "../components/postComponents/EditPostForm";

import "../styles/posts.css";

class PostContainer extends Component {
  state = {
    addingPost: false,
    editingPost: false,
    editPostId: ''
  };

  toggleAddPost = () => {
    this.setState({
      addingPost: true
    });
  };

  cancelAction = () => {
    this.setState({
      addingPost: false,
      editingPost: false,
      editPostId: ""
    });
  };

  toggleEditPost = (e) => {
    this.setState({
      editingPost: true,
      editPostId: e.target.getAttribute("data-id"),
    })
  }

  render() {
    return <div className="post-container" style={this.props.style}>
        <h1>Posts</h1>
        {this.state.addingPost || this.state.editingPost ? <button onClick={this.cancelAction}>
            Cancel
          </button> : <button onClick={this.toggleAddPost}>
            Create post
          </button>}
      {this.state.addingPost 
          ? <CreatePostFrom currentUser={this.props.currentUser} close={this.cancelAction} /> 
          : this.state.editingPost 
            ? <EditPostForm postId={this.state.editPostId} cancel={this.cancelAction} />
            : <Posts currentUser={this.props.currentUser} toggleEditPost={this.toggleEditPost} />}
      </div>;
  }
}

export default PostContainer;
