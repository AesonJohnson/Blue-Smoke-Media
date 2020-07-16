import React from "react";
const blueBackground =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/blue-smoke.png";
const flame = "https://blue-smoke-media.s3-us-west-1.amazonaws.com/flame.png";

export default function Header() {
  return (
    <header>
      <img src={flame} alt="logo-flame" id="flame" />
      <div className="blue-smoke">
        <img src={blueBackground} alt="blue-smoke" />
        <p>Digital and Printed Media</p>
      </div>
      <div className="center">
        <p>
          Getting <span>your</span> business
        </p>
        <p>
          <span>Back</span> into Business
        </p>
      </div>
      {/* <div className="people" /> */}
      <img src="../../images/black-silhouettes.png" alt="silhouettes" />
    </header>
  );
}
