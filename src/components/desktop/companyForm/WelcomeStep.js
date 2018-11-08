import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class CompanyEnrollment extends React.Component {
  render() {
    return (
      <div className="aboutSections">
        <div className="aboutContent">
          <div id="welcomePage">
            <h3>
              Welcome to RoseBud.
              <br />
              We would love to explore a relationship with your company.
              <br />
              Please fill out the following steps to apply to carry our product
              in your store.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
