import React from "react";
//* Components
import Header from "./Utils/Header";
import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";
//* Images
import placeholder from "../images/globe-stretch.png";

export default function Template() {
  return (
    <>
      <div className="Template">
        <img src={placeholder} alt="this is the SEO" />
        <div className="content">
          <h1>Portfolio</h1>
          <p>
            To receive more information about our company, services,
            industry-specific recent projects and case studies, please fill out
            the form below.
          </p>
        </div>
      </div>
    </>
  );
}
