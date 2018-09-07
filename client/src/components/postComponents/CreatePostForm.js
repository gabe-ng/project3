import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createPost } from "../../redux/actions/postActions";

class CreatePostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handlePostSubmit = (e) => {
    e.preventDefault();

    let newPost = { title: this.state.title, body: this.state.body };
    let userId = this.props.currentUser.user.id;

    this.props.createPost(newPost, userId)
        .then(res => {
            console.log(res);
            this.props.close();
        })
        .catch(err => {
            console.log(err);
        })
  };

  render() {
      console.log(this.props.currentUser);
      
    return (
      <div>
            <div className="create-post">
                <h1>Create Post</h1>
                <form className="create-post-form" onSubmit={this.handlePostSubmit}>
                    <input className="create-post-title" placeholder="Title" name="title" type="text" onChange={this.handleChange} />
                    <textarea className="create-post-body" placeholder="Post..." name="body" onChange={this.handleChange}></textarea>
                    <input className="create-post-submit" value="SUBMIT" type="submit" />
                </form>
            </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createPost }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreatePostForm);
