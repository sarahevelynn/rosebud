import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import DesktopBreakpoint from "./Responsive_Utilities/desktop_breakpoint";
import TabletBreakpoint from "./Responsive_Utilities/tablet_breakpoint";
import PhoneBreakpoint from "./Responsive_Utilities/phone_breakpoint";
import Desktop from "./components/desktop/Index.js";


class App extends Component {
  render() {
    return (
      <div id="App">
        <DesktopBreakpoint>
          <Desktop />
        </DesktopBreakpoint>
      </div>
    );
  }
}

export default App;
