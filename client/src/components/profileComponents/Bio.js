import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateUser } from "../../redux/actions/userActions";
import { getProfileImage } from "../../redux/actions/profileImageActions";

import AvatarUpload from "./avatarUpload";


class Bio extends Component {
  state = {
    aboutMe: "",
    editingAboutMe: false,
    uploadPicture: false
  };

  componentDidMount = () => {
    console.log(this.props.userId);
    this.props.getProfileImage(this.props.userId)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (nextProps.userId !== this.props.userId) {
      this.props.getProfileImage(nextProps.userId)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleEditUpdate = () => {
    this.setState({
      editingAboutMe: !this.state.editingAboutMe,
      aboutMe: ""
    });
  };

  toggleUpload = () => {
    this.setState({
      uploadPicture: !this.state.uploadPicture
    });
  };

  handleAboutMeUpdate = e => {
    e.preventDefault();

    let userId = this.props.currentUser.user.id;
    let update = {
      aboutMe: this.state.aboutMe
    };

    this.props
      .updateUser(userId, update)
      .then(res => {
        console.log(res);
      })
      .then(() => {
        this.setState({
          editingAboutMe: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let profileImg;
    let aboutMe;
    console.log(this.props);

    if (this.props.userProfile && this.props.currentUser) {
      if (this.state.editingAboutMe) {
        aboutMe = (
          <div className="about-me-container">
            <form className="about-me-form" onSubmit={this.handleAboutMeUpdate}>
              <textarea className="about-me-body"
                name="aboutMe"
                defaultValue={this.props.userProfile.user.aboutMe}
                onInput={this.handleChange}
              />
              <input type="submit" value="Update" className="about-me-submit" />
              <button className="about-me-cancel" onClick={this.toggleEditUpdate}>Cancel</button>
            </form>
          </div>
        );
      } else {
        aboutMe = <div className="about-me-container">
            <div className="about-me-title">
              <h1>About Me</h1>
              {this.props.userProfile.user.id === this.props.currentUser.user.id ? <button
                  onClick={this.toggleEditUpdate} className="about-me-edit"
                >
                  (Edit)
                </button> : <p />}
            </div>
            <p className="about-me-p">
              {this.props.userProfile.user.aboutMe}
            </p>
          </div>;
      }
      if (this.state.uploadPicture) {
        profileImg = (
          <div className="image-container">
            <AvatarUpload
              toggleUpload={this.toggleUpload}
              currentUser={this.props.currentUser}
              userId={this.props.userId}
            />
          </div>
        );
      } else {
        profileImg = <div className="image-container">
            {this.props.imageState.image[0] ? <div className="profile-image-wrap">
                <img src={`http://localhost:3001/profileimage/${this.props.imageState.image[0].name}`} alt="" className="profile-image" />
              </div> : <p>No profile image</p>}
          {this.props.userProfile.user.id === this.props.currentUser.user.id ? 
            <button className="upload-button" onClick={this.toggleUpload}>
            (Upload Picture)
              </button> : <p />}
          </div>;
      }
    }

    return (
      <div className="profile-bio">
        {profileImg} {aboutMe}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageState: state.profileImageReducer
  };
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateUser, getProfileImage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bio);

