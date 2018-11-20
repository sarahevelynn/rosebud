import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoseBud from "./RoseBud.png";
import Footer from "../footer/Index";

export default class Welcome extends React.Component {
  render() {
    return (
      <div id="welcomeDiv">
        <img src={RoseBud} id="frontPhoto" alt="Rose Bud Image" />
        <Footer />
      </div>
    );
  }
}
