import React from "react";
import { NavLink } from "react-router-dom";

//todo fix the order, set up links to pages, get site map
//todo make navbar not able to copy letters
export default function Navigation() {
  return (
    <nav>
      <ul id="menu">
        <li>
          <NavLink to="#">Services</NavLink>
          <ul>
            <li>
              <NavLink to="#"> Website Design</NavLink>
              <ul>
                <li>
                  <NavLink to="/customWebsiteDesign">
                    Custom Website Design
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/E-CommerceWebsiteDevelopment">
                    E-Commerce Website Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/coding">Coding and Programming</NavLink>
                </li>
                <li>
                  <NavLink to="/websiteUsability">
                    Creating Your Website-Useability
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ad-CopyWriting">
                    Website Ad-Copy Writing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/webMaintenance">Website Maintenance</NavLink>
                </li>
                <li>
                  <NavLink to="/inquirySurveyForm">Inquiry/Survey Form</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">Search Engine Optimization</NavLink>
              <ul>
                <li>
                  <NavLink to="/seoFriendly">
                    SEO - Search Engine Optimization
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/seoOrganic">
                    Organic Search Engine Optimization
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">Graphic Design</NavLink>
              <ul>
                <li>
                  <NavLink to="/websiteLogoDesign">Website Logo Design</NavLink>
                </li>
                <li>
                  <NavLink to="/printedMediaLogos">Print Logo Design</NavLink>
                </li>
                <li>
                  <NavLink to="/printAndGraphicServices">
                    Print & Graphic Design Services
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/team" id="team">
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Our Work</NavLink>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
