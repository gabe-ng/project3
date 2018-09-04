import React, { Component } from "react";

class Stats extends Component {
  render() {
    let profile;
    if (this.props.userProfile) {
      profile = (
        <div>
          <h2>
            {this.props.userProfile.user.username}
            's Bio
          </h2>
          <p>Full Name: {this.props.userProfile.user.name}</p>
          <p>Email: {this.props.userProfile.user.email}</p>
          <p>Join Date: {this.props.userProfile.user.joinDate}</p>
        </div>
      );
    } else {
      profile = <div>Loading user data</div>
    }

    return <div className="profile-stats">{profile}</div>;
  }
};

export default Stats;
