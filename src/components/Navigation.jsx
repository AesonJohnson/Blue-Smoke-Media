import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/team">
        Meet the
        <br />
        Team
      </NavLink>
      <NavLink to="/web">
        Web Design
        <br />
        Services
      </NavLink>
      <NavLink to="/seoOrganic">SEO</NavLink>
      <NavLink to="/graphic">
        Graphic Design
        <br />
        Services
      </NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">
        Contact
        <br />
        Us
      </NavLink>
      <NavLink to="/logo">Logo</NavLink>
    </nav>
  );
}
