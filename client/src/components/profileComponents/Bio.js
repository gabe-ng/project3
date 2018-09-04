import React, { Component } from "react";

class Bio extends Component {
  state = {
    aboutMe: '',
    editingAboutMe: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggleUpdate = () => {
    this.setState({
      editingAboutMe: !(this.state.editingAboutMe),
      aboutMe: '',
    })
  }

  handleAboutMeUpdate = (e) => {
    e.preventDefault();
  }

  render() {
    let profileImg;
    let aboutMe;
    console.log(this.props);
    

    if (this.props.userProfile && this.props.currentUser) {
      if (this.state.editingAboutMe) {
        aboutMe = (
          <div className="about-me-container">
          <form onClick={this.handleAboutMeUpdate}>
            <textarea name="aboutMe" defaultValue={this.props.userProfile.user.aboutMe} ></textarea>
            <input type="submit" value="Update" />
          </form>
          <button onClick={this.toggleUpdate} >Cancel</button>
          </div>
        )
    } else {
        aboutMe = <div className="about-me-container">
            <h1>About Me</h1>
            <p>{this.props.userProfile.user.aboutMe}</p>
            {this.props.userProfile.user.id === this.props.currentUser.user.id
              ? <button onClick={this.toggleUpdate}>(Edit)</button>
              : <p></p>
            }
          </div>;
    }

    profileImg = <div className="image-container">image container</div>

    }

    return <div className="profile-bio">{profileImg} {aboutMe}</div>;
  }
}

export default Bio;
