import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header/Index";
import Welcome from "./welcome/Index";
import About from "./about/Index";
import Locations from "./location/Index";
import CompanySignup from "./companyForm/Index";
import Contact from "./contact/Index";

export default class Desktop extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/about" component={About} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/companySignup" component={CompanySignup} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}
