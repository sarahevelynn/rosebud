import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.jpg";

export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <nav>
        <Link to="/">
          <h2 id="navItem">Home</h2>
        </Link>
        <Link to="/about">
          <h2 id="navItem">About Us</h2>
        </Link>
        <Link to="/locations">
          <h2 id="navItem">Our Locations</h2>
        </Link>
        <Link to="/companySignup">
          <h2 id="navItem">Company Signup</h2>
        </Link>
        <Link to="/contact">
          <h2 id="navItem">Contact Us</h2>
        </Link>
      </nav>
    </header>
  );
}
