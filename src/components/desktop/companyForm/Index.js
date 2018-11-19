import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MultiStep from "./MultiStep";
import StickyFooter from "../footer/stickFooter";
import "../../../progressBar.css";

export default class CompanySignup extends React.Component {
  render() {
    return (
      <div className="signUp">
        <div className="multiFormDiv">
          <MultiStep />
        </div>
        <StickyFooter />
      </div>
    );
  }
}
