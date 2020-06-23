import React, { useEffect } from "react";
import axios from "axios";
const blueSmoke =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/blue-smoke.png";
const youtube =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/youTube.png";
const twitter =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Twitter.png";
const linkedIn =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/linkedIn_social_media_button.png";
const instagram =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/instagram.png";
const behance =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Behance.png";
const facebook =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/faceBook.png";

export default function Footer() {
  useEffect(() => {
    axios
      .get(
        "https://api.linkedin.com/v2/networkSizes/urn:li:organization:54284240"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <footer>
      <img src={blueSmoke} alt="blue-smoke" />
      <p id="sub-header">Digital and Printed Media</p>
      <div className="bottom">
        <div className="email">
          <span>Email: </span>
          <p>
            <a
              href="mailto: info@BlueSmokeMedia.net"
              rel="nofollow noopener noreferrer"
            >
              info@BlueSmokeMedia.net
            </a>
            <br />
            <a
              href="mailto: CoBe@BlueSmokeMedia.net"
              rel="nofollow noopener noreferrer"
            >
              CoBe@BlueSmokeMedia.net
            </a>
            <br />
            <a
              href="mailto: Braden@BlueSmokeMedia.net"
              rel="nofollow noopener noreferrer"
            >
              Braden@BlueSmokeMedia.net
            </a>
            <br />
            <a
              href="mailto: Aeson@BlueSmokeMedia.net"
              rel="nofollow noopener noreferrer"
            >
              Aeson@BlueSmokeMedia.net
            </a>
            <br />
            <a
              href="mailto: AR@BlueSmokeMedia.net"
              rel="nofollow noopener noreferrer"
            >
              AR@BlueSmokeMedia.net
            </a>
          </p>
        </div>
        <div className="contact">
          <span>Contact:</span>
          <p>
            Blue Smoke Media
            <br />
            {/* //todo get PO box number */}
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
      <div className="smBtns">
        <a href="#" rel="nofollow noopener noreferrer">
          <img src={youtube} alt="youtube" />
        </a>
        <a href="#" rel="nofollow noopener noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
        <div className="linkedIn">
          <a href="#" rel="nofollow noopener noreferrer">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <script
            src="https://platform.linkedin.com/in.js"
            type="text/javascript"
          >
            {" "}
            lang: en_US
          </script>
          <script
            type="IN/FollowCompany"
            data-id="54284240"
            data-counter="bottom"
          ></script>
        </div>
        <a href="#" rel="nofollow noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#" rel="nofollow noopener noreferrer">
          <img src={behance} alt="behance" />
        </a>
        <a href="#" rel="nofollow noopener noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
      </div>

      <span>
        2019 - 2020 ©Blue Smoke Digital and Printed Media / All Rights Reserved
        / Tennessee, Utah, Florida, Washington, Idaho, South Carolina
      </span>
    </footer>
  );
}
