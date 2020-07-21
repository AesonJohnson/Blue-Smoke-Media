import React from "react";
import { NavLink } from "react-router-dom";

//todo fix the order, set up links to pages, get site map
export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <div class="dropdown">
        <button class="drop-btn nav-item">Services</button>
        <div class="dropdown-content">
          <div className="nav-section">
            <h3>SEO</h3>
            <NavLink to="/seoFriendly" className="drop-item">
              SEO - Search Engine Optimization
            </NavLink>
            <NavLink to="/seoOrganic" className="drop-item">
              Organic Search Engine Optimization
            </NavLink>
          </div>
          <div className="nav-section ">
            <h3>Web Design</h3>
            <div className="split">
              <div>
                <NavLink to="/customWebsiteDesign" className="drop-item">
                  Custom Website Design
                </NavLink>

                <NavLink
                  to="/E-CommerceWebsiteDevelopment"
                  className="drop-item"
                >
                  E-Commerce Website Development
                </NavLink>

                <NavLink to="/websiteUsability" className="drop-item">
                  Creating Your Website-Useability
                </NavLink>
              </div>
              <div>
                <NavLink to="/ad-CopyWriting" className="drop-item">
                  Website Ad-Copy Writing
                </NavLink>

                <NavLink to="/webMaintenance" className="drop-item">
                  Website Maintenance
                </NavLink>
                <NavLink to="/coding" className="drop-item">
                  Coding and Programming
                </NavLink>
              </div>
            </div>
            <NavLink to="/inquirySurveyForm" className="drop-item">
              Inquiry/Survey Form
            </NavLink>
          </div>
          <div className="nav-section">
            <h3>Graphic Design</h3>
            <NavLink to="/websiteLogoDesign" className="drop-item">
              Website Logo Design
            </NavLink>

            <NavLink to="/printedMediaLogos" className="drop-item">
              Print Logo Design
            </NavLink>

            <NavLink to="/printAndGraphicServices" className="drop-item">
              Print & Graphic Design Services
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/team" className="nav-item">
        Our Team
      </NavLink>
      <NavLink to="/portfolio" className="nav-item">
        Our Work
      </NavLink>
      <a href="#blog" className="nav-item">
        Blog
      </a>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
}
