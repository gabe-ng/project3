import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getProfileImage } from "../../redux/actions/profileImageActions";


class HomeProfile extends Component {

  componentWillUpdate = (nextProps, nextState) => {
    if (nextProps.currentUser.user !== this.props.currentUser.user) {
      this.props
        .getProfileImage(nextProps.currentUser.user.id)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    let profile;
    let image;

    if (
      this.props.imageState.image &&
      this.props.imageState.image.length !== 0
    ) {
      image = (
        <img
          src={`http://localhost:3001/profileimage/${
            this.props.imageState.image[0].name
          }`} alt=""
          className="homepage-image"
        />
      );
    }

    if (this.props.currentUser.user) {
      profile = <div className="homepage-profile">
          <h2>Hi {this.props.currentUser.user.name}!</h2>
          <div className="homepage-image-container">{image}</div>
        </div>;
    }

    return <div>{profile}</div>;
  }
}

const mapStateToProps = state => {
  return {
    imageState: state.profileImageReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProfileImage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeProfile);

