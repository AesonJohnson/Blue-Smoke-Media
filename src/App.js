import React from "react";
// import "./style/App.css";
import "./style/_Main.css";
import { Switch, Route } from "react-router-dom";
//* components
// import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SeoFriendly from "./components/SEO/SeoFriendly";
import OrganicSeo from "./components/SEO/OrganicSeo";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Graphic from "./components/Graphic";
import WebsiteLogoDesign from "./components/WebsiteLogoDesign";
import Portfolio from "./components/Portfolio";
import PrintedMediaLogos from "./components/PrintedMediaLogos";
import Team from "./components/Team";
import CustomWebsiteDesign from "./components/CustomWebsiteDesign";
import WebMaintenance from "./components/WebMaintenance";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/seoFriendly" component={SeoFriendly} />
        <Route path="/seoOrganic" component={OrganicSeo} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/graphic" component={Graphic} />
        <Route path="/websiteLogoDesign" component={WebsiteLogoDesign} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/printedMediaLogos" component={PrintedMediaLogos} />
        <Route path="/team" component={Team} />
        <Route path="/customWebsiteDesign" component={CustomWebsiteDesign} />
        <Route path="/webMaintenance" component={WebMaintenance} />
      </Switch>
    </div>
  );
}

export default App;
