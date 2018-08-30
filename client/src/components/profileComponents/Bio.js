import React, { Component } from "react";

class Bio extends Component {
  render() {
    let profile;
    if (this.props.user) {
      profile = (
        <div>
          <h2>
            {this.props.user.username}
            's Bio
          </h2>
          <p>Full Name: {this.props.user.name}</p>
          <p>Email: {this.props.user.email}</p>
          <p>Join Date: {this.props.user.joinDate}</p>
        </div>
      );
    } else {
        profile = <div>Loading user data</div>
    }

    return <div className="profile-bio">{profile}</div>;
  }
}

export default Bio;
