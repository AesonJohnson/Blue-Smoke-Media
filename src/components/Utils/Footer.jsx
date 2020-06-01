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
            <a
              href="mailto: info@BlueSmokeDigitalAndPrintedMedia.com"
              rel="nofollow noopener noreferrer"
            >
              info@BlueSmokeDigitalAndPrintedMedia.com
            </a>
            <br />
            <a
              href="mailto: CoBe@BlueSmokeDigitalAndPrintedMedia.com"
              rel="nofollow noopener noreferrer"
            >
              CoBe@BlueSmokeDigitalAndPrintedMedia.com
            </a>
            <br />
            <a
              href="mailto: Braden@BlueSmokeDigitalAndPrintedMedia.com"
              rel="nofollow noopener noreferrer"
            >
              Braden@BlueSmokeDigitalAndPrintedMedia.com
            </a>
            <br />
            <a
              href="mailto: Aeson@BlueSmokeDigitalAndPrintedMedia.com"
              rel="nofollow noopener noreferrer"
            >
              Aeson@BlueSmokeDigitalAndPrintedMedia.com
            </a>
            <br />
            <a
              href="mailto: AR@BlueSmokeDigitalAndPrintedMedia.com"
              rel="nofollow noopener noreferrer"
            >
              AR@BlueSmokeDigitalAndPrintedMedia.com
            </a>
          </p>
          <div className="smBtns">
            <a href="#" rel="nofollow noopener noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="#" rel="nofollow noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#" rel="nofollow noopener noreferrer">
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="#" rel="nofollow noopener noreferrer">
              <img src={behance} alt="behance" />
            </a>
            <a href="#" rel="nofollow noopener noreferrer">
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
        2019 - 2020 ©Copyright. Blue Smoke Digital and Printed Media / All
        Rights Reserved / Tennessee, Utah, Florida, Washington, Idaho
      </span>
    </footer>
  );
}
