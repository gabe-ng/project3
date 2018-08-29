import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { signUp } from "../../redux/actions/authActions";


class SignUp extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        passwordConfirmation: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("in sign up submit");
        console.log(this.state);
        

        if (this.state.password === this.state.passwordConfirmation) {

            const userData = {
                name: this.state.name,
                username: this.state.username,
                password: this.state.password,
            }

            this.props.signUp(userData)
                .then(() => {
                    this.props.history.push("/homepage");
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            // handle error
        }
    }

    render() {
        return <div className="center">
            <div className="card">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input className="form-item" placeholder="Full name goes here..." name="name" type="text" onChange={this.handleChange} />
                    <input className="form-item" placeholder="Username goes here..." name="username" type="text" onChange={this.handleChange} />
                    <input className="form-item" placeholder="Password goes here..." name="password" type="password" onChange={this.handleChange} />
                    <input className="form-item" placeholder="Confirm password here..." name="passwordConfirmation" type="password" onChange={this.handleChange}/>
                    <input className="form-submit" value="SUBMIT" type="submit" />
                </form>
            </div>
        </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
