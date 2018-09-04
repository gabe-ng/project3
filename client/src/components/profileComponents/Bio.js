import React, { Component } from "react";

class Bio extends Component {
  render() {
    let profile;
    if (this.props.user) {
      profile = <div className="image-container"> image container </div>;
    }
      

    return <div className="profile-bio">{profile}</div>;
  }
}

export default Bio;
