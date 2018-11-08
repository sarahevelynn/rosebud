import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoseBudImage from "./RoseBudImage.png";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
      <img src={RoseBudImage} id="frontPhoto" alt="RoseBudImage" />

      </div>
    );
  }
}
