import React from "react";
import "./styles.css";
import Landing from "./components/Landing";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar_Portfolio from "./components/Navbar_Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar_Portfolio />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
