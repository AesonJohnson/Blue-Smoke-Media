import React from "react";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
//* Images
import placeholder from "../../images/globe-stretch.png";

export default function ECommerceWebsiteDevelopment() {
  return (
    <>
      {/* <Header /> */}
      {/* <Navigation /> */}{" "}
      <div className="e-commerce-website-development">
        <img src={placeholder} alt="this is the SEO" />
        <div className="content">
          <h1>E-Commerce Website Development</h1>
          <p>lorem</p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
