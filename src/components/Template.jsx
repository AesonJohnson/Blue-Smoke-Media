import React from "react";
//* Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
//* Images
import placeholder from "../images/globe-stretch.png";

export default function Template() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="Template">
        <img src={placeholder} alt="this is the SEO" />
        <div>
          <h2>Title</h2>
          <p>lorem ipsum</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
