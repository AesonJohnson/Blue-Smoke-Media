import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/team">
        Meet
        <br />
        the
        <br />
        Team
      </NavLink>
      <NavLink to="/web">
        Web
        <br />
        Design
        <br />
        Services
      </NavLink>
      <NavLink to="/graphic">
        Graphic
        <br />
        Design
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
    </nav>
  );
}
