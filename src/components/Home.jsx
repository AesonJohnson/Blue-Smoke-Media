import React from "react";
import logo from "../images/logo.png";
import globe from "../images/globe.jpg";
import Navigation from "./Navigation";
import digitalMarketing from "./../images/digital-marketing.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <Navigation />
      <img src={globe} alt="globe" />
      <p>
        <h1>Blue Smoke Printed and Digital Media</h1>, produces media for
        Individual businesses, Small and Medium sized businesses - Websites that
        are fast loading, Organically Search Engine Optimized, visually
        appealing, and easy to navigate.
      </p>
      <img src={digitalMarketing} alt="Digital Marketing" />
      <p>
        The first impression your business makes on every one, from thousands of
        perspective clients to your competitors, is an image you create. Your
        website delivers that critical first impression. At{" "}
        <h1>Blue Smoke Printed and Digital Media</h1>, we take into
        consideration the major success factors like Usability, Logical Order,
        Flow, and Organic Search Engine Optimization. The{" "}
        <h1>Bue Smoke Media team</h1>, designs websites that pay for themselves
        by generating leads, closing sales, and reducing customer service costs.
      </p>
    </div>
  );
}
