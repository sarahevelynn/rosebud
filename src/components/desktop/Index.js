import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header/Index.js";

export default class Desktop extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Header />
          </div>
      </Router>
      </div>

    );
  }
}
