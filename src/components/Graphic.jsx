import React from "react";
//* Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
//* Images
import fingersCrossed from "../images/fingers-crossed.png";
import light from "../images/recognition-rememberance-image.png";
import respect from "../images/respect-image.png";
import eagle from "../images/eagle.png";
import coffeeShelf from "../images/coffee-shelf.png";

export default function Graphic() {
  return (
    <>
      <Header />
      <Navigation />
      <img src={fingersCrossed} alt="Experts" />
      <h1>Print and Graphic Design Services</h1>
      <p className="top">
        Design will take an ordinary experience and turn it into a powerful
        experience, one that is not quickly forgotten. Leaving this kind of
        impression on your customer, is an integral key to success. Good design
        has power; it may be hard to measure, but there are ways to see the
        value inherent in purposeful, targeted and personal design.
      </p>
      <div className="bottom">
        <div className="images-left">
          <img src={light} alt="recognition" />
          <img src={respect} alt="respect" />
          <img src={eagle} alt="eagle" />
          <img src={coffeeShelf} alt="branding" />
        </div>
        <div className="text-right">
          <p>
            <span>Recognition - </span>Who are you? What do you do? It’s got to
            show, and it’s got to be clear. If people can recognize and
            differentiate you from the crowd, you’re going to do better than the
            crowd.
          </p>
          <p>
            <span>Remembrance - </span>If they can’t remember who you were or
            what you were about, your chances of doing business with them again
            are probably slim. Good design will make an impression on your
            customers or clients. They won’t forget about you.
          </p>
          <p>
            <span>Respect - </span>Believe it or not, good design is apparent to
            almost everyone. They might not know exactly why, but they know when
            something looks good. People respect design because it shows that
            you care about how you look. It’s an easy connection to make that if
            you care about how you look, you care just as much about your
            products, services and ideas. People will see that and respect you.
          </p>
          <p>
            <span>Trust - </span>Respect leads to Trust and Trust is priceless.
            Design plays a very important part in establishing Trust with the
            people you work with. It’s not the only part, but it’s something
            that is often overlooked as unnecessary, or not worth the expense.
            It is worth it; you want to give your client the right impression.
          </p>
          <p>
            An appropriate brochure, business card, logo or any printed media is
            a necessity when it comes to spreading the word about your company.
            And “appropriate” might mean the use of a burlap envelope, a
            tipped-on photo, or a cinnamon-stick binding — it all depends on
            your industry and your objectives. We get to know you and what you
            do to be sure that your literature conveys an accurate image.{" "}
            <span>
              Every project at Blue Smoke Digital and Printed Media, is custom
              designed to your digital or graphic media needs, specifically to
              address the individual challenges of each project we work on.
            </span>{" "}
            Whether it’s the introduction of a product or service, a new
            corporate identity, or a one-of-a-kind promotion you have our
            guarantee that it will be unique.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}