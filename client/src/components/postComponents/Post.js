import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPosts, deletePost } from "../../redux/actions/postActions";
import { getComments, createComment, deleteComment, deletePostComments } from "../../redux/actions/commentActions";

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
    console.log('Submitted', this.state.comment);
    if (this.state.comment !== "") {
      let comment = { body: this.state.comment };
      let userId = this.props.currentUser.user.id;
      let postId = e.target.getAttribute("data-id");
      console.log(comment, userId, postId);
      
      this.props.createComment(comment, userId, postId)
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

  handlePostDelete = (postId) => {
    this.props.deletePost(postId)
      .then(() => this.props.deletePostComments(postId))
      .then(() => this.props.getPosts());
  }

  handleCommentDelete = (commentId) => {
    this.props.deleteComment(commentId)
      .then(() => this.props.getComments());
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
        options = <p className="options">
            <span className="post-option" data-id={this.props.post._id} onClick={this.props.editPost}>
              Edit
            </span> | <span className="post-option" onClick={() => this.handlePostDelete(this.props.post._id)}>
              Delete
            </span>
          </p>;
      } else {
      options = <p className="posted-by">Posted by {this.props.post.user.username}</p>;
      }
    }
    console.log(this.props.commentState.comments);

    
    
    let comments;
   
    if (this.props.commentState.comments && this.props.commentState.comments.length !== 0 && this.props.currentUser) {
        comments = this.props.commentState.comments.map(comment => {

          let date = comment.dateCreated.slice(0, 10);
          let date2 = new Date(date);
          let date3;

          if (!isNaN(date2.getTime())) {
            // Months use 0 index.
            date3 = date2.getMonth() + 1 + '/' + date2.getDate() + '/' + date2.getFullYear();
          }

          if(this.props.post._id === comment.post._id) {
            return <div className="comment" key={comment._id}>
              <p className="comment-body">{comment.body}</p>
              {comment.user._id === this.props.currentUser.user.id
                  ? <p className="comment-posted-by">
                    Posted By: {comment.user.username} on {date3} - 
                    <span className="comment-delete" onClick={() => this.handleCommentDelete(comment._id)}>
                     {" "}Delete
                </span>
                  </p>
                :  <p className="comment-posted-by">
                    Posted By: {comment.user.username} on {date3}
                  </p>}
            </div>;
          }
      })

    } else {
      comments = <div>No comments yet.</div>
    }

    return <div className="post">
        <h3 className="post-title">{this.props.post.title}</h3>
        <p className="post-body">{this.props.post.body}</p>
        {options}
        <ul className="comment-list">
          <form onSubmit={this.handleSubmit} id={`comment-form-${this.props.post._id}`} data-id={`${this.props.post._id}`}>
            <input type="text" name="comment" placeholder="Leave a comment" value={this.state.comment} className="comment-box" onInput={this.handleChange} />
            <input type="submit" value="Comment" className="comment-submit" />
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
  return bindActionCreators({ getPosts, deletePost, getComments, createComment, deleteComment, deletePostComments }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

