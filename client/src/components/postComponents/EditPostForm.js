import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPost, editPost } from "../../redux/actions/postActions";


class EditPostForm extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    this.props.getPost(this.props.postId)
      .then(res => {
        console.log(res);
        this.setState({
          title: res.title,
          body: res.body,
        })
      })
  }
  
  handlePostEdit = (e) => {
    e.preventDefault();

    let update = { 
      title: this.state.title,
      body: this.state.body,
    }

    this.props.editPost(this.props.postId, update)
      .then(res => {
        this.props.cancel();
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    
    let placeholder = this.state.body; // FIX THIS ))))))):
    return (
      <div>
        <div className="edit-post">
          <h1>Edit Post</h1>
          <form className="edit-post-form" onSubmit={this.handlePostEdit}>
            <input className="edit-post-title" defaultValue={this.state.title} name="title" type="text" onChange={this.handleChange} />
            <textarea className="edit-post-body" value={placeholder} name="body" onChange={this.handleChange}></textarea>
            <input className="edit-post-submit" value="Submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPost, editPost }, dispatch);
};

export default connect(null, mapDispatchToProps)(EditPostForm);
