import React from "react";
import { Helmet } from "react-helmet";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
//* Images
import printedMedia from "../../images/printed-media.png";

export default function PrintedMediaLogos() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is what you want to show as the page content in the Google SERP Listing"
        />
      </Helmet>
      {/*{/* <Header /> */}
      <Navigation /> */}
      <div className="printed-logos">
        <img src={printedMedia} alt="this is the SEO" />
        <div>
          <h1>Printed Media Logos</h1>
          <p>
            One of the toughest design projects is reducing the identity of an
            organization to a single symbol. Many companies are complex systems
            of individuals and entities working toward a variety of goals. Our
            identities are the result of a process that remains flexible while
            at the same time building a brand. Looking for a unique image to
            represent your corporate identity? Or do you just need to modify
            your current logo for your web site? At
            <span>
              your current logo for your web site? At Blue Smoke Printed and
              Digital Media, your current logo for your web site? At
            </span>
            we create logos that capture the essence of your business, leaving
            impact for both print and web display.
          </p>
          <p>
            If you’re looking for a new logo or redesigning your current one for
            your web sit or corporate identity, we can assist you in the
            decision-making process. We specialize in both low-resolution (web)
            and high-resolution (print) graphic images. If you are interested in
            the prospect for a new logo, a redesign of your current logo or are
            in need of a total corporate identity, please complete the
            information request form. A representative will contact you within
            24 hours of receipt of your request.
          </p>
        </div>
      </div>
      {/*  {/* <Footer /> */}
    </>
  );
}
