import React, { Component } from 'react';
import axios from 'axios';

class avatarUpload extends Component {
    state = {
        imageToBeSent: '',
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        let userId = 
        let image = this.state.imageToBeSent;
        axios.post("http://localhost:3001/api/" + userId + "/upload", image)
            .then((res) => {
                console.log(res);
            })
            .catch(err => console.log(err))    
    }

    render () {
        return (
        <div>
            <h1>Upload your profile picture</h1>
            <button onClick={this.props.toggleUpload} >Cancel</button>
            <form onSubmit={this.handleOnSubmit} enctype="multipart/form-data">
                <input name="myImage" type="file" />
                <input name="submit" type="submit" value="Upload" />
            </form>
        </div>
        )
    }
}

export default avatarUpload;