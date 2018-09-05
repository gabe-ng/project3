import React, { Component } from 'react';
import axios from 'axios';

class avatarUpload extends Component {
    state = {
        myImage: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        // console.log(document.getElementById("image-input").value);
        
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        let userId = this.props.currentUser.user.id;
        let image = this.state.myImage;

        const data = new FormData(document.querySelector("form"));

        axios.post("http://localhost:3001/api/" + userId + "/upload", data)
            .then((res) => {
                console.log(res);
                document.querySelector("form").reset();
            })
            .catch(err => console.log(err))    
    }

    render () {
        console.log("DWQHDHWDJDQJ", this.state);
        
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

export default avatarUpload;