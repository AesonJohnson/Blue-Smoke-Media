import React from "react";
//* Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
//* Images
import placeholder from "../images/globe-stretch.png";

export default function Web() {
  return (
    <div className="web">
      <Header />
      <Navigation />
      <img src={placeholder} alt="imageHere" />
      <p id="web-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        laboriosam deserunt id debitis commodi rem reprehenderit laborum aut
        iure ut, ullam, ipsum aperiam! Eligendi tempora eius unde esse, ea ex.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
        voluptatibus delectus. Pariatur minus dolorem eius neque commodi
        officia. Laudantium quo minus porro quis odit ratione nisi amet omnis
        dolorem dignissimos!
      </p>
      <Footer />
    </div>
  );
}
