import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Confirmation extends React.Component {
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <div id="confirmation">
          <div id="confirmationInfo">
            <h2>
              We will be in contact with you soon for next steps on your account
            </h2>
            <a href="https://imgflip.com/gif/21gr1">
              <img src="https://i.imgflip.com/21gr1.gif" id="gif" alt="Good to Go!"/>
            </a>
          </div>
          <Link to="/Guide">
            <h2 id="confirmButton">Click here to receive a free guide!</h2>
          </Link>
          <Link to="/">
            <h2 id="confirmButton">Or Go Back to the Homepage</h2>
          </Link>
        </div>
      </div>
    );
  }
}
