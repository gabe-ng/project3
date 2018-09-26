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

        return <div className="image-upload card">
            <h2>Upload your profile picture</h2>
            <form onSubmit={this.handleOnSubmit} encType="multipart/form-data">
              <label className="form-submit image-uploader">
                <input name="myImage" type="file" id="image-input" onChange={this.handleChange} />
              </label>
              <input name="submit" type="submit" value="Upload" className="image-upload-submit form-submit " />
              <button onClick={this.props.toggleUpload} className="form-submit image-upload-cancel">
                Cancel
              </button>
            </form>
          </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getProfileImage, uploadProfileImage }, dispatch);
};

export default connect(null, mapDispatchToProps)(avatarUpload);
