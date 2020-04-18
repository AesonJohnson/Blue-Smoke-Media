import React from "react";
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
//* components
// import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Team from "./components/Team";
import Web from "./components/Web";
import OrganicSeo from "./components/OrganicSeo";
import SeoFriendly from "./components/SeoFriendly";
import Graphic from "./components/Graphic";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/web" component={Web} />
        <Route path="/seo" component={SeoFriendly} />
        <Route path="/graphic" component={Graphic} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
