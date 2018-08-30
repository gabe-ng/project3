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
    let id = this.props.match.params.user_id
    this.props.getUserProfile(id)
      .then(response => {
        console.log("fetched user info");
      })
      .catch(err => {
        console.log(err);
      })
  }
  

  render() {
    console.log(this.props);
    console.log(this.props.state);
    
    return <div className="profile-container">
        <Bio user={this.props.state} />
        <Stats user={this.props.state} />
        <PostContainer style={this.state.postContainerMargin} />
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    state: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUserProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
