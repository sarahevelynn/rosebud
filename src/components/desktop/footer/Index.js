import React from "react";
import email from "./assets/email.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";

export default function Footer() {
  return (
    <footer>
      <p id="copy">&copy; 2018, RoseBud, LLC</p>
      <div id="social">
        <a href={"mailto:samrose244@gmail.com"} target="_blank">
          <img src={email} className="socialPhoto" alt="email us" />
        </a>
        <a
          href={"https://www.instagram.com/rosebud_ice_cream/"}
          target="_blank"
        >
          <img src={instagram} className="socialPhoto" alt="instagram" />
        </a>
        <a href={"https://www.facebook.com/"} target="_blank">
          <img src={facebook} className="socialPhoto" alt="facebook" />
        </a>
      </div>
    </footer>
  );
}
