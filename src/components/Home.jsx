import React from "react";
//* Components
import Navigation from "./Navigation";
import Footer from "./Footer";
//* Images
import headerLong from "../images/header.png";
import silhouette from "./../images/silhouette.png";
import socialMedia from "./../images/social-media.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={headerLong} alt="header" id="header" />
      <Navigation />
      <section className="globe">
        <p>
          <h1>Blue Smoke Digital and Printed Media</h1>
          <br /> produces media for Individual businesses, Small and Medium
          sized businesses - Websites that are fast loading, Organically Search
          Engine Optimized, visually appealing, and easy to navigate.
        </p>
      </section>
      <section className="silhouette">
        <img src={silhouette} alt="Digital Marketing" />
        <p>
          The first impression your business makes on every one, from thousands
          of perspective clients to your competitors, is an image you create.
          Your website delivers that critical first impression. At{" "}
          <h1>Blue Smoke Digital and Printed Media</h1>, we take into
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
      <section className="mission">
        <div className="left">
          <p>
            We will always remember that we are a service company. Each and
            every customer is valued as a part of who we are today and who we
            will be tomorrow. We will work to earn our customers’ trust. And
            more than simply responding to customer needs, we will work to
            anticipate-With unquestionable honesty, fairness and respect.
          </p>
        </div>
        <div className="right">
          <h4>Digital and Printed Media</h4>
          <p>offers a website that is designed to:</p>
          <ul>
            <li>Enhance YOUR Business Image.</li>
            <li>Increase YOUR Visitor Traffic.</li>
            <li>Encourage Sales.</li>
            <li>Represent YOUR Marketing Objectives.</li>
            <li>Custom Tailored to YOUR Companies Objectives and Budget.</li>
            <li>Focus on Results.</li>
          </ul>
          <h3>Contact Blue Smoke Media</h3>
          <p id="contact">
            today and request a free consultation or quote. A friendly associate
            will get back to you within 24 hours to discuss your project in
            detail.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
