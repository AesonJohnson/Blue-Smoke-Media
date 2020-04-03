import React from "react";
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
//* components
// import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Navigation} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
