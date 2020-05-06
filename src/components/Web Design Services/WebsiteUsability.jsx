import React from "react";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
//* Images
import websiteUsability from "../../images/website_design_useability.png";

export default function WebsiteUsability() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="website-usability">
        <img src={websiteUsability} alt="this is the SEO" />
        <div className="content">
          <h1>Creating Your Website</h1>
          <p>lorem ipsum</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
