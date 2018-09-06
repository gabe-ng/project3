import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { editPost } from "../../redux/actions/postActions";

import axios from "axios";

class EditPostForm extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/api/posts/" + this.props.postId)
      .then(res => {
        console.log(res.data);
        
        this.setState({
          title: res.data.title,
          body: res.data.body,
        })
      })
  }
  
  handlePostEdit = (e) => {
    e.preventDefault();

    let update = { 
      title: this.state.title,
      body: this.state.body,
    }

    axios.put("http://localhost:3001/api/posts/" + this.props.postId, update)
      .then(res => {
        console.log("success");
        console.log(res);
        this.props.cancel();
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    
    let placeholder = this.state.body; // FIX THIS
    return (
      <div>
        <div className="card">
          <h1>Edit Post</h1>
          <form onSubmit={this.handlePostEdit}>
            <input className="form-item" defaultValue={this.state.title} name="title" type="text" onChange={this.handleChange} />
            <textarea className="form-item" defaultValue={placeholder} name="body" onChange={this.handleChange}></textarea>
            <input className="form-submit" value="SUBMIT" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}


// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ editPost }, dispatch);
// };

export default connect(null, null)(EditPostForm);
