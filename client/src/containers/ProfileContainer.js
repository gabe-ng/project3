import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getUserProfile } from "../redux/actions/userActions";

import Bio from "../components/profileComponents/Bio";
import Stats from "../components/profileComponents/Stats";
import PostContainer from "./PostContainer";

import "../styles/profile.css";

class ProfileContainer extends Component {
  state = {
    postContainerMargin: {
      margin: "0 auto 0 0"
    }
  };

  componentDidMount = () => {
    let id = this.props.match.params.user_id;
    this.props
      .getUserProfile(id)
      .then(response => {
        // blank, fetched user info
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (nextProps.match.params.user_id !== this.props.match.params.user_id) {
      let id = nextProps.match.params.user_id;
      this.props
        .getUserProfile(id)
        .then(response => {
          // blank, fetched user info
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {

    return (
      <div className="profile-container">
        <Bio userProfile={this.props.state.profileInfo} currentUser={this.props.currentUser} userId={this.props.match.params.user_id} />
        <Stats userProfile={this.props.state.profileInfo} />
        <PostContainer
          style={this.state.postContainerMargin}
          currentUser={this.props.state.profileInfo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUserProfile }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
