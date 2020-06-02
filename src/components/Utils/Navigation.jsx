import React from "react";
import { NavLink } from "react-router-dom";

//todo fix the order, set up links to pages, get site map
//todo make navbar not able to copy letters
export default function Navigation() {
  return (
    <nav>
      <div className="dropdown">
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/team" id="team">
          Meet the
          <br />
          Team
        </NavLink>
      </div>

      <div className="dropdown">
        <NavLink to="#">
          Web Design
          <br />
          Services
        </NavLink>
        <div className="drop-content">
          <NavLink to="/customWebsiteDesign">Custom Website Design</NavLink>
          <NavLink to="/E-CommerceWebsiteDevelopment">
            E-Commerce Website Development
          </NavLink>
          <NavLink to="/coding">Coding and Programming</NavLink>
          <NavLink to="/websiteUsability">
            Creating Your Website-Useability
          </NavLink>
          <NavLink to="/ad-CopyWriting">Website Ad-Copy Writing</NavLink>
          <NavLink to="/webMaintenance">Website Maintenance</NavLink>
          <NavLink to="/inquirySurveyForm">Inquiry/Survey Form</NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to="#">
          Search Engine <br />
          Optimization
        </NavLink>
        <div className="drop-content">
          <NavLink to="/seoFriendly">SEO - Search Engine Optimization</NavLink>
          <NavLink to="/seoOrganic">Organic Search Engine Optimization</NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to="#">
          Graphic Design
          <br />
          Services
        </NavLink>
        <div className="drop-content">
          <NavLink to="/websiteLogoDesign">Website Logo Design</NavLink>
          <NavLink to="/printedMediaLogos">Print Logo Design</NavLink>
          <NavLink to="/printAndGraphicServices">
            Print & Graphic Design Services
          </NavLink>
        </div>
      </div>

      {/* <div className="dropdown">
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div> */}

      <div className="dropdown">
        <NavLink to="/blog">Blog</NavLink>
      </div>

      <div className="dropdown">
        <NavLink to="/contact">
          Contact
          <br />
          Us
        </NavLink>
      </div>
    </nav>
  );
}
