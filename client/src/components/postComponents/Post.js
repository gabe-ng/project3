import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deletePost } from "../../redux/actions/postActions";
import { getComments, createComment } from "../../redux/actions/commentActions";

// import EditPostForm from "./EditPostForm";

class Post extends Component {
  state = {
    comment: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let comment = { body: this.state.comment };
    let userId = this.props.currentUser.user.id;
    let postId = e.target.getAttribute("data-id");
    this.props.createComment(comment, userId, postId)
      .then(res => {
        this.props.getComments();
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount = () => {
    this.props.getComments(this.props.post._id)
      .then(res => {
        console.log(res);
        
        console.log("fetched post comments");
      })
      .catch(err => {
        console.log(err); 
      })
  }
  
  render() {
    
    let options;
    // Wait for user attribute to load
    if (this.props.post.user && this.props.currentUser) {
      // A user can see the edit and delete options only if they are the post creators
      if (this.props.post.user._id === this.props.currentUser.user.id) {
        options = <span>
            <span className="post-option">
              Edit
            </span> | <span className="post-option" onClick={() => this.props.deletePost(this.props.post._id)}>
              Delete
            </span>
          </span>;
      } else {
      options = <span>Posted by {this.props.post.user.username}</span>;
      }
    }
    console.log(this.props);
    console.log(this.props.commentState.comments);

    let comments;
    if (this.props.commentState.comments && this.props.commentState.comments.length !== 0) {
      
        comments = this.props.commentState.comments.map(comment => {
        return (
          <div className="comment" key={comment._id}>
            <p>{comment.title}</p>
            <p>{comment.body}</p>
            <p>Posted By: {comment.user.username} on {comment.dateCreated}</p>
          </div>
        )
      })
    } else {
      comments = <div>No comments yet.</div>
    }

    return <div className="post">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        {options}
        <ul className="comment-list">
        <input type="text" name="comment" placeholder="Leave a comment" className="comment-box" onChange={this.handleChange}/>
        <input type="submit" value="Comment" className="comment-submit" data-id={`${this.props.post._id}`} onClick={this.handleSubmit} />
        {comments}</ul>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    commentState: state.commentReducer
  };
}; 

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deletePost, getComments, createComment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

