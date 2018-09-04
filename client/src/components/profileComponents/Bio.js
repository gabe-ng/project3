import React, { Component } from "react";

class Bio extends Component {
  render() {
    let profile;
    if (this.props.user) {
      console.log("USERQWUDQWUDWQU", this.props.user);
      
      profile = <div>
        <div className="image-container"> image container </div>
        <div className="about-me-container"><p>{this.props.user.user.aboutMe}</p></div>
      </div>;
    }

    return <div className="profile-bio">{profile}</div>;
  }
}

export default Bio;
