import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import WhatWeMake from "./WhatWeMake";
import EdibleSafety from "./EdibleSafety";
import Footer from "../footer/Index";

export default function AboutUs() {
  return (
    <div>
      <div>
        <WhoWeAre />
        <WhatWeMake />
        <EdibleSafety />
        <Footer />
      </div>
    </div>
  );
}
