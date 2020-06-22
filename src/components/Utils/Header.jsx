import React from "react";
import blueSmoke from "../../images/blue-smoke.png";
// import blueSmoke from "../../images/blue-background.png";
import flame from "../../images/flame.png";

export default function Header() {
  return (
    <header>
      {/* <img src={blueSmoke} alt="blue-smoke" /> */}
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
