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
    return (
      <div className="post">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <ul className="comment-list">
      
        </ul>
      </div>
    );
  }
}

export default Post;
