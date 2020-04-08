import React from "react";
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
//* components
// import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={Info} />
        <Route path="/web" component={Info} />
        <Route path="/graphic" component={Info} />
        <Route path="/portfolio" component={Info} />
        <Route path="/blog" component={Info} />
        <Route path="/contact" component={Info} />
      </Switch>
    </div>
  );
}

export default App;
