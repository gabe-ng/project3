import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

  render() {
    console.log(this.props);
    
    return (
      <div className="profile-container">
        <Bio />
        <Stats />
        <PostContainer style={this.state.postContainerMargin} />
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
