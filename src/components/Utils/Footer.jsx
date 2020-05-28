import React from "react";
import blueSmoke from "../../images/blue-smoke.png";
import youtube from "../../images/youTube.png";
import twitter from "../../images/Twitter.png";
import linkedIn from "../../images/linkedIn_social_media_button.png";
import behance from "../../images/Behance.png";
import facebook from "../../images/faceBook.png";

export default function Footer() {
  return (
    <footer>
      <img src={blueSmoke} alt="blue-smoke" />
      <p id="sub-header">Digital and Printed Media</p>
      <div className="bottom">
        <div className="email">
          <span>Email: </span>
          <p>
            info@BlueSmokeDigitalMedia.com
            <br />
            CoBe@BlueSmokeDigitalMedia.com
            <br />
            Braden@BlueSmokeDigitalMedia.com
            <br />
            Aeson@BlueSmokeDigitalMedia.com
            <br />
            AR@BlueSmokeDigitalMedia.com
          </p>
          <div className="smBtns">
            <a href="#">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="#">
              <img src={behance} alt="behance" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
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
