import React from "react";
import Navigation from "./Navigation";
//* Images
import logo from "../images/logo.png";
import globe from "../images/globe.jpg";
import silhouette from "./../images/silhouette.png";
import socialMedia from "./../images/social-media.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <Navigation />
      <section className="globe">
        {/* <img src={globe} alt="globe" /> */}
        <p>
          <h1>Blue Smoke Printed and Digital Media</h1>, produces media for
          Individual businesses, Small and Medium sized businesses - Websites
          that are fast loading, Organically Search Engine Optimized, visually
          appealing, and easy to navigate.
        </p>
      </section>
      <section className="silhouette">
        <img src={silhouette} alt="Digital Marketing" />
        <p>
          The first impression your business makes on every one, from thousands
          of perspective clients to your competitors, is an image you create.
          Your website delivers that critical first impression. At{" "}
          <h1>Blue Smoke Printed and Digital Media</h1>, we take into
          consideration the major success factors like Usability, Logical Order,
          Flow, and Organic Search Engine Optimization. The{" "}
          <h1>Bue Smoke Media team</h1>, designs websites that pay for
          themselves by generating leads, closing sales, and reducing customer
          service costs.
        </p>
      </section>
      <section className="social-media">
        <img src={socialMedia} alt="social media" />
        <div className="content">
          <p>
            Web Design is the process of creating a user experience and is made
            up of the look and feel, the user interface and information
            architecture.
          </p>
          <p>
            <span>Bottom Line:</span> Consumer recognition increases consumer
            confidence, which in turn, increases sales. What do your customers
            see... <span>...Are You Sure?</span>
          </p>
        </div>
      </section>
    </div>
  );
}
