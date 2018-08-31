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
    console.log("in profile did mount");

    let id = this.props.match.params.user_id;
    this.props
      .getUserProfile(id)
      .then(response => {
        console.log("fetched user info");
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (nextProps.match.params.user_id !== this.props.match.params.user_id) {
      console.log("diff props");
      console.log("AAAAYYYOOOOOOOOO", nextProps);
      let id = nextProps.match.params.user_id;
      this.props
        .getUserProfile(id)
        .then(response => {
          console.log("fetched user info");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    console.log(this.props.state.profileInfo);
    
    return (
      <div className="profile-container">
        <Bio user={this.props.state.profileInfo} />
        <Stats user={this.props.state.profileInfo} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
