import React, { Component } from "react";

// import EditPostForm from "./EditPostForm";

class Post extends Component {
  render() {
    // let comments = this.props.post.comments.map(comment => {
    //   return <li>
    //       <h4>{comment.title}</h4>
    //       <p>{comment.body}</p>
    //       <p>By {comment.user.name} on {comment.dateCreated}</p>
    //     </li>;
    // })
    let options;
    // Wait for user attribute to load
    if (this.props.post.user && this.props.currentUser) {
      // A user can see the edit and delete options only if they are the post creators
      if (this.props.post.user._id === this.props.currentUser.user.id) {
        options = <span>
            <span className="post-option">
              Edit
            </span> | <span className="post-option">
              Delete
            </span>
          </span>;
      } else {
      options = <span>Posted by {this.props.post.user.username}</span>;
      }
    }

    return (
      <div className="post">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <ul className="comment-list">
      
        </ul>
        {options}
      </div>
    );
  }
}

export default Post;
