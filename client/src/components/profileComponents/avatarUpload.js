import React, { Component } from 'react';

class avatarUpload extends Component {


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