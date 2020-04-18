import React from "react";
//* Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import seoPuzzle from "../images/seo-puzzle.png";

export default function OrganicSeo() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="seo-friendly">
        <img src={seoPuzzle} alt="seo" />
        <div className="wrapper">
          <div className="top">
            <span>Search Engine Friendly Web Design...</span>
            <span>...and Search Engine Optimization</span>
          </div>
          <h2>
            First, what is search engine friendly web design and search engine
            optimization?
          </h2>
          <p>
            Search engines are a major source of traffic to most websites, but
            many website owners have discovered, simply having a website does
            not mean that people will find it. Enter search engine friendly web
            design. In today’s competitive market, it isn’t just about having
            great meta tags any longer - web sites must be built to rank well
            within the search engines.
          </p>
          <p>
            At <span>Blue Smoke Digital Media</span>, we know that a web site’s
            basic search engine “friendliness” should, in most cases, be part of
            the overall design plan for a new web site. Good search engine
            rankings are often crucial to the goals of our clients. This is why
            we incorporate these fundamental techniques in our designs as a
            standard part of even our most affordable packages.
          </p>
          <h4>What about high rankings in the search engines?</h4>
          <p>
            Search engines are constantly changing. Additionally, as the number
            of pages on the Web grows, some search engines drop pages in order
            to make room for more — and almost all change how they “rank” pages
            over time.
          </p>
          <p>
            While developing your custom designed web site from the ground up,
            <span> Blue Smoke Digital Media </span>
            includes built in organic search engine optimization. This includes
            online architectural design principles carefully combining
            information delivery and intuitive navigation to satisfy the
            visitor’s needs. However, paid or not, most search engines base how
            high your website ranks on various factors. If yours meets their
            criteria, you’ll get a better ranking than the next website. As part
            of your website package, we will utilize our organic search engine
            friendly design methodology, which has been successful in gaining
            excellent rankings in the search engines.
          </p>
          <p>
            Get traffic and potential clients with a search engine friendly
            website.
            <span id="contact">Contact us</span> today.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
