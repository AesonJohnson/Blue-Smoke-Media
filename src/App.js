import React from "react";
// import "./style/App.css";
import "./style/_Main.css";
import {
  Switch,
  Route
} from "react-router-dom";
//* components
import Home from "./components/Home";
import Team from "./components/Team";
// * Web Design Services
import AdCopyWriting from "./components/Web Design Services/Ad-CopyWriting";
import CustomWebsiteDesign from "./components/Web Design Services/CustomWebsiteDesign";
import ECommerceWebsiteDevelopment from "./components/Web Design Services/E-CommerceWebsiteDevelopment";
import InquirySurveyForm from "./components/Web Design Services/InquirySurveyForm";
import WebMaintenance from "./components/Web Design Services/WebMaintenance";
import WebsiteUsability from "./components/Web Design Services/WebsiteUsability";
// * SEO
import OrganicSeo from "./components/SEO/OrganicSeo";
import SeoFriendly from "./components/SEO/SeoFriendly";
// * Graphic Design Services
import PrintAndGraphicServices from "./components/Graphic Design Services/PrintAndGraphicServices";
import PrintedMediaLogos from "./components/Graphic Design Services/PrintedMediaLogos";
import WebsiteLogoDesign from "./components/Graphic Design Services/WebsiteLogoDesign";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

//todo learn E-Commerce
//todo add SEO to website w/ CoBe
function App() {
  //! enable video here
  localStorage.setItem("videoPlayed", false);
  return ( <
    div className = "App" >
    <
    Switch >
    <
    Route exact path = "/"
    component = {
      Home
    }
    />{" "} <
    Route path = "/team"
    component = {
      Team
    }
    /> <
    Route path = "/Ad-CopyWriting"
    component = {
      AdCopyWriting
    }
    />{" "} <
    Route path = "/customWebsiteDesign"
    component = {
      CustomWebsiteDesign
    }
    />{" "} <
    Route path = "/E-CommerceWebsiteDevelopment"
    component = {
      ECommerceWebsiteDevelopment
    }
    />{" "} <
    Route path = "/inquirySurveyForm"
    component = {
      InquirySurveyForm
    }
    />{" "} <
    Route path = "/webMaintenance"
    component = {
      WebMaintenance
    }
    />{" "} <
    Route path = "/websiteUsability"
    component = {
      WebsiteUsability
    }
    />{" "} {
      /* //! SEO */ } < Route path = "/seoOrganic"
    component = {
      OrganicSeo
    }
    />{" "} <
    Route path = "/seoFriendly"
    component = {
      SeoFriendly
    }
    />{" "} {
      /* //! Graphic Design Services */ } {
      " "
    } <
    Route path = "/printAndGraphicServices"
    component = {
      PrintAndGraphicServices
    }
    />{" "} {
      /* //! Web Design Services */ } <
    Route path = "/printedMediaLogos"
    component = {
      PrintedMediaLogos
    }
    />{" "} <
    Route path = "/websiteLogoDesign"
    component = {
      WebsiteLogoDesign
    }
    />{" "} <
    Route path = "/portfolio"
    component = {
      Portfolio
    }
    />{" "} <
    Route path = "/blog"
    component = {
      Blog
    }
    />{" "} <
    Route path = "/contact"
    component = {
      Contact
    }
    />{" "} <
    Route component = {
      NoMatch
    }
    />{" "} <
    /Switch>{" "} <
    /div>
  );
}

function NoMatch({
  location
}) {
  return ( <
    div className = "error 404" >
    <
    h3 >
    404 No match
    for < code > {
      location.pathname
    } < /code>{" "} <
    /h3>{" "} <
    /div>
  );
}

export default App;
