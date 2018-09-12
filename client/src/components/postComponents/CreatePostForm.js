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
            this.props.close();
        })
        .catch(err => {
            console.log(err);
        })
  };

  render() {

    return (
      <div>
            <div className="card">
                <h2>Create Post</h2>
                <form onSubmit={this.handlePostSubmit}>
                    <input className="form-item form-title" placeholder="Title" name="title" type="text" onChange={this.handleChange} />
                    <textarea className="form-item form-text" placeholder="Post..." name="body" onChange={this.handleChange}></textarea>
                    <input className="form-submit" value="Submit" type="submit" />
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
