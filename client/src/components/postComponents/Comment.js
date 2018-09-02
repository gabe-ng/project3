// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import { createComment } from "../../redux/actions/commentActions";

// class Comment extends Component {
//     state = {
//         comment: '',
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         let comment = { body: this.state.comment };
//         let userId = this.props.currentUser.user.id;
//         let postId = e.target.getAttribute("data-id");
//         this.props.createComment(comment, userId, postId)
//             .then(res => {
//                 this.props.getComments();
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({ createComment }, dispatch);
// };

// export default connect(null, mapDispatchToProps)(Comment);


// let comments;
// if (this.props.commentState.comments && this.props.commentState.comments.length !== 0) {

//     comments = this.props.commentState.comments.map(comment => {
//         return (
//             <div className="comment" key={comment._id}>
//                 <p>{comment.title}</p>
//                 <p>{comment.body}</p>
//                 <p>Posted By: {comment.user.username} on {comment.dateCreated}</p>
//             </div>
//         )
//     })
// } else {
//     comments = <div>No comments yet.</div>
// }


// <input type="text" name="comment" placeholder="Leave a comment" className="comment-box" onChange={this.handleChange} />
//     <input type="submit" value="Comment" className="comment-submit" data-id={`${this.props.post._id}`} onClick={this.handleSubmit} />
//         { comments }
