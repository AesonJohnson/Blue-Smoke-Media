import React from "react";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";
//* Images
import websiteMaintenance from "../../images/website-maintenance.jpg";

export default function WebMaintenance() {
  return (
    <>
      {/* <Header /> */}
      {/* <Navigation /> */}{" "}
      <div className="web-maintenance">
        <img src={websiteMaintenance} alt="bug fixes, updates" />
        <div className="content">
          <h1>Website Maintenance Agreements</h1>
          <p>
            <span>Blue Smoke Digital and Printed Media,</span> provides
            maintenance agreements to fit your specific maintenance needs,
            offering comprehensive website maintenance solutions to maintain
            your website. Whether your site requires an occasional update or
            ongoing weekly maintenance, we have a solution to keep your site
            fresh, up-to-date, and accurate. Our cost-effective and convenient
            website maintenance plans are designed to fit your updating needs
            and budget.With a Website Maintenance agreement, updates are
            normally completed within 24 hours of the request. This ensures that
            visitors and potential clients will receive accurate information.
            From an occasional update, to weekly and daily updates, we would be
            honored to provide our services.
          </p>
          <h3>Option One:</h3>
          <p>
            Pay Per Incident
            <br />
            Pay for web site maintenance as it is needed. The Client pays an “as
            needed” hourly rate based on current hourly rates to be agreed upon
            at the onset of the contract.
          </p>
          <h3>Option Two:</h3>
          <p>
            Your website is checked regularly for correct functionality. Every
            month we will perform a web site maintenance check to ensure that
            pages and links are working correctly and that forms within the site
            are functioning as required. Any identified malfunctions are fixed.
            Any updates required will be made within 48 hours of the request.
            The amount of estimated services will determine the cost per month.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
