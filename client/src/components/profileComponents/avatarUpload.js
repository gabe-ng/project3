import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getProfileImage, uploadProfileImage } from "../../redux/actions/profileImageActions";

class avatarUpload extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        let userId = this.props.currentUser.user.id;
        const data = new FormData(document.querySelector("form"));

        this.props.uploadProfileImage(userId, data)
            .then((res) => {
                document.querySelector("form").reset();
                this.props.getProfileImage(this.props.userId);
            })
            .then(() => this.props.toggleUpload())
            .catch(err => console.log(err))    
    }

    render () {

        return (
        <div>
            <h1>Upload your profile picture</h1>
            <button onClick={this.props.toggleUpload} >Cancel</button>
            <form onSubmit={this.handleOnSubmit} encType="multipart/form-data">
                <input name="myImage" type="file" id="image-input" onChange={this.handleChange} />
                <input name="submit" type="submit" value="Upload" />
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getProfileImage, uploadProfileImage }, dispatch);
};

export default connect(null, mapDispatchToProps)(avatarUpload);
