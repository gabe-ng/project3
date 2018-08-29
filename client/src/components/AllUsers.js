import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllUsers, getUserProfile } from "../redux/actions/userActions";

class AllUsers extends Component {
    
    componentDidMount = () => {
        this.props.getAllUsers()
    }

    handleProfileClick = (e) => {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        this.props
            .getUserProfile(id)
            .then(res => {
                this.props.history.push("/profile");
            })
            .catch(error => {
                console.log(error);
            })
    }

    render () {
        console.log(this.props.state);
        
        let userList;
        if (this.props.state.users) {
            userList = this.props.state.users.users.map(user => {
            return <div key={user.username} className="user-entries">
                <a href="" data-id={user._id} onClick={this.handleProfileClick}>{user.name}</a>
              </div>;
            })
         } else {
             userList = null;
         }
        return (
            <div className="user-list">
                <h1>All Users</h1>
                {userList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.userReducer
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getAllUsers, getUserProfile }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllUsers));