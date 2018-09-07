import React, { Component } from "react";

class Stats extends Component {
  render() {

    let profile;
    if (this.props.userProfile) {
      let date = this.props.userProfile.user.joinDate.slice(0, 10);
      let date2 = new Date(date);
      let date3;

      if (!isNaN(date2.getTime())) {
        // Months use 0 index.
        date3 = date2.getMonth() + 1 + '/' + date2.getDate() + '/' + date2.getFullYear();
      }

      profile = (
        <div>
          <h2>
            {this.props.userProfile.user.username}
          </h2>
          <p>Full Name: {this.props.userProfile.user.name}</p>
          <p>Email: {this.props.userProfile.user.email}</p>
          <p>Join Date: {date3}</p>
          <ul>
            <h3>Friends</h3>
          </ul>
        </div>
      );
    } else {
      profile = <div>Loading user data</div>
    }

    return <div className="profile-stats">{profile}</div>;
  }
};

export default Stats;
