import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deletePost } from "../../redux/actions/postActions";
import { getComments, createComment, deletePostComments } from "../../redux/actions/commentActions";

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
    if (this.state.comment !== "") {
      let comment = { body: this.state.comment };
      let userId = this.props.currentUser.user.id;
      let postId = e.target.getAttribute("data-id");
      this.props.createComment(comment, userId, postId)
        .then(res => {
          console.log(res);
          this.props.getComments();
        })
        .then(() => {
          this.setState({
            comment: ''
          })
          document.getElementById(`comment-form-${this.props.post._id}`).reset();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  handleDelete = (postId) => {
    this.props.deletePost(postId)
      .then(() => this.props.deletePostComments(postId));
  }

  componentDidMount = () => {
    this.props.getComments()
      .then(res => {
        console.log(res);
        console.log("fetched post comments");
      })
      .catch(err => {
        console.log(err); 
      })
  }
  
  render() {
    console.log(this.state.comment);
    
    let options;
    // Wait for user attribute to load
    if (this.props.post.user && this.props.currentUser) {
      // A user can see the edit and delete options only if they are the post creators
      if (this.props.post.user._id === this.props.currentUser.user.id) {
        options = <span>
            <span className="post-option">
              Edit
            </span> | <span className="post-option" onClick={() => this.handleDelete(this.props.post._id)}>
              Delete
            </span>
          </span>;
      } else {
      options = <span>Posted by {this.props.post.user.username}</span>;
      }
    }
    console.log(this.props.commentState.comments);

    
    
    let comments;
    if (this.props.commentState.comments && this.props.commentState.comments.length !== 0) {
      
        comments = this.props.commentState.comments.map(comment => {
          if(this.props.post._id === comment.post._id) {
            return (
              <div className="comment" key={comment._id}>
                <p>{comment.title}</p>
                <p>{comment.body}</p>
                <p>Posted By: {comment.user.username} on {comment.dateCreated}</p>
              </div>
            )
          }
      })

    } else {
      comments = <div>No comments yet.</div>
    }

    return <div className="post">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        {options}
        <ul className="comment-list">
          <form onClick={this.handleSubmit} id={`comment-form-${this.props.post._id}`}>
            <input type="text" name="comment" placeholder="Leave a comment" className="comment-box" onChange={this.handleChange} />
            <input type="submit" value="Comment" className="comment-submit" data-id={`${this.props.post._id}`}/>
          </form>
          {comments}
        </ul>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    commentState: state.commentReducer
  };
}; 

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deletePost, getComments, createComment, deletePostComments }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

