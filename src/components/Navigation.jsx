import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/team">Meet the Team</NavLink>
      <NavLink to="/web">Web Design Services</NavLink>
      <NavLink to="/graphic">Graphic Design Services</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </nav>
  );
}
