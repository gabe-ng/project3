import React, { Component } from 'react';
import axios from 'axios';

class avatarUpload extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        <div>
            <h1>Upload your profile picture</h1>
            <form action = "/upload" method="POST" enctype="multipart/form-data">
                <input name="myImage" type="file" />
            </form>
        </div>
    }
}

export default avatarUpload;