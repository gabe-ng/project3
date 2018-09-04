import React, { Component } from "react";

class Stats extends Component {
  render() {
    let profile;
    if (this.props.user) {
      profile = (
        <div>
          <h2>
            {this.props.user.user.username}
            's Bio
          </h2>
          <p>Full Name: {this.props.user.user.name}</p>
          <p>Email: {this.props.user.user.email}</p>
          <p>Join Date: {this.props.user.user.joinDate}</p>
        </div>
      );
    } else {
      profile = <div>Loading user data</div>
    }

    return <div className="profile-bio">{profile}</div>;
  }
};

export default Stats;
