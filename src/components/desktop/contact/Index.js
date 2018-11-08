import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

var baseURL = "https://saveaway401k.herokuapp.com/";

export default class Contact extends Component {
  state = {
    redirect: false,
    message: "",
    isLoading: false
  };

  getBasicInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupName: data.get("signupName"),
      signupEmail: data.get("signupEmail"),
      signupPhone: data.get("message"),
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/freeGuide", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addBasicInfo = event => {
    this.setState({ isLoading: true });
    event.preventDefault();
    console.log(this.getBasicInfo(event));
    this.sendMessage(event)
      .then(
        setTimeout(() => {
          this.setState({
            message: "Information Sent!",
            isLoading: false
          });
        }, 1000)
      )
      .then(
        setTimeout(() => {
          this.setState({
            redirect: true
          });
        }, 3000)
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div id="infoSignup">
          <div id="signup">
            <h2>General Inquiry!</h2>
            <form className="signupForm" onSubmit={this.addBasicInfo}>
              <label htmlFor="signupName">Your Full Name</label>
              <br />
              <input className="formInput" type="text" name="signupName" />
              <br />
              <label htmlFor="signupEmail">Your Email Adress</label>
              <br />
              <input className="formInput" type="text" name="signupEmail" />
              <br />
              <label htmlFor="message">What Can We Help You With?</label>
              <br />
              <input id="message" type="text" name="message" />
              <br />
              {this.state.isLoading === true ? (
                <Loader
                  type="ThreeDots"
                  color="#fff58d"
                  height="50"
                  width="100"
                />
              ) : (
                <p> {this.state.message} </p>
              )}
              <input type="submit" id="submitButton" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
