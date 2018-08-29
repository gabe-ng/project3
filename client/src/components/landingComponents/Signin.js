import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    componentWillMount = () => {
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            username: this.state.username,
            password: this.state.password,
        }
        // console.log(userData)
        axios.post('http://localhost:3001/api/login', userData)
            .then(res => {
                console.log(res);
                localStorage.setItem("fbct", res.data.token);
                const decoded = jwt_decode(res.data.token);
                this.props.currentUser(decoded);
                this.props.history.push("/homepage");
            })
    }

    render () {
        return <div className="center">
            <div className="card">
              <h1>Login</h1>
              <form onSubmit={this.handleFormSubmit}>
                <input className="form-item" placeholder="Username goes here..." name="username" type="text" onChange={this.handleChange} />
                <input className="form-item" placeholder="Password goes here..." name="password" type="password" onChange={this.handleChange} />
                <input className="form-submit" value="SUBMIT" type="submit" />
              </form>
            </div>
          </div>;
    }
}

export default withRouter(Login);