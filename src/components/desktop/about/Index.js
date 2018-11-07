import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import WhatWeMake from "./WhatWeMake";
import EdibleSafety from "./EdibleSafety";

export default function AboutUs() {
  return (
    <div>
      <div>
        <WhoWeAre />
        <WhatWeMake />
        <EdibleSafety />
      </div>
    </div>
  );
}
