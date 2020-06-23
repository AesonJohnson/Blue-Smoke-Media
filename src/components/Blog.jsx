import React from "react";
//* Images
import placeholder from "../images/globe-stretch-new.png";

export default function Template() {
  return (
    <>
      <div className="Template">
        <img src={placeholder} alt="this is the SEO" />
        <div className="content">
          <h1>Blog</h1>
          <p>
            We have included some great resources via helpful articles. Please
            click on any of the links below for information on organic search
            engine optimization, web copy writing, web design, choosing the
            right keywords and meta tags, effective logos, online marketing, the
            importance of an online presence and much more. If you have any
            questions or feel you need to contact us directly please fill out
            our inquiry form and a representative will respond to your need as
            quickly as possible.
          </p>
        </div>
      </div>
    </>
  );
}
