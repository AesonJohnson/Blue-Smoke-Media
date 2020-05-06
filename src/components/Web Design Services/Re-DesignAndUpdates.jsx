import React from "react";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
//* Images
import placeholder from "../../images/globe-stretch.png";

export default function ReDesignAndUpdates() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="re-design-and-updates">
        <img src={placeholder} alt="this is the SEO" />
        <div className="content">
          <h1>Re-DesignAndUpdates</h1>
          <p>lorem</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
