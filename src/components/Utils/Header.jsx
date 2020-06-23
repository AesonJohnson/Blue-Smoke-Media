import React from "react";
const blueSmoke =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/blue-smoke.png";
const flame = "https://blue-smoke-media.s3-us-west-1.amazonaws.com/flame.png";

export default function Header() {
  return (
    <header>
      <img src={flame} alt="logo-flame" id="flame" />
      <div>
        <img src={blueSmoke} alt="blue-smoke" />
        <p>Digital and Printed Media</p>
        <div className="sub-text">
          <span>What do your customers see...</span>
          <span>...Are you SURE?</span>
        </div>
      </div>
    </header>
  );
}
