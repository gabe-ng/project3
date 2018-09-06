import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPosts } from "../../redux/actions/postActions";
import Post from "./Post";

class Posts extends Component {

  componentDidMount = () => {
    this.props.getPosts()
      .then(res => {
        console.log("fetched posts");
      })
      .catch(err => {
        console.log(err);   
      })
  }

  componentWillUpdate = (nextProps, nextState) => {
    if (this.props.postState.message !== nextProps.postState.message) {
      this.props
        .getPosts()
        .then(res => {
          console.log("fetched posts");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  
  render() {

    let posts = this.props.postState.posts.map(post => {
      return <Post currentUser={this.props.currentUser} key={post._id} id={post._id} post={post} editPost={this.props.toggleEditPost} />;
    });

    
    return <div className="posts-list">
        {posts}
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    postState: state.postReducer,
  };
}; 

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
