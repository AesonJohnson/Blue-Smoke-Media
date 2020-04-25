import React from "react";
import blueSmoke from "../images/blue-smoke.png";

export default function Footer() {
  return (
    <footer>
      <img src={blueSmoke} alt="blue-smoke" />
      <p id="sub-header">Digital and Printed Media</p>
      <div className="bottom">
        <div className="email">
          <span id="email">Email: </span>
          <p>
            info@BlueSmokeMedia.com
            <br />
            CoBe@BlueSmokeMedia.com
            <br />
            Braden@BlueSmokeMedia.com
            <br />
            Aeson@BlueSmokeMedia.com
            <br />
            AR@BlueSmokeMedia.com
          </p>
        </div>
        <div className="contact">
          <span>Contact:</span>
          <p>
            Blue Smoke Media
            <br />
            P.O. BOX /// <br />
            Erwin, TN 37650
            <br />
            <br />
            865.274.1371
            <br />
            801.690.1189
          </p>
        </div>
      </div>
      <span>
        2019 - 2020 Copyright. Blue Smoke Digital and Printed Media / All Rights
        Reserved
      </span>
    </footer>
  );
}
