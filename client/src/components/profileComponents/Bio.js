import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateUser } from "../../redux/actions/userActions";

import AvatarUpload from "./avatarUpload";


class Bio extends Component {
  state = {
    aboutMe: '',
    editingAboutMe: false,
    uploadPicture: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggleEditUpdate = () => {
    this.setState({
      editingAboutMe: !(this.state.editingAboutMe),
      aboutMe: '',
    })
  }

  toggleUpload = () => {
    this.setState({
      uploadPicture: !(this.state.uploadPicture),
    })
  }

  handleAboutMeUpdate = (e) => {
    e.preventDefault();

    let userId = this.props.currentUser.user.id;
    let update = {
      aboutMe: this.state.aboutMe,
    }

    this.props.updateUser(userId, update)
      .then(res => {
        console.log(res);
      })
      .then(() => {
        this.setState({
          editingAboutMe: false,
        })
      })
      .catch(err => {
        console.log(err);  
      })
  }

  render() {
    let profileImg;
    let aboutMe;
    console.log(this.props);
    

    if (this.props.userProfile && this.props.currentUser) {
      if (this.state.editingAboutMe) {
        aboutMe = (
          <div className="about-me-container">
          <form onSubmit={this.handleAboutMeUpdate}>
            <textarea name="aboutMe" defaultValue={this.props.userProfile.user.aboutMe} onInput={this.handleChange} ></textarea>
            <input type="submit" value="Update" />
          </form>
          <button onClick={this.toggleEditUpdate} >Cancel</button>
          </div>
        )
    } else {
        aboutMe = <div className="about-me-container">
            <h1>About Me</h1>
            <p>{this.props.userProfile.user.aboutMe}</p>
            {this.props.userProfile.user.id === this.props.currentUser.user.id
              ? <button onClick={this.toggleEditUpdate}>(Edit)</button>
              : <p></p>
            }
          </div>;
    }
      if (this.state.uploadPicture) {
        profileImg = <AvatarUpload toggleUpload={this.toggleUpload} currentUser={this.props.currentUser} />
      } else {
        profileImg = (<div className="image-container">
                    <button onClick={this.toggleUpload} >Upload Picture</button>
                    image container
                    </div>)
      }
    }

    return <div className="profile-bio">{profileImg} {aboutMe}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(Bio);

