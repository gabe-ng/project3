import React, { Component } from "react";

class HomeProfile extends Component {
  render() {
   
    let profile;

    if (this.props.currentUser.user) {
      profile = 
      (<div>
        <h2>Hi {this.props.currentUser.user.name}!</h2>
      </div>)
    }

    return (
      <div className="homepage-profile">
       {profile}
      </div>
    );
  }
}

export default HomeProfile;
