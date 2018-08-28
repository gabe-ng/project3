import React, { Component } from "react";

import Intro from "./Intro";

import "../../styles/landing.css";

class Landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <h1>Landing</h1>
                <Intro />
            </div>
        );
    }
}

export default Landing;