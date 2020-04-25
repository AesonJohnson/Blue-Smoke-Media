import React from "react";
import { NavLink } from "react-router-dom";

//todo fix the order, set up links to pages, get site map

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
        <NavLink to="/web">
          Web Design
          <br />
          Services
        </NavLink>
        <div className="drop-content">
          <NavLink to="/#1">Custom Design</NavLink>
          <NavLink to="/#2">Re-Design & Updates</NavLink>
          <NavLink to="/#3">E-Commerce Development</NavLink>
          <NavLink to="/#4">Useability</NavLink>
          <NavLink to="/#4">Ad-Copy Writing</NavLink>
          <NavLink to="/#4">Maintenance</NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to="/seoOrganic">SEO</NavLink>
        <div className="drop-content">
          <NavLink to="/#1">SEO Friendly</NavLink>
          <NavLink to="/#2">Organic SEO</NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to="/graphic">
          Graphic Design
          <br />
          Services
        </NavLink>
        <div className="drop-content">
          <NavLink to="/#1">Website Logo Design</NavLink>
          <NavLink to="/#1">Print Logo Design</NavLink>
        </div>
      </div>

      <div className="dropdown">
        {" "}
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>

      <div className="dropdown">
        {" "}
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
